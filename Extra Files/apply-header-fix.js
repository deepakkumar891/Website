/**
 * Script to fix header visibility across all pages
 * Run this in the browser console on each page that needs fixing
 */

(function() {
    console.log("Applying header fix to all pages");
    
    // Fix header visibility
    function fixHeader() {
        const header = document.querySelector('.modern-header');
        if (header) {
            console.log("Found header element, applying fixes");
            header.style.display = 'flex';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.webkitBackdropFilter = 'blur(10px)';
            header.style.zIndex = '1000';
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.width = '100%';
            
            if (document.documentElement.dataset.theme === 'dark') {
                header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
            }
            
            console.log("Header style fixed");
        }
    }
    
    // Fix logo visibility
    function fixLogo() {
        // Try different selectors
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
                console.log(`Found logo elements with selector: ${selector}`);
                logoElements.forEach(el => {
                    el.style.color = document.documentElement.dataset.theme === 'dark' ? '#61dafb' : '#3498db';
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.fontWeight = '800';
                    
                    // If this is a gradient text, fix it
                    const computedStyle = window.getComputedStyle(el);
                    if (computedStyle.webkitBackgroundClip === 'text' || 
                        computedStyle.backgroundClip === 'text') {
                        el.style.webkitTextFillColor = 'currentColor';
                    }
                });
                logoFixed = true;
            }
        }
    }
    
    // Fix navigation links
    function fixNavLinks() {
        const navSelectors = [
            '.nav-links a',
            'nav a',
            '.nav-container a',
            'header a'
        ];
        
        for (const selector of navSelectors) {
            const navLinks = document.querySelectorAll(selector);
            if (navLinks.length > 0) {
                console.log(`Found navigation links with selector: ${selector}`);
                navLinks.forEach(link => {
                    link.style.color = document.documentElement.dataset.theme === 'dark' ? '#61dafb' : '#3498db';
                    link.style.opacity = '1';
                    link.style.visibility = 'visible';
                });
            }
        }
    }
    
    // Apply all fixes
    fixHeader();
    fixLogo();
    fixNavLinks();
    
    console.log("Header fix applied to current page");
})(); 