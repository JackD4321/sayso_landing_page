#!/usr/bin/env node

/**
 * Generate placeholder blog cover images using sharp
 * Run: npm install sharp (if not already installed)
 * Then: node scripts/create-placeholders.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coversDir = path.join(__dirname, '..', 'public', 'blog', 'covers');

// Ensure directory exists
if (!fs.existsSync(coversDir)) {
  fs.mkdirSync(coversDir, { recursive: true });
}

const articles = [
  { slug: 'maverickre-alternatives', title: 'MaverickRE Alternatives' },
  { slug: 'appointment-setting-coaching-alternatives-real-estate-teams', title: 'Appointment Setting Alternatives' },
  { slug: 'shilo-alternatives-real-time-call-coaching', title: 'Shilo Alternatives for Real-Time Call Coaching' },
];

async function createPlaceholder(slug, title) {
  const filepath = path.join(coversDir, `${slug}.jpg`);

  if (fs.existsSync(filepath)) {
    console.log(`⊘ Skipped (exists): ${slug}.jpg`);
    return;
  }

  try {
    // Create SVG placeholder
    const svg = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1D4871;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#2367EE;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#grad)"/>
        <rect x="0" y="0" width="1200" height="630" fill="rgba(255,255,255,0.05)"/>

        <!-- Title -->
        <text x="600" y="260" font-family="Arial, sans-serif" font-size="52" font-weight="bold" text-anchor="middle" fill="white" letter-spacing="-1">
          ${title}
        </text>

        <!-- Subtitle -->
        <text x="600" y="360" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="rgba(255,255,255,0.7)">
          Sayso Blog
        </text>

        <!-- Accent circles -->
        <circle cx="150" cy="550" r="40" fill="#FFDE59" opacity="0.8"/>
        <circle cx="1050" cy="80" r="60" fill="#FFDE59" opacity="0.6"/>
      </svg>
    `;

    // Convert SVG to JPEG
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 85 })
      .toFile(filepath);

    console.log(`✓ Created: ${slug}.jpg`);
  } catch (error) {
    console.error(`✗ Error creating ${slug}.jpg:`, error.message);
  }
}

// Generate all placeholders
console.log('Generating placeholder images...\n');
await Promise.all(articles.map(({ slug, title }) => createPlaceholder(slug, title)));
console.log('\n✓ Done!\n');
