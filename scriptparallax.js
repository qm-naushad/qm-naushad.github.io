window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach(section => {
        const speed = 0.5;
        const offset = window.pageYOffset;
        section.style.backgroundPositionY = (offset - section.offsetTop) * speed + 'px';
    });
});
