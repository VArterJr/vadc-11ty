import fs from "fs";
import path from "path";
import postcss from "postcss";
import tailwindcssPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  // Process Tailwind CSS
  eleventyConfig.on("eleventy.before", async () => {
    const tailwindInputPath = path.resolve("./src/styles/index.css");
    const tailwindOutputPath = "./dist/styles/index.css";
    const cssContent = fs.readFileSync(tailwindInputPath, "utf8");
    const outputDir = path.dirname(tailwindOutputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const result = await postcss([
      tailwindcssPostcss({
        configPath: "./tailwind.config.mjs",
      }),
      autoprefixer(),
    ]).process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch for changes in CSS files
  eleventyConfig.addWatchTarget("./src/styles/");

  // Add the Image Transform plugin
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Output formats
    formats: ["webp", "jpeg"],
    // Output widths
    widths: [300, 600, 900, 1200],
    // Default HTML attributes
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });
  // Markdown filter for processing markdown in templates
  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    permalink: false, // Don't add visible permalink anchors
    level: [1, 2, 3, 4],
    slugify: (str) =>
      str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, ""),
  });

  // Set the markdown library for Eleventy
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("markdownify", function (content) {
    return md.render(content || "");
  });

  // Split filter for separating content
  eleventyConfig.addFilter("split", function (content, delimiter) {
    return (content || "").split(delimiter || "");
  });

  // Date filter for blog posts
  eleventyConfig.addFilter("dateDisplay", function (date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }); // HTML date string filter for datetime attributes
  eleventyConfig.addFilter("htmlDateString", function (date) {
    return new Date(date).toISOString().split("T")[0];
  });

  // Collections for navigation and content organization
  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/*.md");
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });
  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"],
  };
}
