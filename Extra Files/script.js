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

// Initialize when DOM is loaded - MAIN initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Handle hamburger menu
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('utility-bar');

    // Check if elements exist before using them
    if (hamburger && menu) {
        document.addEventListener('click', (e) => {
            // Ensure both elements exist before calling contains()
            if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
    
    // Initialize theme toggle FIRST (before other components)
    initThemeToggle();
    
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: true
    });
    
    // Initialize typed.js
    initTypedText();
    
    // Initialize particles.js
    initParticles();
    
    // Initialize counters
    initCounters();
    
    // Initialize other UI components
    initNavigation();
    initScrollEffects();
    initSliders();
    initCodePlayground();
    initBlogFilters();
    initChatBot();
    initCookieConsent();
    
    setActiveMenuItem();
});

// Theme Toggle Functionality
function initThemeToggle() {
    console.log("initThemeToggle function called");
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) {
        console.error("Theme toggle element not found!");
        return;
    }
    
    console.log("Theme toggle element found successfully");
    
    // Check for saved theme preference or use default light theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log("Saved theme from localStorage:", savedTheme);
    
    // Apply the theme on initial load
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
    console.log("Applied theme:", savedTheme, "| Toggle checked:", themeToggle.checked);
    
    // Listen for toggle changes
    themeToggle.addEventListener('change', function() {
        console.log("Theme toggle change event fired, checked:", this.checked);
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            console.log("Theme switched to dark mode");
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            console.log("Theme switched to light mode");
        }
    });
    
    console.log("Theme toggle event listener added");
}

// Typed.js Text Animation
function initTypedText() {
    if(document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: ['Digital Solutions', 'Powerful Software', 'Better Experiences', 'Business Growth'],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 2000,
            startDelay: 500,
            loop: true
        });
    }
}

// Particles.js Backgrounds
function initParticles() {
    if(document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#5b78f6' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#5b78f6',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
    
    if(document.getElementById('particles-js-cta')) {
        particlesJS('particles-js-cta', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

// Counter Animations
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
        
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if(current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Navigation Functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const header = document.querySelector('.modern-header');
    
    if(hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    if(searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function() {
            searchOverlay.classList.add('active');
        });
    }
    
    if(searchClose && searchOverlay) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if(window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Tab navigation for services
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll progress indicator
    window.addEventListener('scroll', function() {
        const scrollProgress = document.querySelector('.scroll-progress');
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        
        if(scrollProgress) {
            scrollProgress.style.width = progress + '%';
        }
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if(backToTop) {
        window.addEventListener('scroll', function() {
            if(window.pageYOffset > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Slider Functionality
function initSliders() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if(testimonialTrack && testimonialItems.length > 0) {
        let currentIndex = 0;
        const itemWidth = testimonialItems[0].clientWidth;
        
        // Create dots
        testimonialItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if(index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Function to update slide position
        function updateSlidePosition() {
            testimonialTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            const dots = document.querySelectorAll('.testimonial-dots .dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Function to navigate to specific slide
        function goToSlide(index) {
            currentIndex = index;
            updateSlidePosition();
        }
        
        // Event listeners for navigation
        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
                updateSlidePosition();
            });
        }
        
        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % testimonialItems.length;
                updateSlidePosition();
            });
        }
    }
}

// Code Playground Functionality
function initCodePlayground() {
    const langButtons = document.querySelectorAll('.language-selector button');
    const runCodeBtn = document.querySelector('.run-code');
    const fullscreenBtn = document.querySelector('.fullscreen-toggle');
    const codePreview = document.querySelector('.code-preview');
    const previewWindow = document.querySelector('.preview-window');
    const editorWindow = document.querySelector('.editor-window pre code');
    
    if(langButtons.length > 0) {
        langButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                // Would normally switch the code editor content based on language
            });
        });
    }
    
    if(runCodeBtn && editorWindow && previewWindow) {
        runCodeBtn.addEventListener('click', function() {
            // Simple demo - in a real app would properly execute code
            if(previewWindow.querySelector('.greeting')) {
                const colors = ['#ff6b6b', '#4ecdc4', '#45b7d8', '#e9c46a', '#66bb6a'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                previewWindow.querySelector('.greeting').style.color = randomColor;
            }
        });
    }
    
    if(fullscreenBtn && codePreview) {
        fullscreenBtn.addEventListener('click', function() {
            codePreview.classList.toggle('fullscreen');
            this.querySelector('i').classList.toggle('fa-expand');
            this.querySelector('i').classList.toggle('fa-compress');
        });
    }
}

// Blog Filters Functionality
function initBlogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if(filterBtns.length > 0 && blogCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter blog cards
                blogCards.forEach(card => {
                    if(filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Chat Bot Functionality
function initChatBot() {
    const chatBot = document.querySelector('.chat-bot');
    const chatBotToggle = document.querySelector('.chat-bot-toggle');
    const chatInput = document.querySelector('.chat-input input');
    const chatSendBtn = document.querySelector('.chat-input button');
    const chatMessages = document.querySelector('.chat-messages');
    
    if(chatBotToggle && chatBot) {
        chatBotToggle.addEventListener('click', function() {
            chatBot.classList.toggle('active');
        });
    }
    
    if(chatInput && chatSendBtn && chatMessages) {
        // Function to add a message to the chat
        function addMessage(message, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user' : 'bot');
            
            const messageContent = document.createElement('div');
            messageContent.classList.add('message-content');
            messageContent.textContent = message;
            
            messageDiv.appendChild(messageContent);
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        // Function to handle user input
        function handleUserInput() {
            const message = chatInput.value.trim();
            if(message) {
                addMessage(message, true);
                chatInput.value = '';
                
                // Simple bot response - in a real app would use AI or predefined responses
                setTimeout(() => {
                    addMessage('Thanks for your message! This is a demo chat bot. How can I help you today?');
                }, 1000);
            }
        }
        
        chatSendBtn.addEventListener('click', handleUserInput);
        chatInput.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                handleUserInput();
            }
        });
    }
}

// Cookie Consent Functionality
function initCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const cookieAccept = document.querySelector('.cookie-accept');
    const cookieSettings = document.querySelector('.cookie-settings');
    
    // Show cookie consent if not accepted before
    if(cookieConsent && !localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieConsent.classList.add('active');
        }, 2000);
    }
    
    if(cookieAccept) {
        cookieAccept.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.classList.remove('active');
        });
    }
    
    if(cookieSettings) {
        cookieSettings.addEventListener('click', function() {
            // Would normally open cookie settings modal
            alert('Cookie preferences would open here');
        });
    }
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear(); 