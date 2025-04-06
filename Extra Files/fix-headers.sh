#!/bin/bash

# Script to add header visibility fixes to all HTML files

# Define our fixes as a heredoc
read -r -d '' FIXES << 'ENDOFFIX'

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
<script>
/**
 * Immediate fix script for website display issues
 * This runs immediately without waiting for DOMContentLoaded
 */
(function() {
    console.log("Running immediate display fixes");
    
    // Force header visibility with more specific fixes
    function fixHeader() {
        const header = document.querySelector('.modern-header');
        if (header) {
            console.log("Found header element, applying fixes");
            header.style.display = 'flex';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.webkitBackdropFilter = 'blur(10px)';
            header.style.zIndex = '1000';
            
            // Make sure header is correctly positioned
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.width = '100%';
            console.log("Header style fixed");
        } else {
            console.log("Header element not found");
        }
    }
    
    // Fix logo text visibility specifically
    function fixLogo() {
        // Try different selectors since structure may vary
        const logoSelectors = [
            '.logo a span', 
            '.logo a', 
            '.logo span',
            '.logo'
        ];
        
        let logoFixed = false;
        
        for (const selector of logoSelectors) {
            const logoElements = document.querySelectorAll(selector);
            if (logoElements.length > 0) {
                console.log("Found logo elements with selector: " + selector);
                logoElements.forEach(el => {
                    el.style.color = '#3498db';
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.fontWeight = '800';
                });
                logoFixed = true;
            }
        }
        
        console.log(logoFixed ? "Logo text fixed" : "Logo text elements not found with any selector");
    }
    
    // Fix navigation links
    function fixNavLinks() {
        const navSelectors = [
            '.nav-links a',
            'nav a',
            '.nav-container a',
            'header a'
        ];
        
        let navFixed = false;
        
        for (const selector of navSelectors) {
            const navLinks = document.querySelectorAll(selector);
            if (navLinks.length > 0) {
                console.log("Found navigation links with selector: " + selector);
                navLinks.forEach(link => {
                    link.style.color = '#3498db';
                    link.style.opacity = '1';
                    link.style.visibility = 'visible';
                    link.style.fontWeight = '600';
                });
                navFixed = true;
            }
        }
    }
    
    // Apply fixes immediately
    setTimeout(function() {
        fixHeader();
        fixLogo();
        fixNavLinks();
    }, 0);
    
    // Apply again after a delay
    setTimeout(function() {
        fixHeader();
        fixLogo();
        fixNavLinks();
    }, 300);
})();
</script>
ENDOFFIX

# Loop through all HTML files
for file in *.html; do
    echo "Processing $file..."
    
    # Check if file already has our fix
    if grep -q "Running immediate display fixes" "$file"; then
        echo "  File already has fixes, skipping."
        continue
    fi
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file - add our fixes before </head>
    awk -v fixes="$FIXES" '
    {
        if (match($0, "</head>")) {
            print fixes;
            print $0;
        } else {
            print $0;
        }
    }
    ' "$file" > "$temp_file"
    
    # Replace the original with the modified file
    mv "$temp_file" "$file"
    
    echo "  Successfully updated $file"
done

echo "All HTML files processed!" 