# Procify - Simplified Website

This is a simplified, static version of the Procify website that's perfect for GitHub Pages deployment.

## What's been simplified

✅ **Removed:**
- Language switching functionality (HR/EN toggle)
- React/Vite build system dependencies
- Complex internationalization system
- All unused npm packages

✅ **Kept:**
- Clean, professional design
- Responsive layout
- Smooth animations and hover effects
- Contact form (with basic validation)
- Mobile menu functionality
- All core content and messaging

## Files Structure

```
simple-site/
├── index.html      # Main HTML file
├── styles.css      # All custom CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## How to deploy to GitHub Pages

### Option 1: Direct Upload
1. Copy all files from the `simple-site` folder to the root of your GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set source to "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Using the simple-site folder
1. Keep the files in the `simple-site` folder
2. In GitHub Pages settings, select "main" branch and "/simple-site" folder
3. Your site will be available at `https://yourusername.github.io/repository-name`

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Fast Loading**: No build process required, loads instantly
- **Modern Styling**: Uses Tailwind CSS via CDN for consistent design
- **Interactive Elements**: Hover effects, smooth scrolling, mobile menu
- **Contact Form**: Ready for integration with form services like Formspree or Netlify Forms
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Customization

### Colors
The site uses a green color scheme. To change colors, update the CSS custom properties in `styles.css` and the Tailwind classes in `index.html`.

### Content
All content is directly in the HTML file. Simply edit `index.html` to update:
- Company information
- Services descriptions
- Contact details
- Statistics and testimonials

### Styling
- External styles are in `styles.css`
- The site uses Tailwind CSS via CDN for utility classes
- Custom animations and effects are defined in the CSS file

### JavaScript
All interactive functionality is in `script.js`:
- Mobile menu toggle
- Contact form handling
- Smooth scrolling
- Mouse hover effects
- Scroll animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance

- Loads in under 2 seconds on most connections
- Uses CDN for fonts and Tailwind CSS
- Optimized images and minimal JavaScript
- No build process or bundling required

## Contact Form Integration

The contact form currently shows an alert message. To make it functional:

1. **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form tag
2. **Netlify Forms**: Add `netlify` attribute to the form tag
3. **Custom Backend**: Modify the form submission handler in `script.js`

## License

This simplified version maintains the same license as the original project.