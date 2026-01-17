/**
 * Fetch Complete Figma File
 * 
 * Updates figma-complete.json with the latest data from Figma.
 * Run with: npm run fetch:figma
 * 
 * Requires FIGMA_API_KEY in .env file
 */

const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

const FIGMA_FILE_ID = 'Th7UVyk0UGSWZW1Yx7sRu3';
const OUTPUT_FILE = path.join(__dirname, '..', 'figma-complete.json');

async function fetchFigmaFile() {
  const apiKey = process.env.FIGMA_API_KEY;
  
  if (!apiKey) {
    console.error('❌ Error: FIGMA_API_KEY not found in .env file');
    process.exit(1);
  }

  console.log('🎨 Fetching Figma file...');
  console.log(`   File ID: ${FIGMA_FILE_ID}`);

  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
      {
        headers: {
          'X-Figma-Token': apiKey,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        console.error('❌ Error: Rate limited. You have limited API calls per month.');
        console.error('   Wait and try again later.');
      } else {
        console.error(`❌ Error: API returned ${response.status} ${response.statusText}`);
      }
      process.exit(1);
    }

    const data = await response.json();
    
    // Add metadata
    const output = {
      ...data,
      _fetchedAt: new Date().toISOString(),
      _fileId: FIGMA_FILE_ID,
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

    console.log('✅ Success! Figma file saved to figma-complete.json');
    console.log(`   File name: ${data.name}`);
    console.log(`   Last modified: ${data.lastModified}`);
    console.log(`   Fetched at: ${output._fetchedAt}`);

  } catch (error) {
    console.error('❌ Error fetching Figma file:', error.message);
    process.exit(1);
  }
}

fetchFigmaFile();
