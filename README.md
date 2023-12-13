# QM Naushad's Portfolio Website Documentation

Welcome to the documentation of [QM Naushad's Portfolio](https://qm-naushad.github.io/), a personal website designed to showcase my skills, projects, and interests.

## Design and Stylistic Choices

- **Theme**: The website embraces a dark theme, reflecting my personal vibe and preference for a sleek, modern look. I am big fan of dark theme on my electronic devices. It has perks too. It causes less strain on eyes, and saves battery on mobile devices!
- **Layout**: For the layout I wanted to keep it pretty simple and straightforward
- **Typography and Color Scheme**: Carefully selected to complement the dark theme, enhancing visual appeal.

# Naushad's Portfolio Website

## Overview

This document provides a detailed explanation of the HTML structure of my portfolio website, showcasing my skills, projects, and interests.

### Head Section

#### Meta Tags
- **Character Set**: `meta charset="UTF-8"` for universal character encoding.
- **X-UA-Compatible**: Ensures compatibility with older versions of Internet Explorer.
- **Viewport**: `meta name="viewport" content="width=device-width, initial-scale=1.0"` for mobile device optimization.

#### Title
- **Page Title**: `title` Naushad's Portfolio - appears in browser tabs and search results.

#### External Resources
- **Google Fonts**: 'Space Grotesk' font family.
- **Remixicons**: Icon library used for the site.
- **SwiperJS CSS**: For responsive sliders.
- **Main CSS**: External CSS file linked for main site styling.

#### Internal Style
- **Inline CSS**: A small CSS block to align text center using `.center`.

### Body Section

#### Header
- **Navigation Bar**: Links to different sections like Home, Explore, Skills, Projects, and Interests.

#### Main Content
- **Hero Section**: Introduction and brief personal information.
- **Services Section**: Navigation to Skills, Projects, and Interests.
- **About Section**: Detailed personal information and skills.
- **Projects Section**: Showcases my recent projects with external links.
- **Testimonials Section**: Slider for displaying testimonials or additional projects.
- **Qualification Section**: Details of my educational background and personal interests.

#### Footer
- **Contact Information**: Includes social media links, email, and phone number.
- **Copyright Notice**: Indicates the copyright year and my name.

#### External JavaScript
- **SwiperJS**: For interactive sliders.
- **ScrollReveal**: Script for animations based on scroll.
- **Main JavaScript**: External JS file for additional site functionality.

## Technical Aspects

### Navigation Menu Interactivity

#### Variables and DOM Elements
- `navMenu`, `navToggle`, `navItem`, `header`: These variables are references to DOM elements. They are obtained using `document.getElementById` and `document.querySelectorAll`, allowing me to interact with different parts of the webpage, such as the navigation menu, toggle button, individual navigation items, and the page header.

#### Event Listeners and Functions
- **Toggle Navigation Menu**: 
  - `navToggle.addEventListener("click", () => {...})`: This listener triggers when the navigation toggle (hamburger menu) is clicked. It toggles the class `nav__menu--open` on the `navMenu`, which opens or closes the navigation menu. 
  - `changeIcon()`: This function changes the navigation toggle icon from a hamburger icon to a close icon and vice versa, enhancing user feedback.

- **Navigation Item Click Behavior**:
  - The `navItem.forEach` loop adds an event listener to each navigation item. When a navigation item is clicked, it checks if the navigation menu is open (mobile view) and closes it, ensuring a seamless mobile experience.

### Testimonial Slider

- **SwiperJS Integration**:
  - The code initializes a new Swiper instance for the class `testimonial__wrapper`. This enables a testimonial slider with various properties like autoplay, loop, and pagination. The use of breakpoints and coverflow effects makes the testimonial section visually appealing and responsive.

### Header Scroll Animation

- **Scroll Event Listener**:
  - The window object listens for the `scroll` event. When the page is scrolled beyond 40 pixels, the class `header--scroll` is added to the header, likely changing its appearance (like background color, shadow) to indicate scrolling.

### ScrollReveal Animations

- **ScrollReveal Initialization**:
  - `const sr = ScrollReveal({...})`: Initializes ScrollReveal with specific properties such as duration, distance, delay, and reset flag. This library is used to create reveal animations on scroll.
  - `sr.reveal(...)`: Targets different elements like `.hero__content`, `.about__content`, and more for reveal animations with varying origins and delays, adding an engaging and dynamic feel to the website.

### Smooth Scroll Implementation

- **Event Listener for Navigation Links**:
  - `homeLink.addEventListener("click", function(event) {...})` and similar listeners for `servicesLink` and `aboutLink`: These listeners prevent the default anchor tag behavior and implement a smooth scroll to the respective sections. The scroll position is calculated dynamically, considering an offset for better positioning.

The JavaScript code enhances the functionality and aesthetics of the portfolio website. From the interactive navigation menu to the dynamic scrolling and animations, each part contributes to a seamless and engaging user experience. The use of modern JavaScript features and libraries like SwiperJS and ScrollReveal showcases a blend of creativity and technical skills, essential for a contemporary web developer.


## Reflection

Creating this website has been a journey of self-exploration and skill enhancement. It has allowed me to integrate my knowledge of coding, design, and content creation. In future updates, I plan to incorporate more interactive elements and possibly a blog section to share my thoughts and experiences in the field of interactive media.

Feedback and suggestions for improvements are always welcome. Reach out via the contact details listed on the website.

---

© 2023 QM Naushadul Islam. All Rights Reserved.
