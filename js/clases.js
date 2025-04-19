const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const navbar = document.querySelector('nav');
const menuLinks = document.querySelector('.navbar-nav');
const filtrosSection = document.querySelector('.filters');
const filtrosLabels = document.querySelectorAll('.filters label');
const galeriaSection = document.querySelector('.galeria');
const cards = document.querySelectorAll('.card-wrapper');
const horariosSection = document.querySelector('.horarios');
const tabla = document.querySelector('table');
const tablaHead = document.querySelector('thead');
const tablaBody = document.querySelector('tbody');
const tablaFilas = document.querySelectorAll('tbody tr');
const redesSection = document.querySelector('.redes');
const footerElement = document.querySelector('footer');

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-dark');
    if (menuLinks) {
        menuLinks.classList.toggle('dark-mode');
        menuLinks.querySelectorAll('a.nav-link').forEach(link => link.classList.toggle('dark-mode'));
    }
    if (filtrosSection) {
        filtrosSection.classList.toggle('dark-mode');
        filtrosLabels.forEach(label => label.classList.toggle('dark-mode'));
    }
    if (galeriaSection) {
        galeriaSection.classList.toggle('dark-mode');
    }
    cards.forEach(card => card.classList.toggle('dark-mode'));
    if (horariosSection) {
        horariosSection.classList.toggle('dark-mode');
    }
    if (tabla) {
        tabla.classList.toggle('dark-mode');
        if (tablaHead) tablaHead.classList.toggle('dark-mode');
        if (tablaBody) tablaBody.classList.toggle('dark-mode');
        tablaFilas.forEach(fila => fila.classList.toggle('dark-mode'));
    }
    if (redesSection) {
        redesSection.classList.toggle('dark-mode');
        redesSection.querySelectorAll('a').forEach(a => a.classList.toggle('dark-mode'));
    }
    footerElement.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Oscuro';
    }
});

// Mega Menú (jQuery)
$(document).ready(function () {
    $('.mega-menu-item').hover(
        function () {
            $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
        },
        function () {
            $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
        }
    );
});

// Filtrado de galería con CSS
document.querySelectorAll('.filter-input').forEach(input => {
    input.addEventListener('change', function() {
        const filtro = this.value;
        document.querySelectorAll('.masonry-grid .card-wrapper').forEach(card => {
            if (filtro === 'todos' || card.classList.contains(filtro)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});