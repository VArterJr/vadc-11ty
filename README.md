# VinceArter.com 2025 Rearchitecture & Redesign

My personal website rearchitected, redesigned, and rebuilt with help from 11ty (Eleventy), Tailwind CSS, and daisyUI.

## License

©2016-2025 Vincent Lee Arter, Jr. All rights reserved.

Portions of technology are licensed under their respective licenses. See [Technology Stack](#technology-stack) for details for each of those technologies and their licenses.

🚫 You MAY NOT use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of any of the content on this site without prior written permission from the author (Vincent Lee Arter, Jr.).

☑️ You MAY copy, use, modify, merge, publish, distribute, sublicense, and/or sell copies of the site template(s), design, layout, and implementation under the terms of the [MIT License](https://opensource.org/license/mit/).

⚠️ Basically, you can reuse everything but my content. My content is mine, and you need my written permission to use it.

## Technology Stack

- **[11ty (Eleventy)](https://11ty.dev)** v3.1.1 - Static Site Generator (SSG)
- **[Tailwind CSS](https://tailwindcss.com)** v4.1.10 - Utility-first CSS framework
- **[daisyUI](https://daisyui.com)** v5.0.43 - Tailwind CSS components and themes
- **Markdown** - Content authoring with markdown-it v14.1.0
- **Nunjucks** - Templating engine (default, others may be used as needed)

## References

- 11ty (Eleventy) Docs (Including Install): https://www.11ty.dev/docs/
- Tailwind CSS Install: https://tailwindcss.com/docs/installation
- Tailwind CSS Docs: https://tailwindcss.com/docs
- daisyUI Install for 11ty: https://daisyui.com/docs/install/11ty/
- daisyUI Docs: https://daisyui.com/docs/intro/
- daisyUI Theme Controller: https://daisyui.com/components/theme-controller/
- daisyUI List of Built-in Themes: https://daisyui.com/docs/themes/

## Project Structure

```
src/
├── _includes/
│   └── layouts/          # Page layouts (base, home, content-aside, content-only, post)
├── assets/
│   └── images/          # Image files and media
├── pages/               # Main site pages
│   └── media/           # Media-related pages (music, writing, visual-art)
├── posts/               # Blog posts
├── styles/              # CSS source files
└── index.md             # Homepage
doc/                     # Documentation files
eleventy.config.mjs      # 11ty configuration (ESM)
tailwind.config.mjs      # Tailwind configuration (ESM)
package.json             # Dependencies and scripts
```

## Content Management

- **Pages**: Add new pages to `src/pages/`
- **Blog Posts**: Add new posts to `src/posts/`
- **Media Content**: Add media pages to `src/pages/media/`
- **Layouts**: Five main layouts available:
  - `base.njk` - Base template with navigation and theme switching
  - `home.njk` - Homepage with hero section and stats
  - `content-aside.njk` - Two-column layout (75/25) with sidebar, supports Markdown asides
  - `content-only.njk` - Single column layout for simple pages
  - `post.njk` - Blog post layout with metadata and navigation

## Development

### Available Scripts

- `npm run dev` or `npm start` - Start development server on port 8080
- `npm run build` - Build for production (root deployment)
- `npm run build:subnew` - Build for subdirectory deployment (`/new/` path)
- `npm run status` - Check for running development servers on ports 8080-8084
- `npm run stop` - Stop development server on port 8080
- `npm run stop:all` - Stop all common development servers

## Features

### Responsive Design

Built with daisyUI components and Tailwind CSS for mobile-first responsive design that works on all devices.

### Theme Switching

The site defaults to the daisyUI "lemonade" theme yet includes all 32 daisyUI themes. Users can switch themes using the dropdown in the navigation bar. The selected theme persists in localStorage.

### Image Optimization

Automatic image optimization using `@11ty/eleventy-img` with WebP format and multiple sizes.

### Markdown Asides

The `content-aside.njk` layout supports Markdown content in asides using the `<!-- ASIDE -->` separator.

### 11ty ESM-First

Fully migrated to ES modules with `.mjs` configuration files.

## Customization

### Adding New Pages

1. Create a new Markdown file in `src/pages/`.
2. Add front matter with layout and metadata.
3. Write content in Markdown.
4. There are some things that can't be done with Markdown alone, so I may use Nunjucks (or other) templating for more complex structures.

### Adding New Blog Posts

1. Create a new Markdown file in `src/posts/`/
2. Include front matter with title, date, description, and tags.
3. Use the `post.njk` layout.

### Modifying Themes

Edit the `tailwind.config.mjs` file to add or remove daisyUI themes from the available selection.

## Contact

- Email: vince@vincearter.com
- Website: https://www.vincearter.com

## Version History
- Version 0.1.2 (29-June-2025): Completed the Reviews pages. Added the three new daisyUI for v5: caramellatte, abyss, silk.
- Version 0.1.1 (24-June-2025): Added banner image to the home page.
- Version 0.1.0 (23-June-2025): The first committed "version" of the site in a working state with Home (index), About, and CV almost completed and the rest using temporary content.
