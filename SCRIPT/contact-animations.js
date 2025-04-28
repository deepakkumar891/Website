// Animation script for Contact page
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
        
        // Check and animate fade elements
        fadeElements.forEach(element => {
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
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    let errorMsg = field.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'This field is required';
                        errorMsg.style.color = '#e74c3c';
                        errorMsg.style.fontSize = '0.85rem';
                        errorMsg.style.marginTop = '5px';
                        field.parentNode.appendChild(errorMsg);
                    }
                } else {
                    field.classList.remove('error');
                    const errorMsg = field.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('#email');
            if (emailField && emailField.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('error');
                    
                    let errorMsg = emailField.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'Please enter a valid email address';
                        errorMsg.style.color = '#e74c3c';
                        errorMsg.style.fontSize = '0.85rem';
                        errorMsg.style.marginTop = '5px';
                        emailField.parentNode.appendChild(errorMsg);
                    } else {
                        errorMsg.textContent = 'Please enter a valid email address';
                    }
                }
            }
            
            // If form is valid, simulate submission
            if (isValid) {
                const submitBtn = contactForm.querySelector('.btn-submit');
                if (submitBtn) {
                    // Disable button and show loading state
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Sending...';
                    
                    // Simulate form submission with a delay
                    setTimeout(function() {
                        // Create success message
                        const successMsg = document.createElement('div');
                        successMsg.className = 'success-message';
                        successMsg.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                        successMsg.style.color = '#2ecc71';
                        successMsg.style.padding = '15px';
                        successMsg.style.marginTop = '20px';
                        successMsg.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
                        successMsg.style.borderRadius = '8px';
                        
                        // Hide form and show success message
                        contactForm.style.opacity = '0';
                        contactForm.style.height = '0';
                        contactForm.style.overflow = 'hidden';
                        contactForm.style.transition = 'all 0.5s ease';
                        
                        // Insert success message before the form
                        contactForm.parentNode.insertBefore(successMsg, contactForm);
                    }, 2000);
                }
            }
        });
        
        // Remove error state when field is focused
        const formFields = contactForm.querySelectorAll('input, textarea, select');
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                this.classList.remove('error');
                const errorMsg = this.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            });
        });
    }
    
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