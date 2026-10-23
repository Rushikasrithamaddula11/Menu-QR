const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function generateQRCodes() {
  const assetsDir = path.join(__dirname, 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // Target URL - Points directly to the live GitHub Pages menu!
  const defaultUrl = 'https://rushikasrithamaddula11.github.io/Menu-QR/';

  console.log('Generating QR code for:', defaultUrl);

  // 1. Generate clean SVG QR
  const svgString = await QRCode.toString(defaultUrl, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: '#6b0f14', // Royal Maroon
      light: '#ffffff'
    }
  });
  fs.writeFileSync(path.join(assetsDir, 'balaji-menu-qr.svg'), svgString);
  console.log('Created balaji-menu-qr.svg');

  // 2. Generate PNG QR
  await QRCode.toFile(path.join(assetsDir, 'balaji-menu-qr.png'), defaultUrl, {
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 600,
    color: {
      dark: '#6b0f14',
      light: '#ffffff'
    }
  });
  console.log('Created balaji-menu-qr.png');

  // 3. Generate High-Res Standee Card Image (1200 x 1800 px) for printing
  try {
    const width = 1200;
    const height = 1800;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background gradient (warm ivory Dhaba theme)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#fffcf5');
    bgGrad.addColorStop(1, '#f9f1e1');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Ornate Royal Maroon & Gold borders
    ctx.strokeStyle = '#781014';
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = '#d4af37'; // Gold inner border
    ctx.lineWidth = 4;
    ctx.strokeRect(45, 45, width - 90, height - 90);

    // Corner decorative flourishes
    const drawCorner = (x, y, flipX, flipY) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, 35);
      ctx.lineTo(35, 35);
      ctx.lineTo(35, 0);
      ctx.stroke();
      ctx.restore();
    };
    drawCorner(55, 55, false, false);
    drawCorner(width - 55, 55, true, false);
    drawCorner(55, height - 55, false, true);
    drawCorner(width - 55, height - 55, true, true);

    // Load and draw Logo
    const logoPath = path.join(assetsDir, 'logo.png');
    if (fs.existsSync(logoPath)) {
      const logoImg = await loadImage(logoPath);
      const logoW = 900;
      const logoH = (logoImg.height / logoImg.width) * logoW;
      const logoX = (width - logoW) / 2;
      const logoY = 70;
      ctx.drawImage(logoImg, logoX, logoY, logoW, logoH);
    }

    // "SCAN FOR DIGITAL MENU" Banner
    const bannerY = 720;
    const bannerH = 75;
    const bannerGrad = ctx.createLinearGradient(150, bannerY, width - 150, bannerY);
    bannerGrad.addColorStop(0, '#781014');
    bannerGrad.addColorStop(0.5, '#9e181f');
    bannerGrad.addColorStop(1, '#781014');

    ctx.fillStyle = bannerGrad;
    ctx.roundRect ? ctx.roundRect(160, bannerY, width - 320, bannerH, 20) : ctx.fillRect(160, bannerY, width - 320, bannerH);
    ctx.fill();
    ctx.strokeStyle = '#e5a93b';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SCAN FOR DIGITAL MENU & PRICES', width / 2, bannerY + 50);

    // Sub-instruction
    ctx.fillStyle = '#4a2505';
    ctx.font = '600 24px "Segoe UI", Arial, sans-serif';
    ctx.fillText('Point your phone camera to view all dishes & rates', width / 2, bannerY + 120);

    // QR Code Frame with Gold Drop Shadow Effect
    const qrSize = 480;
    const qrX = (width - qrSize) / 2;
    const qrY = 880;

    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(120, 16, 20, 0.25)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;
    ctx.roundRect ? ctx.roundRect(qrX - 25, qrY - 25, qrSize + 50, qrSize + 50, 24) : ctx.fillRect(qrX - 25, qrY - 25, qrSize + 50, qrSize + 50);
    ctx.fill();
    ctx.shadowColor = 'transparent';

    ctx.strokeStyle = '#e5a93b';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Generate QR on canvas or draw generated QR
    const qrCanvas = createCanvas(qrSize, qrSize);
    await QRCode.toCanvas(qrCanvas, defaultUrl, {
      width: qrSize,
      margin: 1,
      color: {
        dark: '#781014',
        light: '#ffffff'
      }
    });
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);

    // "100% PURE VEG" Badge below QR
    const vegY = 1430;
    ctx.strokeStyle = '#0f8a3c';
    ctx.lineWidth = 3;
    ctx.strokeRect((width - 240) / 2, vegY, 240, 44);
    ctx.fillStyle = '#0f8a3c';
    ctx.beginPath();
    ctx.arc(width / 2 - 80, vegY + 22, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 22px "Segoe UI", Arial, sans-serif';
    ctx.fillText('100% PURE VEG.', width / 2 + 18, vegY + 30);

    // Footer divider line
    const dividerY = 1510;
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(120, dividerY);
    ctx.lineTo(width - 120, dividerY);
    ctx.stroke();

    // Footer Address & Contact
    ctx.fillStyle = '#781014';
    ctx.font = 'bold 28px "Segoe UI", Arial, sans-serif';
    ctx.fillText('CONTACT: 9618899975', width / 2, 1560);

    ctx.fillStyle = '#3a2010';
    ctx.font = '500 22px "Segoe UI", Arial, sans-serif';
    ctx.fillText('Address: S.R.R. Complex, 1st Floor, House No. 13-9-12,', width / 2, 1610);
    ctx.fillText('Opp. Konark Theatre opposite, Lalitha Nagar, Dilsukhnagar,', width / 2, 1645);
    ctx.fillText('Hyderabad – 500060', width / 2, 1680);

    ctx.fillStyle = '#8c6d3b';
    ctx.font = 'italic 20px "Segoe UI", Arial, sans-serif';
    ctx.fillText('Good Food • Great Taste • Happy Family', width / 2, 1725);

    // Save Standee image
    const outBuffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(assetsDir, 'balaji-table-standee.png'), outBuffer);
    console.log('Created balaji-table-standee.png');
  } catch (err) {
    console.error('Canvas error (optional):', err);
  }
}

generateQRCodes();
