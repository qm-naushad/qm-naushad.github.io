const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  autoplay: {
    delay: 1500, // Time in milliseconds between slides
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

// Function to scroll down by a specified number of pixels
function scrollDown(pixelsToScroll) {
  window.scrollBy(0, pixelsToScroll);
}

// Add a click event listener to the "Home" link
var homeLink = document.querySelector('a[href="#hero"]');
if (homeLink) {
  homeLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Calculate the target scroll position
    var targetSection = document.getElementById("hero"); // Assuming the "hero" section has an id of "service"
    var offset = 80; // Adjust this value as needed
    var targetPosition = targetSection.offsetTop - offset;

    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth" // Add smooth scrolling effect
    });
  });
}

// Add a click event listener to the "Services" link
var servicesLink = document.querySelector('a[href="#service"]');
if (servicesLink) {
  servicesLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Calculate the target scroll position
    var targetSection = document.getElementById("service"); // Assuming the "service" section has an id of "service"
    var offset = 120; // Adjust this value as needed
    var targetPosition = targetSection.offsetTop - offset;

    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth" // Add smooth scrolling effect
    });
  });
}

// Add a click event listener to the "About" link
var aboutLink = document.querySelector('a[href="#about"]');
if (aboutLink) {
  aboutLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Calculate the target scroll position
    var targetSection = document.getElementById("about"); // Assuming the "service" section has an id of "service"
    var offset = 100; // Adjust this value as needed
    var targetPosition = targetSection.offsetTop - offset;

    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth" // Add smooth scrolling effect
    });
  });
}
