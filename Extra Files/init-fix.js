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
                console.log(`Found logo elements with selector: ${selector}`);
                logoElements.forEach(el => {
                    el.style.color = '#3498db';
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.style.fontWeight = '800';
                    
                    // If this is a gradient text, fix it
                    if (window.getComputedStyle(el).webkitBackgroundClip === 'text') {
                        el.style.background = 'none';
                        el.style.webkitBackgroundClip = 'initial';
                        el.style.backgroundClip = 'initial';
                        el.style.webkitTextFillColor = '#3498db';
                    }
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
                console.log(`Found navigation links with selector: ${selector}`);
                navLinks.forEach(link => {
                    link.style.color = '#3498db';
                    link.style.opacity = '1';
                    link.style.visibility = 'visible';
                    link.style.fontWeight = '600';
                    link.style.textShadow = '0 0 1px rgba(0,0,0,0.1)';
                });
                navFixed = true;
            }
        }
        
        console.log(navFixed ? "Navigation links fixed" : "Nav links not found with any selector");
    }
    
    // Make utility bar and theme toggle visible
    function fixUtilityBar() {
        const utilityBar = document.querySelector('.utility-bar');
        if (utilityBar) {
            utilityBar.style.display = 'flex';
            utilityBar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            utilityBar.style.backdropFilter = 'blur(10px)';
            utilityBar.style.webkitBackdropFilter = 'blur(10px)';
            utilityBar.style.zIndex = '1000';
            console.log("Utility bar fixed");
        } else {
            console.log("Utility bar not found");
        }
        
        const themeSwitch = document.querySelector('.theme-switch');
        if (themeSwitch) {
            themeSwitch.style.display = 'block';
            themeSwitch.style.zIndex = '1001';
            console.log("Theme switch fixed");
        } else {
            console.log("Theme switch not found");
        }
    }
    
    // Fix z-index stacking issues
    function fixZIndexStacking() {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.paddingTop = '100px';
            console.log("Hero padding fixed");
        } else {
            console.log("Hero section not found");
        }
        
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.zIndex = '10';
            heroContent.style.position = 'relative';
            console.log("Hero content z-index fixed");
        } else {
            console.log("Hero content not found");
        }
    }
    
    // Fix heading visibility
    function fixHeadings() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        if (headings.length > 0) {
            console.log(`Found ${headings.length} heading elements, fixing visibility`);
            headings.forEach(heading => {
                heading.style.color = '#333333';
                heading.style.opacity = '1';
                heading.style.visibility = 'visible';
            });
            console.log("Headings fixed");
        } else {
            console.log("No heading elements found");
        }
    }
    
    // Run all fixes immediately
    fixHeader();
    fixLogo();
    fixNavLinks();
    fixUtilityBar();
    fixZIndexStacking();
    fixHeadings();
    
    // Run again after a short delay
    setTimeout(function() {
        fixHeader();
        fixLogo();
        fixNavLinks();
        fixUtilityBar();
        fixZIndexStacking();
        fixHeadings();
        console.log("Fixes applied after 300ms delay");
    }, 300);
    
    // Run one final time after the page has had more time to load
    setTimeout(function() {
        fixHeader();
        fixLogo();
        fixNavLinks();
        fixUtilityBar();
        fixZIndexStacking();
        fixHeadings();
        console.log("Fixes applied after 1000ms delay");
    }, 1000);
})();
