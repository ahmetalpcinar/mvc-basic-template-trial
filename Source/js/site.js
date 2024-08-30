document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('#mainNav .nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').toLowerCase();

        if (currentPage === linkPage) {
            link.parentElement.classList.add('active');
        }
        else {
            link.parentElement.classList.remove('active');
        }
    });
});