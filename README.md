# Modern Web Design Studio Website

This repository contains the code for a modern web design studio website with multiple pages and a modular, well-organized file structure.

## Project Structure

### HTML Files
- `index.html` - Homepage with various sections showcasing services and features
- `about.html` - About us page with team information
- `contact.html` - Contact page with form and map
- `case-study.html` - Case studies showcase page with filterable projects

### CSS Files
- `common.css` - Shared styles used across all pages
- `index.css` - Homepage-specific styles
- `aboutStyle.css` - About page-specific styles
- `contactStyle.css` - Contact page-specific styles
- `casestudy.css` - Case study-specific styles

### JavaScript Files
- `common.js` - Shared JavaScript functionality used across all pages
- `index.js` - Homepage-specific JavaScript
- `about-animations.js` - About page-specific animations
- `contact-animations.js` - Contact page-specific functionality
- `casestudy.js` - Case study-specific functionality (filtering, etc.)

## Features

- Responsive design for optimal viewing on all devices
- Dark/light theme switcher
- Smooth animations using AOS library
- Interactive elements (sliders, counters, etc.)
- Case study filter functionality
- Contact form with validation
- Map integration on contact page
- Scroll progress indicator
- Chatbot functionality
- Testimonial carousel
- Interactive code playground demo
- Data visualization with Chart.js
- Particles.js backgrounds

## Dependencies

- Font Awesome 6.0.0 - Icons
- Google Fonts (Open Sans, Poppins) - Typography
- AOS 2.3.1 - Scroll animations
- Swiper 8 - Touch sliders
- Chart.js - Data visualization
- Particles.js - Animated backgrounds
- Leaflet - Interactive maps

## Organization Structure

The website follows a modular approach where:

1. Common styles and scripts are separated from page-specific ones
2. Each page has its own dedicated CSS and JavaScript files
3. Functionality is organized logically across files
4. Dependencies are loaded only where needed

## Usage

To run this website locally:

1. Clone the repository
2. Open any HTML file in your web browser
3. No build process or server required

## Customization

- Theme colors can be modified in the `:root` variables in `common.css`
- Page-specific styles can be modified in their respective CSS files
- Functionality can be extended by adding new functions to the appropriate JS files 