# JavaScript Final Project – Interactive Website

This project was created as a final assignment for IST 239. It showcases the use of HTML, CSS, and JavaScript to build an interactive, single-page website with multiple features.

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
- A customizable panel where users can:
  - Change colors, fonts, and visual effects.
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
- Accessible and responsive design

## Setup
1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Navigate through the sections using the menu at the top.

## Possible Improvements
I coded the majority of this project myself, and if I were to revisit it, several areas could be improved:

- Refactoring for SOLID principles: While I aimed to follow SOLID, there are clear violations. Some packages and classes would benefit from restructuring, and certain code should be extracted into interfaces to better support dependency inversion.

- Client/Server architecture: The networking code was rushed, and much of it could be refactored into smaller methods to better follow the Single Responsibility Principle.

- Exception handling: There are still some handled exceptions being thrown occasionally in the server class that would need investigation.

Overall, this application isn’t highly polished, but it was a valuable learning experience. The key takeaway for me is how I can apply what I’ve learned here to future projects.

---
