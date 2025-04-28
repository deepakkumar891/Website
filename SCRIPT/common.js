// Common JavaScript functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Initialize hamburger menu
    initializeHamburger();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize scroll progress
    initializeScrollProgress();
    
    // Add Call Button to all pages 
    addCallButton();
    
    // Remove duplicate dropdown arrows
    removeDuplicateArrows();
    
    // Initialize AOS animation library if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Current year for footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Scroll effect for header
    initializeHeaderScroll();
    
    // Smooth scroll for anchor links
    initializeSmoothScroll();
    
    // Initialize counters if they exist
    initializeCounters();
    
    // Initialize cookie consent
    initializeCookieConsent();
});

/**
 * Theme initialization
 */
function initializeTheme() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme - use saved theme, or system preference as fallback
    const themeToApply = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', themeToApply);
    
    // Update theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        updateThemeToggleButton(themeToApply);
        
        // Add event listener for theme toggle button
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Save the new theme preference
            localStorage.setItem('theme', newTheme);
            
            // Apply the new theme
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Update the toggle button
            updateThemeToggleButton(newTheme);
        });
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
                updateThemeToggleButton(e.matches ? 'dark' : 'light');
            }
        });
    }
}

/**
 * Update theme toggle button appearance
 */
function updateThemeToggleButton(theme) {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        const icon = themeToggleBtn.querySelector('i');
        if (!icon) return;
        
        if (theme === 'dark') {
            themeToggleBtn.classList.add('dark-active');
            themeToggleBtn.classList.remove('light-active');
            icon.className = 'fas fa-sun';
            themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
            themeToggleBtn.classList.add('light-active');
            themeToggleBtn.classList.remove('dark-active');
            icon.className = 'fas fa-moon';
            themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        }
    }
}

/**
 * Initialize hamburger menu
 */
function initializeHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (hamburger && navContainer) {
        // Set initial positions of hamburger spans
        const spans = hamburger.querySelectorAll('span');
        if (spans.length === 3) {
            spans[0].style.top = '0';
            spans[1].style.top = '9px';
            spans[2].style.top = '18px';
        }
        
        // Toggle hamburger menu
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navContainer.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // Close all dropdowns when closing menu
            if (!this.classList.contains('active')) {
                dropdowns.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }
    
    // Toggle dropdown menus
    dropdowns.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth < 992) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992 && navContainer && navContainer.classList.contains('active')) {
            if (!e.target.closest('.nav-container') && !e.target.closest('.hamburger')) {
                navContainer.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        }
    });
}

/**
 * Initialize search functionality
 */
function initializeSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function() {
            searchOverlay.classList.add('active');
        });
        
        if (searchClose) {
            searchClose.addEventListener('click', function() {
                searchOverlay.classList.remove('active');
            });
        }
    }
}

/**
 * Initialize scroll progress bar
 */
function initializeScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (scrollProgress) {
        window.addEventListener('scroll', function() {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            scrollProgress.style.width = progress + '%';
        });
    }
}

/**
 * Add call button to all pages and remove back-to-top
 */
function addCallButton() {
    // First: Remove any back-to-top buttons
    const backToTopButtons = document.querySelectorAll('.back-to-top');
    backToTopButtons.forEach(button => {
        button.remove();
    });
    
    // Remove any existing call button
    const existingCallButton = document.querySelector('.call-button');
    if (existingCallButton) {
        existingCallButton.remove();
    }
    
    // Create new call button
    const callButton = document.createElement('a');
    callButton.href = 'tel:+919968855190';
    callButton.className = 'call-button';
    callButton.title = 'Call Us';
    callButton.innerHTML = '<i class="fas fa-phone"></i>';
    
    // Append to body
    document.body.appendChild(callButton);
}

/**
 * Add scroll effect for header
 */
function initializeHeaderScroll() {
    const header = document.querySelector('.modern-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

/**
 * Smooth scroll for anchor links
 */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') !== '#') {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}

/**
 * Initialize counters if they exist
 */
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        const startCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
            const countStep = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += countStep;
                
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        };
        
        // Use Intersection Observer to start counter when visible
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
}

/**
 * Initialize cookie consent
 */
function initializeCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    if (cookieConsent && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieConsent.classList.add('visible');
            
            const acceptButton = cookieConsent.querySelector('.cookie-accept');
            if (acceptButton) {
                acceptButton.addEventListener('click', function() {
                    localStorage.setItem('cookiesAccepted', 'true');
                    cookieConsent.classList.remove('visible');
                });
            }
        }, 2000);
    }
}

/**
 * Remove duplicate arrows in dropdowns
 */
function removeDuplicateArrows() {
    // Find all dropdown links with fontawesome arrow icons
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    
    dropdownLinks.forEach(link => {
        // Get all chevron-down icons
        const icons = link.querySelectorAll('i.fa-chevron-down');
        
        // If there's at least one icon, remove all of them (we'll use CSS ::after instead)
        if (icons.length >= 1) {
            icons.forEach(icon => {
                icon.remove();
            });
        }
    });
} 