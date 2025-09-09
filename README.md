# JavaScript Final Project – Interactive Website
## Project Overview
This project was created as a final assignment for IST 239. It showcases the use of HTML, CSS, and JavaScript to build an interactive, single-page website with multiple features.

---

## Features

### Home
- Introduction to the project and navigation.

### Labs
- Demonstrations of JavaScript labs completed during the course.

### News
- A blog-style section for project updates.
- Each update has a title, date, and content.
- Displays updates dynamically from a JSON file.

### Game
- A word search puzzle built with JavaScript.
- Words are dynamically generated and displayed on a grid.
- Players can select words by clicking/dragging over letters.

### Preferences
- A customizable panel where users can change colors, fonts, and visual effects.
- Preferences are saved automatically using localStorage.

### Contact
- Contact form styled with CSS Grid and Flexbox.
- Copy-to-clipboard feature for contact details.

## Highlights
- Built entirely with **vanilla JavaScript**, HTML, and CSS.
- Uses **DOM manipulation** to create and manage dynamic content.
- Employs **localStorage** for saving preferences.
- Structured code with separate classes and modular design.

## Purpose
This project demonstrates:
- DOM manipulation
- Event handling
- Dynamic content rendering
- Local storage management
- CSS Grid and Flexbox for layout

## Setup
1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Navigate through the sections using the menu at the top.

## Possible Improvements
- **Accessibility**: I didn’t add much support such as ARIA labels. This is something I want to prioritize in future projects to make sites more inclusive.

- **Code structure:** The main script manages too many responsibilities. For example, it defines methods for loading lab data, which would be better extracted into a dedicated class.

- **Word search interactivity:** Currently, users click letters to select words. I wanted to add canvas-based interaction so players could draw around words, and I plan to revisit that idea.

- **CSS consistency:** Toward the end I started using CSS variables for properties. It would have been better to adopt that from the beginning for a more consistent style.

- **Server-side functionality:** While adding server-side code was beyond the scope of this class project, it’s something I want to implement in my next web application.

- **Responsive design:** I didn’t include media queries to make the site mobile-friendly. I've done it in the past, but it wasn’t a requirement. It’s a key improvement I’ll be including in future projects.

---
