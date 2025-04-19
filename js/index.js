// Contador
const contadorElement = document.getElementById('contador');
let count = 0;
const target = 700;
const duration = 1000;
const step = Math.ceil(target / (duration / 16));

function updateCounter() {
    if (count < target) {
        count += step;
        contadorElement.textContent = Math.min(count, target) + "+";
        requestAnimationFrame(updateCounter);
    } else {
        contadorElement.textContent = target + "+";
    }
}

updateCounter();

// Modo Oscuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar'); // Selecciona la barra de navegación de Bootstrap
const navbarNav = document.querySelector('.navbar-nav'); // El ul dentro de la barra de navegación
const navLinks = document.querySelectorAll('.nav-link'); // Selecciona todos los .nav-link
const cards = document.querySelectorAll('.card');
const contadorSection = document.querySelector('.contador');
const testimoniosSection = document.querySelector('.testimonios');
const newsletterSection = document.querySelector('.newsletter');
const redesSection = document.querySelector('.redes');
const footerElement = document.querySelector('footer');

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Barra de navegación (Bootstrap)
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-dark');

    // Enlaces de la barra de navegación (Bootstrap)
    navLinks.forEach(link => link.classList.toggle('dark-mode-link'));

    cards.forEach(card => card.classList.toggle('dark-mode-card'));
    contadorSection.classList.toggle('dark-mode-section');
    testimoniosSection.classList.toggle('dark-mode-section');
    newsletterSection.classList.toggle('dark-mode-section');
    redesSection.classList.toggle('dark-mode-section');
    footerElement.classList.toggle('dark-mode-footer');

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

    // Animación del Hero
    $('.anim-text').addClass('fade-in slide-up');

    // Formulario de Newsletter
    $('.newsletter form').submit(function (event) {
        event.preventDefault(); // Evita el envío del formulario
        let email = $('#email').val();

        if (validateEmail(email)) {
            // Muestra el spinner
            let spinner = $('<div class="spinner-border text-light" role="status"><span class="visually-hidden">Cargando...</span></div>');
            $('.newsletter button').html(spinner).prop('disabled', true);

            // Simula el envío (reemplaza con tu lógica real)
            setTimeout(function () {
                $('.newsletter button').html('Suscribirse').prop('disabled', false);
                $('#email').val(''); // Limpia el campo
                alert('¡Gracias por suscribirte!'); // Reemplaza con un modal
            }, 2000);
        } else {
            alert('Por favor, ingresa un correo electrónico válido.');
        }
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});