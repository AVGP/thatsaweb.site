---
title: Markdown Riso Style Guide
date: 2026-07-16
description: A showcase of various standard markdown elements formatted and styled under the riso theme.
tags:
  - styles
  - guides
  - markdown
author: Operator Zero
---

This page showcases how standard Markdown elements are rendered in our **90s Risograph theme**. We have custom-tailored the typography, borders, and margins to ensure that all standard markdown renders beautifully without requiring inline HTML elements.

## Headings

You can use standard markdown headings (`#` to `######`) to structure your thoughts. In this template, headings use a modern geometric font and get stylized Riso underlines or text-shadow offsets depending on their level.

### Heading 3 (H3)
This is a standard third-level heading.

#### Heading 4 (H4)
And a fourth-level heading.

---

## Inline Styles

You can format text inside your paragraphs using standard markdown syntax:
- **Bold text** is written using `**bold**`.
- *Italic text* is written using `*italic*`.
- Strikethrough is written using `~~strikethrough~~`.
- You can also combine them: ***bold and italic***.

Here is a sentence with an `inline code snippet` to highlight commands or files, and a [standard hyperlink](https://11ty.dev/) that changes its background and color on hover.

---

## Blockquotes

Blockquotes are perfect for highlighting key callouts or quotes from external sources:

> "The Risograph's spot colors and mechanical errors are what make it feel human. In a world of pixel-perfect rendering, stenciled ink feels like magic."
> — Riso enthusiast

---

## Lists

Both ordered and unordered lists are styled with generous padding and space for readability:

### Things that are cool:
- Vibrant fluorescent pink soy ink
- Dithered pixel art
- Fast static site generators (like Eleventy!)
- Thick, brutalist layout lines

### Steps to publish:
1. Write a markdown file.
2. Save it in the `src/posts/` folder.
3. Commit and push your code.

---

## Code Blocks

Syntax-highlighted code blocks or simple plain preformatted blocks are styled with a solid federal blue shadow overlay:

```css
:root {
  --riso-pink: #FF358B;
  --riso-blue: #1B3BF5;
  --ink-black: #1E1C1A;
  box-shadow: 6px 6px 0 var(--ink-black);
}
```

---

## Inline Images

Images are centered and framed with thick borders and a soft pink drop shadow:

![Riso Stencil Art Mockup](https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=60)

*(Photo from Unsplash representing colorful risograph stenciled art styles)*
