# Shree Ganesh Balaji Family Dhaba - Digital QR Menu & Table Standee System

Official Digital QR Menu and Printable Table Standee Card for **Shree Ganesh Balaji Family Dhaba (100% Pure Veg)**, Dilsukhnagar, Hyderabad.

---

## 🍽️ Restaurant Overview

- **Name:** SHREE GANESH BALAJI FAMILY DHABA
- **Tagline:** Good Food • Great Taste • Happy Family
- **Cuisine:** 100% Pure Vegetarian Dhaba & North Indian Delicacies
- **Dishes:** 247 Dishes across 24 Categories with Full / Half pricing
- **Address:**
  > S.R.R. Complex, 1st Floor, House No. 13-9-12,  
  > Opp. Konark Theatre opposite, Lalitha Nagar,  
  > Dilsukhnagar, Hyderabad – 500060.
- **Contact / Phone:** `9618899975`
- **WhatsApp:** `+91 96188 99975`
- **Hours:** 11:30 AM – 11:30 PM (All 7 Days)

---

## 📁 Project Structure

```
balaji-dhaba-menu/
├── index.html                  # Main responsive Digital Menu web application
├── qr-card.html                # Printable Table Standee Card & interactive QR generator
├── menu-data.js                # Complete menu dataset (24 categories, 247 items)
├── generate-qr.js              # Node.js script to generate high-res QR & Standee PNGs
├── package.json                # Project dependencies (qrcode, canvas)
└── assets/
    ├── logo.png                # Official restaurant logo
    ├── balaji-menu-qr.png      # Standalone scannable QR code (PNG)
    ├── balaji-menu-qr.svg      # Crisp vector QR code (SVG)
    ├── balaji-table-standee.png # High-res (1200x1800) printable Table Standee poster
    └── qrcode.min.js           # Offline browser QR code generator library
```

---

## 🚀 How to Run & View

### 1. View Directly in Any Browser
- Double-click **`index.html`** to browse the full digital menu on your desktop or laptop.
- Double-click **`qr-card.html`** to view the table card standee and generate QR codes.

### 2. View on Mobile Phone over Local Wi-Fi (Instant Testing)
To scan from your smartphone connected to the same Wi-Fi:
1. Open terminal in `balaji-dhaba-menu`:
   ```bash
   npx serve .
   ```
   *or*
   ```bash
   python -m http.server 8080
   ```
2. Note your computer's local IP address (e.g. `http://192.168.1.15:8080`).
3. Open `qr-card.html`, paste that URL in the input field, and the QR code will update immediately.
4. Scan the QR code with your mobile camera to see the full menu!

---

## 🖨️ Printing Table Standees / Tent Cards

1. Open **`qr-card.html`** in your browser.
2. Click **"🖨️ Print Table Standee"** or press `Ctrl + P`.
3. Select Paper Size (A4, A5, or 4x6 / 5x7 inches) and print in color on cardstock.
4. Alternatively, use the pre-rendered image **`assets/balaji-table-standee.png`** (1200 x 1800 px) for professional printing at any local print shop!

---

## 🌐 Free Online Deployment (To make QR scannable anywhere)

### Option A: GitHub Pages (Recommended - 2 minutes)
1. Push this folder to a GitHub repository (e.g., `balaji-dhaba-menu`).
2. Go to **Settings > Pages > Deploy from branch (main) > / (root)**.
3. Your live URL will be `https://<your-username>.github.io/balaji-dhaba-menu/`.
4. Put this URL in `qr-card.html`, re-generate the QR code, and print it!

### Option B: Netlify / Vercel
- Drag and drop the `balaji-dhaba-menu` folder onto [Netlify Drop](https://app.netlify.com/drop) for an instant live URL.

---

## ✨ Features

- **Royal Dhaba Theme:** Maroon (`#781014`) & Antique Gold (`#d4af37`) palette with Pure Veg hallmarks.
- **247 Verified Dishes:** Soups, Starters, Spl. Starters, Pasand 65, Noodles, Dal Bahar, Koftas, Paneer Curries, Vegetable Curries, Alu Gobi, Indian Special Curries, Rotis, Naans, Parathas, Biryanis, Family Packs, Fried Rice, Rice, Papads, Salads, Raitas, Lassis, and Soft Drinks.
- **Full & Half Pricing:** Clear split pricing badges for dishes with half/full portions.
- **Real-Time Live Search:** Instant search across all 247 items.
- **Smooth Category Navigation:** Horizontal scrollable category pill bar with active section indicator.
- **Table Order & Bill Calculator:** Guests can select items, see the total bill, and optionally send their table order directly to WhatsApp (`9618899975`) or show it to the dhaba staff.
- **One-Tap Actions:** Click to Call (`9618899975`), WhatsApp chat, and Google Maps directions.
