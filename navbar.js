let hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobileNavbar');

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-active');
    this.classList.toggle('is-active'); // hamburger
});