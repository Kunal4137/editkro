# Editkaro.in — Portfolio Website

A dark cinematic portfolio webpage built for **Editkaro.in**, a social media marketing and video editing agency. This project was created as part of a VaultofCodes mini project assignment.

---

## 🔗 Live Demo

> Deploy to [Netlify Drop](https://6a3cbfe3b1e6044dd133e778--editkroportfolio876.netlify.app/) 

---



## ✨ Features

- **Glitch Hero Animation** — Animated headline with CSS glitch effect that triggers every few seconds
- **9-Category Filter System** — Instantly filters portfolio cards by: Short Form, Long Form, Gaming, Football, eCommerce Ads, Documentary, Color Grading, Anime
- **Video Lightbox** — Click any card to open the video in a fullscreen overlay player (supports YouTube embeds). Press `Escape` or click outside to close
- **Scroll Reveal Animations** — Sections and stats fade in as you scroll down
- **Infinite Marquee** — Scrolling ticker listing all service categories
- **Stats Bar** — Highlights key agency numbers (500+ videos, 120+ clients, etc.)
- **Services Grid** — All 9 service types with icons and descriptions
- **Film Grain Overlay** — Subtle CSS grain texture for a cinematic feel
- **Radial Glow Effects** — Purple/magenta ambient glow in hero and CTA sections
- **Fully Responsive** — Works on mobile, tablet, and desktop
- **Reduced Motion Support** — Respects `prefers-reduced-motion` for accessibility

---

## 🗂️ Project Structure

```
editkaro-portfolio/
├── index.html      # Complete single-file project (HTML + CSS + JS)
└── README.md
```

All styles and scripts are embedded in `index.html` — no build tools, no dependencies, no npm required.

---

## 🛠️ Built With

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Animations, grid layout, custom properties, responsive design |
| Vanilla JavaScript | Filter logic, lightbox, scroll reveal observer |
| Google Fonts | Bebas Neue (display) + Inter (body) |
| Unsplash | Placeholder category thumbnails |

---

## 📂 Video Categories Showcased

1. Short Form Videos
2. Long Form Videos
3. Gaming Videos
4. Football Edits
5. eCommerce Ads
6. Documentary Style
7. Color Grading
8. Anime Videos
9. Brand Ads / Social Media Ads

---

## 🚀 How to Run Locally

No setup needed. Just open the file in any browser:

```bash
# Clone or download the project, then:
open index.html
# or double-click index.html in your file explorer
```

---

## 🔧 Customization Guide

### Replace Thumbnails
Each video card has an `<img class="card-thumb" src="...">` tag. Replace the `src` with your own hosted image URL:

```html
<img class="card-thumb" src="YOUR_IMAGE_URL_HERE" alt="Description" />
```

### Replace Video Links
Each card has a `data-video` attribute with a YouTube embed URL. Update it with your actual video:

```html
<div class="video-card" data-video="https://www.youtube.com/embed/YOUR_VIDEO_ID">
```

### Change Accent Colors
Edit the CSS variables at the top of the `<style>` block:

```css
:root {
  --accent: #FF2D78;   /* Primary pink-red */
  --accent2: #B400FF;  /* Secondary purple */
}
```

### Add More Cards
Copy any existing `.video-card` block inside `#videoGrid` and update the `data-cat`, `data-title`, `data-video`, `src`, and text content.

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| Desktop (>768px) | Full nav, multi-column grid, tall card variants |
| Mobile (≤768px) | Hamburger-ready nav hides links, single column grid, tall cards revert to standard ratio |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#080808` | Page background |
| `--surface` | `#111111` | Section backgrounds |
| `--card` | `#141414` | Card backgrounds |
| `--accent` | `#FF2D78` | Primary CTAs, active states, play button |
| `--accent2` | `#B400FF` | Gradient pair, glow effects |
| `--text` | `#F0F0F0` | Body text |
| `--muted` | `#888888` | Secondary text, labels |
| Display Font | Bebas Neue | Hero, headings, card titles |
| Body Font | Inter | Nav, paragraphs, buttons |

---


## 👤 Author

**Kunal**
B.Tech CSE — Sushant University (Class of 2028)
Frontend Web Development | [github.com/Kunal4137](https://github.com/Kunal4137)

---

## 📄 License

This project was built for educational and portfolio purposes as part of a VaultofCodes internship assignment. All placeholder images are from [Unsplash](https://unsplash.com) and are free to use.
