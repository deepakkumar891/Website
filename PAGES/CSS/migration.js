/**
 * CSS Migration Script
 * 
 * This script helps migrate HTML files from using individual CSS files
 * to using the consolidated 7-1 pattern CSS structure.
 * 
 * Run with: node migration.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const rootDir = './'; // Root directory of the project
const searchPattern = /\.html$/; // Pattern to match HTML files
const oldCssFiles = [
  'index.css', 
  'responsive.css',
  'page-styles.css',
  'privacy-policy.css', 
  'aboutStyle.css',
  'additional-features.css',
  'ui-ux.css',
  'web-development.css',
  'mobile-development.css',
  'digital-transformation.css',
  'data-analytics.css',
  'custom-software.css',
  'careers.css',
  'privacy-style.css',
  'casestudy.css'
];
const newCssFile = 'css/main.css'; // Path to the new main CSS file

// Function to process an HTML file
function processHtmlFile(filePath) {
  console.log(`Processing ${filePath}`);
  
  try {
    // Read the file
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Keep track of whether we made changes
    let madeChanges = false;
    
    // Replace old CSS link tags with the new one
    oldCssFiles.forEach(cssFile => {
      const regex = new RegExp(`<link[^>]*href\\s*=\\s*["'](?:[^"']*\\/)?${cssFile}["'][^>]*>`, 'gi');
      
      if (regex.test(content)) {
        madeChanges = true;
        content = content.replace(regex, '');
      }
    });
    
    // Check if the new CSS file is already included
    const newCssRegex = new RegExp(`<link[^>]*href\\s*=\\s*["'](?:[^"']*\\/)?${newCssFile.replace('/', '\\/')}["'][^>]*>`, 'gi');
    
    // Add the new CSS link if it's not already there and we made changes
    if (madeChanges && !newCssRegex.test(content)) {
      // Find the head closing tag
      const headCloseIndex = content.indexOf('</head>');
      
      if (headCloseIndex !== -1) {
        // Insert the new CSS link right before the closing head tag
        const newLink = `  <link rel="stylesheet" href="${newCssFile}">\n  `;
        content = content.slice(0, headCloseIndex) + newLink + content.slice(headCloseIndex);
      }
      
      // Write the modified content back to the file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✅ Updated ${filePath}`);
    } else if (!madeChanges) {
      console.log(`  ℹ️ No CSS files to replace in ${filePath}`);
    } else {
      console.log(`  ✅ Already using the new CSS structure in ${filePath}`);
    }
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error);
  }
}

// Function to recursively find HTML files
function findHtmlFiles(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip the node_modules directory
      if (file !== 'node_modules') {
        results.push(...findHtmlFiles(filePath));
      }
    } else if (searchPattern.test(file)) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Main function
function main() {
  console.log('CSS Migration Script');
  console.log('===================');
  console.log(`Looking for HTML files in ${rootDir}`);
  
  try {
    const htmlFiles = findHtmlFiles(rootDir);
    console.log(`Found ${htmlFiles.length} HTML files`);
    
    if (htmlFiles.length === 0) {
      console.log('No HTML files found. Exiting.');
      return;
    }
    
    console.log('\nProcessing files:');
    htmlFiles.forEach(file => processHtmlFile(file));
    
    console.log('\nMigration complete!');
    console.log('You may now delete the following CSS files if they are no longer needed:');
    oldCssFiles.forEach(file => console.log(`- ${file}`));
  } catch (error) {
    console.error('Error during migration:', error);
  }
}

// Run the script
main(); 