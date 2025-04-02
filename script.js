// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    }
});

// Mobile dropdown toggle
if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    });
}

// Testimonial Slider
let slideIndex = 1;
showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

// Auto slide testimonials
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000);

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const company = document.getElementById('company').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const privacy = document.getElementById('privacy').checked;
        
        // Validation
        let isValid = true;
        
        if (name === '') {
            showError('name', 'Name is required');
            isValid = false;
        } else {
            removeError('name');
        }
        
        if (company === '') {
            showError('company', 'Company is required');
            isValid = false;
        } else {
            removeError('company');
        }
        
        if (email === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email');
            isValid = false;
        } else {
            removeError('email');
        }
        
        if (subject === '') {
            showError('subject', 'Subject is required');
            isValid = false;
        } else {
            removeError('subject');
        }
        
        if (message === '') {
            showError('message', 'Message is required');
            isValid = false;
        } else {
            removeError('message');
        }
        
        if (!privacy) {
            showError('privacy', 'You must agree to the privacy policy');
            isValid = false;
        } else {
            removeError('privacy');
        }
        
        // Submit form if valid
        if (isValid) {
            // In a real implementation, you would send the form data to a server
            // For this example, we'll just show a success message
            contactForm.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for your message!</h3>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            `;
        }
    });
}

// Helper Functions
function showError(field, message) {
    const formGroup = document.getElementById(field).closest('.form-group') || document.getElementById(field).closest('.checkbox-group');
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
    
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorElement);
    }
    
    formGroup.classList.add('error');
}

function removeError(field) {
    const formGroup = document.getElementById(field).closest('.form-group') || document.getElementById(field).closest('.checkbox-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        formGroup.removeChild(errorElement);
    }
    
    formGroup.classList.remove('error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to menu items based on current page
function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.menu a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        } else if (currentPage === '' && item.getAttribute('href') === 'index.html') {
            item.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setActiveMenuItem();
}); 