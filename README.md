# Aaradhana (आराधना) — Aarti & Shloka Reader

A calm, responsive, and customizable Marathi Aarti and Stotra reading web application (PWA-ready).

---

## 📁 Project Directory Structure

The project has been organized according to modern static-web production standards for reliable deployment across hosting platforms (GitHub Pages, Vercel, Netlify, Cloudflare Pages, Firebase Hosting):

```text
NEW_pro/
├── index.html                   # Main entry HTML document
├── robots.txt                   # Search engine crawl rules
├── site.webmanifest             # PWA metadata & mobile bookmark settings
├── .gitignore                   # Ignore OS & editor artifacts in Git
├── README.md                    # Project documentation & deployment guide
│
├── css/
│   └── styles.css               # Design system, animations, responsive layout, themes
│
├── js/
│   └── app.js                   # Prayer library, search, font & theme state management
│
└── assets/
    ├── docs/                    # Reference documents and manuscripts (PDF & text)
    │   ├── ashwin-shukla-paksha-aarti.txt
    │   ├── gajanana-ganaraya.txt
    │   ├── ghalin-lotangan.pdf
    │   ├── maruti-aarti.txt
    │   └── vyankatesh-aarti.txt
    ├── icons/                   # Brand icons, category SVGs and favicon
    │   ├── aarti_icon.svg       # Aarti category icon (Diya & sacred flame)
    │   ├── mantra_icon.svg      # Stotra & Mantra category icon (Japa Mala & Yantra)
    │   ├── shloka_icon.svg      # Shloka category icon (Sacred manuscript scroll)
    │   └── website_icon.svg     # Aaradhana brand logo & app icon (Golden lotus mandala)
    └── images/                  # Original manuscript / printed reference images
        ├── ambe-ek-kari.jpeg
        ├── datta-aarti.jpeg
        ├── durga-aarti.jpeg
        ├── ganapati-atharvashirsha.jpeg
        ├── khandoba-aarti.jpeg
        ├── mahadev-aarti.jpeg
        ├── mahalaxmi-aarti.jpeg
        └── soniyachya-pavlani.jpeg
```

### 🌟 Key Architectural Benefits:
- **Clean Naming (kebab-case & lowercase)**: Removed all spaces, timestamps, and special characters from file names.
- **Linux & Web Server Safe**: Completely eliminates URL encoding issues (`%20`) and case-sensitivity `404 Not Found` errors common on Linux-based production hosts.
- **Dedicated Asset Organization**: Clear separation of `css/`, `js/`, and categorized assets (`assets/images/`, `assets/docs/`, `assets/icons/`).

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it using a local HTTP server:

### Option 1: VS Code Live Server
- Open this folder in VS Code.
- Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Python HTTP Server
Run the following command in terminal:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 1-Click Free Deployment Guide

Because this is a pure static web app (HTML/CSS/JS), it can be deployed for free in under two minutes:

### 1. Netlify (Fastest — 1 Minute Drag & Drop)
1. Sign in to [netlify.com](https://www.netlify.com/).
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the entire `NEW_pro` folder onto the page.
4. Your site will instantly go live with a free SSL certificate (e.g., `https://your-site.netlify.app`).

### 2. GitHub Pages (Recommended for Source Control)
1. Create a new GitHub repository (e.g., `aaradhana`).
2. Open terminal in this folder and initialize Git:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Aaradhana"
   git branch -M main
   git remote add origin https://github.com/<your-username>/aaradhana.git
   git push -u origin main
   ```
3. In your GitHub repository, navigate to **Settings > Pages**.
4. Under **Build and deployment > Branch**, select `main` branch and `/ (root)` folder, then click **Save**.
5. Your website will be live in 1-2 minutes at `https://<your-username>.github.io/aaradhana/`.

### 3. Vercel
1. Log in to [vercel.com](https://vercel.com/).
2. Click **Add New > Project** and import your GitHub repository (or run `npx vercel` in terminal).
3. Click **Deploy**.

---

## ✨ Key Features

- **Devanagari Typography Perfection**: Optimized glyph rendering with Noto Sans & Noto Serif Devanagari, preventing matra overlaps and glyph collisions.
- **6 Natural Color Palettes**: Ivory (शुभ्र), Dawn/Rose (प्रभात), Sage/Tulsi (तुळस), Sky (गगन), Sandalwood (चंदन), and Night/Dark Mode (रात्र).
- **Mobile-First UX**:
  - Floating Action Button (FAB) for instant access to reading settings on mobile.
  - Smooth bottom sheet modal with drag handle and backdrop blur.
  - Large touch targets (≥44px) meeting WCAG accessibility standards.
- **Original Source Viewer**: View original manuscripts and PDF scans directly within the reader.
- **Offline & PWA Ready**: Manifest, responsive viewport, and SVG favicon included.
