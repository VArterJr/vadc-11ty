---
title: Building This Site with 11ty, Tailwind, and daisyUI
description: A detailed look at how I rebuilt VinceArter.com using modern static site generation technologies
date: 2025-06-19
tags: [web-development, 11ty, tailwind, daisyui, static-site]
layout: layouts/post.njk
---

## Introduction

I recently completed a complete redesign and rebuild of my personal website using modern web technologies. In this post, I'll share why I chose this tech stack and how the development process went.

## The Technology Stack

### 11ty (Eleventy)

I chose [11ty](https://11ty.dev) as my static site generator for several reasons:

- **Simplicity**: 11ty is straightforward to set up and configure
- **Flexibility**: It supports multiple templating languages and doesn't impose strict conventions
- **Performance**: Generates fast, static HTML files
- **Markdown Support**: Perfect for content-focused sites like this one

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com) was the natural choice for styling:

- **Utility-First**: Allows rapid development without writing custom CSS
- **Consistency**: Built-in design system ensures consistent spacing, colors, and typography
- **Responsive**: Mobile-first approach with excellent responsive utilities
- **Performance**: Only includes the CSS you actually use

### daisyUI

[daisyUI](https://daisyui.com) sits on top of Tailwind CSS and provides:

- **Components**: Pre-built, accessible components
- **Themes**: Beautiful, professional themes out of the box
- **Theme Switching**: Easy theme switching functionality
- **Semantic Classes**: More readable class names for common patterns

## Key Features

### Theme Switching

One of my favorite features is the theme controller in the navigation. The site defaults to the "synthwave" theme but visitors can choose from many other options. The selected theme persists in localStorage.

### Responsive Design

The site works great on all devices, from mobile phones to desktop computers. I used daisyUI's responsive components and Tailwind's responsive utilities.

### Fast Loading

As a static site, pages load extremely quickly. The entire site is pre-built and served as static files.

### Markdown Content

All content is written in Markdown, making it easy to write and maintain. The layouts handle the HTML structure while I focus on content.

## Project Structure

The site is organized with:

- **Layouts**: Reusable page templates for different content types
- **Pages**: Main site pages (About, CV, Tech, etc.)
- **Posts**: Blog posts like this one
- **Includes**: Shared template components

## Development Experience

Working with this stack has been excellent:

1. **Hot Reloading**: Changes appear instantly during development
2. **Easy Content**: Writing in Markdown is fast and enjoyable
3. **Theme Customization**: daisyUI makes it easy to experiment with different looks
4. **Build Speed**: The site builds quickly even as content grows

## Conclusion

This tech stack combination has proven to be powerful, flexible, and enjoyable to work with. The site is fast, accessible, and easy to maintain.

If you're considering a similar approach for your own site, I highly recommend this combination of 11ty, Tailwind CSS, and daisyUI.

---

_Have questions about this tech stack or want to discuss web development? [Get in touch](mailto:vince@vincearter.com)!_
