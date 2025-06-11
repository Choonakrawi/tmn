const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [32, 192, 512];
const inputSvg = path.join(__dirname, '../public/img/favicon.svg');
const outputDir = path.join(__dirname, '../public/img');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate PNGs for each size
sizes.forEach(size => {
  sharp(inputSvg)
    .resize(size, size)
    .png()
    .toFile(path.join(outputDir, `favicon-${size}x${size}.png`))
    .then(() => console.log(`Generated ${size}x${size} favicon`))
    .catch(err => console.error(`Error generating ${size}x${size} favicon:`, err));
}); 