# 📄 React & Tailwind A4 Resume Template

A developer-friendly, print-ready A4 resume template built with **React**, **Vite**, and **Tailwind CSS v4**.

## 🚀 Getting Started

To view and edit this resume locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## 🤖 Editing with Opencode

This template is designed to be easily modified using **Opencode** (AI-assisted development). 

Instead of manually tweaking HTML/CSS, you can simply ask Opencode to:
* *"Add a new job experience to the timeline."*
* *"Change the primary color theme from blue to emerald."*
* *"Translate the entire resume to French/English."*
* *"Adjust the spacing so everything fits perfectly on one page."*
* *"Add a new watermark or background pattern."*

Opencode will automatically read the `src/App.jsx` and `src/index.css` files, make the exact code changes required, and even run the build to ensure everything works perfectly.

## 🖨️ Printing to PDF

The CSS is heavily optimized for printing exactly on an A4 page without margins or overflowing text.

To save your resume as a PDF:

1. Open the local app (`http://localhost:5173`) in Google Chrome or Edge.
2. Press `Ctrl + P` (or `Cmd + P` on Mac) to open the print dialog.
3. Set the following Print Settings:
   * **Destination:** Save as PDF
   * **Paper size:** A4
   * **Margins:** None
   * **Scale:** Default (100%)
   * **Options:** ✔ Check **"Background graphics"** (Crucial for rendering Tailwind background colors and watermarks)
4. Click **Save**!