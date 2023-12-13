// Add an event listener to the "Home" menu item to scroll to the first section
document.querySelector('.menu li:nth-child(1) a').addEventListener('click', function(event) {
    event.preventDefault();
    // Scroll to the third section
    $('html, body').animate({
        scrollTop: $('.home').offset().top
    }, 1000); // Adjust the duration (in milliseconds) as needed
});


// Add an event listener to the "explore" menu item to scroll to the second section
document.querySelector('.menu li:nth-child(2) a').addEventListener('click', function(event) {
    event.preventDefault();
    // Scroll to the third section
    $('html, body').animate({
        scrollTop: $('.explore').offset().top
    }, 1000); // Adjust the duration (in milliseconds) as needed
});

// Add an event listener to the "Watch" menu item to scroll to the third section
document.querySelector('.menu li:nth-child(3) a').addEventListener('click', function(event) {
    event.preventDefault();
    // Scroll to the third section
    $('html, body').animate({
        scrollTop: $('.watch').offset().top
    }, 1000); // Adjust the duration (in milliseconds) as needed
});

// Add an event listener to the "Cast" menu item to scroll to the "Meet the Cast" section
document.querySelector('.menu li:nth-child(4) a').addEventListener('click', function(event) {
    event.preventDefault();
    // Scroll to the "Meet the Cast" section
    $('html, body').animate({
        scrollTop: $('.meet-the-cast').offset().top
    }, 1000); // Adjust the duration (in milliseconds) as needed
});

document.querySelector('.menu li:nth-child(5) a').addEventListener('click', function(event) {
    event.preventDefault();
    // Scroll to the "Meet the Cast" section
    $('html, body').animate({
        scrollTop: $('.get-in-touch').offset().top
    }, 1000); // Adjust the duration (in milliseconds) as needed
});

const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let activeSlide = 0;

function setActiveSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
}

nextButton.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    setActiveSlide(activeSlide);
});

prevButton.addEventListener('click', () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    setActiveSlide(activeSlide);
});
