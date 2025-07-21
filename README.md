# Palkesh Patel - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations, interactive elements, and a professional design.

## 🌟 Features

### Design & Layout

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and JavaScript-powered interactions
- **Gradient Effects**: Beautiful gradient backgrounds and text effects
- **Glass Morphism**: Modern glass-like effects on navigation and cards

### Sections

1. **Hero Section**: Animated introduction with typing effect
2. **About**: Professional summary with animated statistics
3. **Skills**: Interactive skill bars with progress animations
4. **Experience**: Timeline-based work history
5. **Projects**: Featured projects with hover effects
6. **Contact**: Contact form with validation and contact information

### Interactive Features

- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Skill Progress Bars**: Animated skill level indicators
- **Project Cards**: Hover effects and animations
- **Contact Form**: Form validation and submission feedback
- **Scroll Progress**: Visual scroll progress indicator
- **Particle Effects**: Subtle background animations
- **Active Navigation**: Highlights current section in navigation

### Animations

- **Fade-in Effects**: Elements animate in as you scroll
- **Typing Effect**: Hero title types out on page load
- **Parallax Effects**: Subtle parallax on profile card
- **Hover Animations**: Interactive hover effects throughout
- **Counter Animations**: Animated statistics counters
- **Loading Animations**: Smooth page load transitions

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. Download or clone the files to your local machine
2. Open `index.html` in your web browser
3. The website will load with all animations and features

### File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── portfolio.md        # Original portfolio data
└── README.md           # This file
```

## 🎨 Customization

### Personal Information

Edit the following sections in `index.html`:

1. **Contact Information** (lines 60-65):

   ```html
   <p><i class="fas fa-envelope"></i> patel.palkesh@gmail.com</p>
   <p><i class="fas fa-phone"></i> +91 81416 81200</p>
   ```

2. **About Section** (lines 75-80):

   ```html
   <p class="about-description">Your updated description here...</p>
   ```

3. **Skills Section** (lines 120-200):

   - Update skill names and percentages
   - Add or remove skills as needed

4. **Experience Timeline** (lines 220-250):

   - Update job titles, companies, and durations
   - Add new timeline items

5. **Projects Section** (lines 270-400):
   - Update project details, technologies, and descriptions
   - Add new project cards

### Styling Customization

#### Colors

The main color scheme uses CSS custom properties. Update these in `styles.css`:

```css
/* Primary gradient colors */
.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Secondary colors */
.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### Fonts

Change the font family in `styles.css`:

```css
body {
  font-family: "Poppins", sans-serif; /* Change to your preferred font */
}
```

#### Animations

Adjust animation speeds and effects in `styles.css`:

```css
/* Animation duration */
.skill-progress {
  transition: width 1.5s ease; /* Adjust timing */
}

/* Hover effects */
.project-card:hover {
  transform: translateY(-10px); /* Adjust movement */
}
```

### JavaScript Customization

#### Animation Timing

Update animation delays in `script.js`:

```javascript
// Typing effect speed
setTimeout(typeWriter, 1000); // Adjust delay

// Counter animation duration
const duration = 2000; // Adjust counter speed
```

#### Form Handling

The contact form currently shows a success message. To integrate with a real backend:

```javascript
// Replace the setTimeout in initContactForm() with actual API call
fetch("/api/contact", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => {
    showNotification("Message sent successfully!", "success");
  })
  .catch((error) => {
    showNotification("Error sending message", "error");
  });
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

### Mobile Features

- Hamburger navigation menu
- Optimized touch interactions
- Simplified layouts for small screens
- Touch-friendly buttons and forms

## 🎯 Performance Optimizations

- **Lazy Loading**: Animations trigger on scroll
- **Efficient CSS**: Minimal reflows and repaints
- **Optimized JavaScript**: Event delegation and throttling
- **Lightweight**: No heavy frameworks or libraries

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📝 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the portfolio template.

## 📞 Support

For questions or support, please contact:

- Email: patel.palkesh@gmail.com
- Phone: +91 81416 81200

---

**Built with ❤️ for showcasing professional skills and experience**
