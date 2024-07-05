document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.vertical-menu');

    function ColorScroll() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const hue = scrollPercentage * 1.2;
        navMenu.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
    }

    window.addEventListener('scroll', ColorScroll);
});
