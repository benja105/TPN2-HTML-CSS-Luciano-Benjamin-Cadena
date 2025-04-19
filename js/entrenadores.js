$(document).ready(function() {
    // Barras de habilidades animadas
    $(".progress-bar").each(function() {
        var skillLevel = $(this).data("skill-level");
        $(this).animate({
            width: skillLevel + "%"
        }, 1500); // La animación durará 1.5 segundos
        $(this).prop('aria-valuenow', skillLevel);
        $(this).text(skillLevel + "%"); // Opcional: mostrar el porcentaje dentro de la barra
    });

    // Sistema de rating con estrellas
    $(".rating input").on("change", function() {
        var trainerName = $(this).attr('name').split('_')[1];
        $("#rating-value-" + trainerName).text("Has calificado con " + $(this).val() + " estrellas.");
    });

    $(".rating label").on("mouseover", function() {
        var trainerName = $(this).attr('for').split('_')[1];
        var ratingValue = $(this).prevAll("input").length + 1;
    });

    $(".rating").on("mouseout", function() {
        var trainerName = $(this).find('input').attr('name').split('_')[1];
        var selectedRating = $(this).find("input:checked").val();
        if (selectedRating) {
            $("#rating-value-" + trainerName).text("Has calificado con " + selectedRating + " estrellas.");
        } else {
            $("#rating-value-" + trainerName).text("Selecciona una calificación.");
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

    // Modo Oscuro
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const menuLinks = document.querySelector('.navbar-nav');
    const entrenadoresContainer = document.querySelector('.entrenadores-container');
    const cardsContainer = document.querySelector('.cards-container');
    const cardFronts = document.querySelectorAll('.card-front');
    const cardBacks = document.querySelectorAll('.card-back');
    const habilidadesLabels = document.querySelectorAll('.habilidad label');
    const barras = document.querySelectorAll('.barra');
    const rellenos = document.querySelectorAll('.relleno');
    const ratings = document.querySelectorAll('.rating');
    const ratingContainers = document.querySelectorAll('.rating-container');
    const ratingValues = document.querySelectorAll('[id^="rating-value-"]');
    const redesSection = document.querySelector('footer .redes');
    const footerElement = document.querySelector('footer');

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        nav.classList.toggle('navbar-dark');
        nav.classList.toggle('bg-dark');
        if (menuLinks) {
            menuLinks.classList.toggle('dark-mode');
            menuLinks.querySelectorAll('a.nav-link').forEach(link => link.classList.toggle('dark-mode-link'));
            const themeButton = menuLinks.querySelector('#theme-toggle');
            if (themeButton) {
                themeButton.classList.toggle('dark-mode-button');
            }
        }
        if (entrenadoresContainer) {
            entrenadoresContainer.classList.toggle('dark-mode-section');
            entrenadoresContainer.querySelector('h1').classList.toggle('dark-mode-heading');
        }
        if (cardsContainer) {
            cardsContainer.classList.toggle('dark-mode-cards-container');
        }
        cardFronts.forEach(card => card.classList.toggle('dark-mode-card-front'));
        cardBacks.forEach(card => card.classList.toggle('dark-mode-card-back'));
        habilidadesLabels.forEach(label => label.classList.toggle('dark-mode-label'));
        barras.forEach(barra => barra.classList.toggle('dark-mode-barra'));
        rellenos.forEach(relleno => relleno.classList.toggle('dark-mode-relleno'));
        ratings.forEach(rating => rating.classList.toggle('dark-mode-rating'));
        ratingContainers.forEach(container => container.classList.toggle('dark-mode-rating-container'));
        ratingValues.forEach(value => value.classList.toggle('dark-mode-text'));
        if (redesSection) {
            redesSection.classList.toggle('dark-mode-section');
            redesSection.querySelectorAll('a').forEach(a => a.classList.toggle('dark-mode-link'));
        }
        footerElement.classList.toggle('dark-mode-footer');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Oscuro';
        }
    });
});