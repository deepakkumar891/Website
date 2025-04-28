// Animation script for About page
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }

    // Ensure menu items are clickable
    function fixMenuClickability() {
        // Fix the utility bar to ensure it doesn't block clicks
        const utilityBar = document.querySelector('.utility-bar');
        if (utilityBar) {
            utilityBar.style.pointerEvents = 'none';
            
            // But make the theme toggle itself clickable
            const themeToggle = utilityBar.querySelector('.theme-toggle');
            if (themeToggle) {
                themeToggle.style.pointerEvents = 'auto';
            }
        }
        
        // Ensure logo is clickable
        const logo = document.querySelector('.logo a');
        if (logo) {
            logo.style.position = 'relative';
            logo.style.zIndex = '1000';
            logo.style.pointerEvents = 'auto';
        }
        
        // Ensure navigation links are clickable
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.style.position = 'relative';
            link.style.zIndex = '1000';
            link.style.pointerEvents = 'auto';
        });
    }
    
    // Run the fix immediately
    fixMenuClickability();
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        // Get all elements with animation classes
        const fadeElements = document.querySelectorAll('.fade-in:not(.animated)');
        const slideElements = document.querySelectorAll('.slide-in:not(.animated)');
        
        // Check and animate fade elements
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animated');
                element.style.animationPlayState = 'running';
            }
        });
        
        // Check and animate slide elements
        slideElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animated');
                element.style.animationPlayState = 'running';
            }
        });
    }
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (navLinks) {
                if (this.classList.contains('active')) {
                    // Show mobile menu
                    navLinks.style.display = 'block';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '70px';
                    navLinks.style.left = '0';
                    navLinks.style.width = '100%';
                    navLinks.style.backgroundColor = 'var(--background-color)';
                    navLinks.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                    navLinks.style.padding = '20px';
                    navLinks.style.zIndex = '1000';
                    
                    const navUl = navLinks.querySelector('ul');
                    if (navUl) {
                        navUl.style.flexDirection = 'column';
                        navUl.style.gap = '15px';
                    }
                } else {
                    // Hide mobile menu
                    navLinks.style.display = '';
                }
            }
        });
    }
    
    // Fix dropdown on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    if (window.innerWidth <= 992) {
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('a');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            if (dropdownLink && dropdownContent) {
                dropdownLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdownContent.style.display = 
                        dropdownContent.style.display === 'block' ? 'none' : 'block';
                });
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Also run once on page load to animate elements already in viewport
    handleScrollAnimations();
    
    // Add hover effects to interactive elements
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('.team-image img').style.transform = 'scale(1.05)';
        });
        member.addEventListener('mouseleave', function() {
            this.querySelector('.team-image img').style.transform = 'scale(1)';
        });
    });
    
    // Add back-to-top functionality
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop && (backToTop.style.opacity = '1');
        } else {
            backToTop && (backToTop.style.opacity = '0');
        }
    });
}); 