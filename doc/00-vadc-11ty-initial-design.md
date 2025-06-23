# VinceArter.com 11ty (Eleventy) Design Document

## ©️2025 Vincent Lee Arter, Jr. (vince@vincearter.com)
[Original and previous sites ©️2016-2025 Vincent Lee Arter, Jr. (vince@vincearter.com)]

## Purpose and Creation

This will be a redesign and build of my website https://www.vincearter.com using 11ty (Eleventy), Tailwind CSS, and daisyUI. I'll use the latest versions of all of those tools. I use this site for info about myself and projects I work on as well as my CV / Resume. I will use my old site as a reference of layouts and such, but don't copy the data.

## Implementation

The goal is to use Markdown for content bodies (main content sections of pages as well as asides). I want to do my Markdown for content and 11ty layouts (stacked layouts are fine) for layout. I really don't want to have to maintain HTML for content. I want to use Markdown. I will use daisyUI themes and I will implement their Theme Controller. It will default to the daisyUI Lemonade theme and allow the user to select others if they prefer from a dropdown in the top horizontal nav bar (far right past all menu links). daisyUI is a wrapper for Tailwind CSS and I prefer their approach than raw Tailwind (which is complicated). I will use daisyUI whenever possible.

## Page Structure

These will be the pages / page structure:

- Homepage (will have it's own layout)
- About ((About my site and where it came from. Will use a left content and right aside layout.)
- CV (My resume page and education / certification page. Will use a left content with right aside layout.)
- Posts (My blog page. Will use just a content layout (no asides).)
- Tech (Page of my technical and build projects. Will use a left content with right aside layout.)
- Media (This is my page for media, music, and art. There will be child pages off of this page.)
  - Music (A page that is for my music. It will have a container for my SoundCloud page. Will use a left content with right aside layout.)
  - Writing (A page for my poetry and stories. I don't know what I'm doing with this yet. Will use a left content with right aside layout.)
  - Visual Art (A page for my collections of Visual Art I create like backgrounds for operating systems and such. Will use a left content with right aside layout.)
- Reviews (This page is for my reviews and is just a link to pages where I do reviews, such as Amazon. Will use a left content with right aside layout.)

## Technology Stack

- **[11ty (Eleventy)](https://11ty.dev)** v3.1.1 - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** v4.1.10 - Utility-first CSS framework
- **[daisyUI](https://daisyui.com)** v5.0.43 - Tailwind CSS components and themes
- **Markdown** - Content authoring with markdown-it v14.1.0
- **Nunjucks** - Templating engine (default)

## References

- 11ty (Eleventy) Docs (Including Install): https://www.11ty.dev/docs/
- Tailwind CSS Install: https://tailwindcss.com/docs/installation
- Tailwind CSS Docs: https://tailwindcss.com/docs
- daisyUI Install for 11ty: https://daisyui.com/docs/install/11ty/
- daisyUI Docs: https://daisyui.com/docs/intro/
- daisyUI Theme Controller: https://daisyui.com/components/theme-controller/
- daisyUI List of Built-in Themes: https://daisyui.com/docs/themes/
