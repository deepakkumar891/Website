// Case Studies Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality for case studies
    const filterButtons = document.querySelectorAll('.filter-btn');
    const caseStudyItems = document.querySelectorAll('.case-study-item');

    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter case studies
            caseStudyItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });

    // Handle case study filter based on URL hash
    const handleHashFilter = () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
            if (filterBtn) {
                filterBtn.click();
            }
        }
    };

    // Run hash filter when page loads
    handleHashFilter();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashFilter);

    // Handle case study detail page if URL has parameters
    if (window.location.href.includes('case-study-details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const caseId = urlParams.get('id');
        
        if (caseId) {
            // Here you would typically fetch case study details from an API
            // For demonstration, we're just showing how to handle the parameters
            console.log(`Loading case study with ID: ${caseId}`);
            
            // You could add code here to fetch the specific case study data
            // and populate the page content dynamically
        }
    }
});

// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    if (scrollProgress) {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
    }
}); 