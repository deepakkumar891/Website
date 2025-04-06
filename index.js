// Index-specific JavaScript

// Initialize Particles.js for hero section
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#3498db' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#3498db', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });

        // Also initialize particles for CTA section if it exists
        if (document.getElementById('particles-js-cta')) {
            particlesJS('particles-js-cta', {
                particles: {
                    number: { value: 40, density: { enable: true, value_area: 800 } },
                    color: { value: '#ffffff' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.2, random: false },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.2, width: 1 },
                    move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
                    modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
                },
                retina_detect: true
            });
        }
    }

    // Chat Bot Functionality
    const chatBot = document.querySelector('.chat-bot');
    if (chatBot) {
        const chatToggle = chatBot.querySelector('.chat-bot-toggle');
        const chatInput = chatBot.querySelector('.chat-input input');
        const sendBtn = chatBot.querySelector('.chat-input button');
        const chatMessages = chatBot.querySelector('.chat-messages');

        // Toggle chat bot
        chatToggle.addEventListener('click', () => {
            chatBot.classList.toggle('active');
            if (chatBot.classList.contains('active')) {
                chatInput.focus();
            }
        });

        // Send message on enter
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && chatInput.value.trim() !== '') {
                sendMessage();
            }
        });

        // Send message on button click
        sendBtn.addEventListener('click', () => {
            if (chatInput.value.trim() !== '') {
                sendMessage();
            }
        });

        function sendMessage() {
            const message = chatInput.value;
            addMessage('user', message);
            chatInput.value = '';

            // Show typing indicator
            showTypingIndicator();

            // Simulate response (replace with actual API call)
            setTimeout(() => {
                hideTypingIndicator();
                if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
                    addMessage('bot', 'Hello! How can I help you today?');
                } else if (message.toLowerCase().includes('services')) {
                    addMessage('bot', 'We offer a wide range of development services including web development, mobile apps, and cloud solutions. Would you like to know more about any specific service?');
                } else if (message.toLowerCase().includes('contact')) {
                    addMessage('bot', 'You can reach us at contact@example.com or call us at (123) 456-7890.');
                } else {
                    addMessage('bot', 'Thank you for your message. A team member will get back to you shortly.');
                }
            }, 1500);
        }

        function addMessage(type, content) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', type);
            
            const messageContent = document.createElement('div');
            messageContent.classList.add('message-content');
            messageContent.textContent = content;
            
            messageDiv.appendChild(messageContent);
            chatMessages.appendChild(messageDiv);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.classList.add('message', 'bot', 'typing-indicator-container');
            
            const typingIndicator = document.createElement('div');
            typingIndicator.classList.add('typing-indicator');
            
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('span');
                typingIndicator.appendChild(dot);
            }
            
            typingDiv.appendChild(typingIndicator);
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTypingIndicator() {
            const typingIndicator = chatMessages.querySelector('.typing-indicator-container');
            if (typingIndicator) {
                chatMessages.removeChild(typingIndicator);
            }
        }
    }

    // Cookie Consent
    const cookieConsent = document.querySelector('.cookie-consent');
    if (cookieConsent) {
        const acceptBtn = cookieConsent.querySelector('.cookie-accept');
        const settingsBtn = cookieConsent.querySelector('.cookie-settings');

        // Check if user already accepted cookies
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookieConsent.classList.add('active');
            }, 2000);
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.classList.remove('active');
        });

        settingsBtn.addEventListener('click', () => {
            // Show cookie settings modal (to be implemented)
            console.log('Cookie settings clicked');
        });
    }

    // Services Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            // Show the corresponding tab pane
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Code Playground
    const runCodeBtn = document.querySelector('.run-code');
    const fullscreenToggle = document.querySelector('.fullscreen-toggle');
    const codePreview = document.querySelector('.code-preview');
    const previewWindow = document.querySelector('.preview-window');
    const languageButtons = document.querySelectorAll('.language-selector button');
    
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', () => {
            const greeting = document.createElement('div');
            greeting.className = 'greeting';
            greeting.innerHTML = `
                <h2>Hello, World!</h2>
                <p>This is a simulated code output.</p>
                <button>Click me</button>
            `;
            
            // Clear previous content and add new greeting
            previewWindow.innerHTML = '';
            previewWindow.appendChild(greeting);
            
            // Add click event to the button
            const button = greeting.querySelector('button');
            button.addEventListener('click', () => {
                alert('Button clicked!');
            });
        });
    }
    
    if (fullscreenToggle && codePreview) {
        fullscreenToggle.addEventListener('click', () => {
            codePreview.classList.toggle('fullscreen');
            fullscreenToggle.querySelector('i').classList.toggle('fa-expand');
            fullscreenToggle.querySelector('i').classList.toggle('fa-compress');
        });
    }
    
    if (languageButtons.length > 0) {
        languageButtons.forEach(button => {
            button.addEventListener('click', () => {
                languageButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // Dashboard Tabs
    const dashboardTabs = document.querySelectorAll('.dashboard-tab');
    const dashboardPanels = document.querySelectorAll('.dashboard-panel');
    
    if (dashboardTabs.length > 0) {
        dashboardTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                dashboardTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const panelId = tab.getAttribute('data-panel');
                dashboardPanels.forEach(panel => panel.classList.remove('active'));
                document.getElementById(panelId).classList.add('active');
                
                // Reinitialize charts if needed
                if (panelId === 'performance-panel') {
                    initPerformanceChart();
                } else if (panelId === 'traffic-panel') {
                    initTrafficChart();
                }
            });
        });
        
        // Initialize the first chart
        initPerformanceChart();
    }
    
    // Data Visualization Charts
    function initPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (ctx) {
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Performance',
                        data: [12, 19, 3, 5, 2, 3],
                        borderColor: 'rgba(52, 152, 219, 1)',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
    
    function initTrafficChart() {
        const ctx = document.getElementById('trafficChart');
        if (ctx) {
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
                    datasets: [{
                        label: 'Traffic Sources',
                        data: [65, 59, 30, 15],
                        backgroundColor: [
                            'rgba(52, 152, 219, 0.7)',
                            'rgba(46, 204, 113, 0.7)',
                            'rgba(155, 89, 182, 0.7)',
                            'rgba(52, 73, 94, 0.7)'
                        ],
                        borderColor: [
                            'rgba(52, 152, 219, 1)',
                            'rgba(46, 204, 113, 1)',
                            'rgba(155, 89, 182, 1)',
                            'rgba(52, 73, 94, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }

    // Testimonial Carousel
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    if (testimonialTrack && testimonialItems.length > 0) {
        let currentIndex = 0;
        const itemWidth = testimonialItems[0].clientWidth;
        
        function goToSlide(index) {
            if (index < 0) index = testimonialItems.length - 1;
            if (index >= testimonialItems.length) index = 0;
            
            currentIndex = index;
            testimonialTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }
        
        // Initial setup
        goToSlide(0);
        
        // Event listeners
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
            });
        }
        
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
        });
        
        // Auto play
        let interval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
        
        // Pause on hover
        testimonialTrack.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        testimonialTrack.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, 5000);
        });
    }
}); 