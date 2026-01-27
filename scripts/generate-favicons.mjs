#!/usr/bin/env node

/**
 * Generate favicon PNG files from the SVG icon
 * Requires: npm install --save-dev sharp
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const svgPath = join(publicDir, 'icon.svg');

// Read the SVG
const svgBuffer = readFileSync(svgPath);

// Generate icon.png (512x512)
await sharp(svgBuffer)
  .resize(512, 512, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 } // transparent
  })
  .png()
  .toFile(join(publicDir, 'icon.png'));

console.log('✓ Generated icon.png (512x512)');

// Generate apple-icon.png (180x180)
await sharp(svgBuffer)
  .resize(180, 180, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 } // transparent
  })
  .png()
  .toFile(join(publicDir, 'apple-icon.png'));

console.log('✓ Generated apple-icon.png (180x180)');

// Generate favicon.ico (32x32, multi-size)
await sharp(svgBuffer)
  .resize(32, 32, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png()
  .toFile(join(publicDir, 'favicon.ico'));

console.log('✓ Generated favicon.ico (32x32)');
console.log('\n✅ All favicon files generated successfully!');
