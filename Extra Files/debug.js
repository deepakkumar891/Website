// Theme Toggler Debug Script
console.log("Debug script loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired in debug.js");
    
    // Check if the theme toggle element exists
    const themeToggle = document.getElementById('theme-toggle');
    console.log("Theme toggle element found:", themeToggle ? "YES" : "NO");
    
    if (themeToggle) {
        console.log("Theme toggle checked state:", themeToggle.checked);
        
        // Add a direct event listener from debug script
        themeToggle.addEventListener('change', function() {
            console.log("Theme toggle changed to:", this.checked ? "dark" : "light");
            document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
        });
        
        // Check stored theme
        const savedTheme = localStorage.getItem('theme');
        console.log("Saved theme in localStorage:", savedTheme || "none");
        
        // Apply theme from debug script
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            themeToggle.checked = savedTheme === 'dark';
            console.log("Applied theme from debug script:", savedTheme);
        }
    }
    
    // Log current theme
    console.log("Current data-theme attribute:", document.documentElement.getAttribute('data-theme'));
});
