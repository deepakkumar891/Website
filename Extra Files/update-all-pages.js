const fs = require('fs');
const path = require('path');

// Critical inline styles to fix header visibility
const criticalCSS = `
<!-- Critical CSS to fix header visibility issues -->
<style>
    .modern-header {
        display: flex !important;
        background-color: rgba(255, 255, 255, 0.9) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        z-index: 1000 !important;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        padding: 1rem 2rem !important;
    }
    .logo a, .logo a span {
        color: #3498db !important;
        opacity: 1 !important;
        visibility: visible !important;
        font-weight: 800 !important;
    }
    .nav-links a {
        color: #3498db !important;
        opacity: 1 !important;
        visibility: visible !important;
    }
    .utility-bar {
        display: flex !important;
        z-index: 1000 !important;
    }
    [data-theme="dark"] .modern-header {
        background-color: rgba(18, 18, 18, 0.9) !important;
    }
    [data-theme="dark"] .logo a, [data-theme="dark"] .logo a span,
    [data-theme="dark"] .nav-links a {
        color: #61dafb !important;
    }
</style>
<!-- Initial fix script - load before other scripts -->
<script src="apply-header-fix.js"></script>
`;

// Process HTML files
function processHtmlFiles() {
    // Get all HTML files
    const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));
    
    console.log(`Found ${htmlFiles.length} HTML files to process`);
    
    for (const file of htmlFiles) {
        try {
            console.log(`Processing ${file}...`);
            let content = fs.readFileSync(file, 'utf8');
            
            // Check if we already added the fix
            if (content.includes('apply-header-fix.js')) {
                console.log(`  ${file} already contains the fix, skipping`);
                continue;
            }
            
            // Find the head closing tag
            const headCloseIndex = content.indexOf('</head>');
            if (headCloseIndex === -1) {
                console.log(`  Could not find </head> in ${file}, skipping`);
                continue;
            }
            
            // Insert our fix before the head closing tag
            const newContent = content.slice(0, headCloseIndex) + criticalCSS + content.slice(headCloseIndex);
            
            // Write the updated content back to the file
            fs.writeFileSync(file, newContent, 'utf8');
            console.log(`  Successfully updated ${file}`);
        } catch (error) {
            console.error(`  Error processing ${file}:`, error.message);
        }
    }
}

// Execute
processHtmlFiles();
console.log('All files processed'); 