# CSS Architecture - 7-1 Pattern

This project uses the 7-1 pattern for CSS organization, providing a clean, maintainable structure for styling. 

## Directory Structure

```
css/
|
|– abstracts/
|   |– _variables.css        # Variables (colors, fonts, etc.)
|   |– _utilities.css        # Utility classes
|
|– base/
|   |– _reset.css            # Reset/normalize
|
|– components/
|   |– _buttons.css          # Buttons
|   |– _forms.css            # Form elements
|   |– _cards.css            # Cards and UI elements
|
|– layout/
|   |– _header.css           # Header
|   |– _footer.css           # Footer
|   |– _responsive.css       # Responsive styles
|
|– pages/
|   |– _home.css             # Home page styles
|   |– _about.css            # About page styles
|   |– _services.css         # Services page styles
|   |– _casestudy.css        # Case Study page styles
|   |– _careers.css          # Careers page styles
|   |– _contact.css          # Contact page styles
|   |– _privacy.css          # Privacy page styles
|
|– main.css                  # Main file that imports all other files
```

## How It Works

The `main.css` file imports all other CSS files in the correct order:

1. Abstracts - variables and utility classes
2. Base - reset and base styles 
3. Components - reusable UI components
4. Layout - structural elements
5. Pages - page-specific styles 

This creates a cascade where more specific styles override more general ones.

## Usage

In your HTML files, you only need to include one CSS file:

```html
<link rel="stylesheet" href="css/main.css">
```

## Modifying Styles

### Adding New Component Styles

1. Create a new file in the appropriate directory (e.g., `components/_new-component.css`)
2. Add your styles to this file
3. Import the file in `main.css` in the appropriate section

### Adding Page-Specific Styles

If creating styles for a new page:

1. Create a new file in the `pages` directory (e.g., `pages/_new-page.css`)
2. Add your page-specific styles
3. Import the file in `main.css`

## Migration from Old Structure

A migration script has been created to help update HTML files from the old CSS structure to the new one. Run it using:

```
node migration.js
```

This script will:
1. Find all HTML files in the project
2. Replace old CSS link tags with the new `main.css` link
3. Log which files were updated

## Benefits of 7-1 Pattern

- **Maintainability**: Each file has a single responsibility
- **Organization**: Logical grouping of related styles
- **Scalability**: Easy to add new features and styles
- **Collaboration**: Multiple developers can work on different files
- **Performance**: Bundled into a single file for production

## Best Practices

1. Keep files focused on a single responsibility
2. Use variables for consistent values (colors, fonts, etc.)
3. Follow naming conventions consistently
4. Minimize nesting (avoid specificity issues)
5. Comment your code for clarity

## Variables and Theme Support

The project uses CSS variables (custom properties) for:

- Colors (with light/dark theme support)
- Typography
- Spacing
- Shadows
- Border radius

To use these variables, reference them with the `var()` function:

```css
.element {
  color: var(--primary-color);
  font-family: var(--font-primary);
}
``` 