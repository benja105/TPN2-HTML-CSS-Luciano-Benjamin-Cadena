$(document).ready(function() {
    // Resaltar fila al pasar el mouse
    $(".pricing-table tbody tr").hover(function() {
        $(this).toggleClass("table-active");
    });

    // Resaltar columna al hacer clic
    $(".pricing-table th, .pricing-table td").click(function() {
        var index = $(this).index();
        $(".pricing-table th:nth-child(" + (index + 1) + "), .pricing-table td:nth-child(" + (index + 1) + ")").toggleClass("selected");
    });

    // Alternar precios mensuales/anuales
    $("#toggle-precio").on("change", function() {
        $(".monthly-price").toggleClass("d-none");
        $(".annual-price").toggleClass("d-none");
    });

    // Inicializar tooltips de Bootstrap
    $('[data-tooltip]').tooltip({
        placement: 'top'
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
    const preciosSection = document.querySelector('.precios-page');
    const toggleContainer = document.querySelector('.toggle-container');
    const tablaPlanes = document.querySelector('.pricing-table');
    const planesFilas = document.querySelectorAll('.plan-row');
    const caracteristicasFilas = document.querySelectorAll('.feature-row');
    const accionesFilas = document.querySelectorAll('.action-row');
    const preciosMensuales = document.querySelectorAll('.monthly-price');
    const preciosAnuales = document.querySelectorAll('.annual-price');
    const redesSection = document.querySelector('footer .redes');
    const footerElement = document.querySelector('footer');
    const menuLinksA = document.querySelectorAll('.navbar-nav .nav-link');
    const redesLinksA = document.querySelectorAll('footer .redes a');
    const themeButtonMenu = document.querySelector('#theme-toggle');
    const h1 = preciosSection ? preciosSection.querySelector('h1') : null;
    const toggleLabelElement = document.querySelector('.form-check-label');

    function alternarTema(modoOscuro) {
        const claseTema = modoOscuro ? 'dark-mode' : 'light-mode';
        const claseTemaOpuesta = modoOscuro ? 'light-mode' : 'dark-mode';
        const claseNavbar = modoOscuro ? ['navbar-dark', 'bg-dark'] : ['navbar-light', 'bg-light'];
        const claseNavbarOpuesta = modoOscuro ? ['navbar-light', 'bg-light'] : ['navbar-dark', 'bg-dark'];
        const claseTablaModoOscuro = 'dark-mode-table';
        const textoBoton = modoOscuro ? 'Modo Claro' : 'Modo Oscuro';

        body.classList.add(claseTema);
        body.classList.remove(claseTemaOpuesta);

        const elementosAlternar = [
            header, nav, menuLinks, preciosSection, toggleContainer,
            footerElement, themeButtonMenu, toggleLabelElement
        ];
        elementosAlternar.forEach(el => {
            if (el) {
                el.classList.add(claseTema);
                el.classList.remove(claseTemaOpuesta);
            }
        });

        if (tablaPlanes) {
            tablaPlanes.classList.toggle(claseTablaModoOscuro, modoOscuro);
        }

        planesFilas.forEach(fila => {
            fila.classList.add(claseTema);
            fila.classList.remove(claseTemaOpuesta);
        });
        caracteristicasFilas.forEach(fila => {
            fila.classList.add(claseTema);
            fila.classList.remove(claseTemaOpuesta);
        });
        accionesFilas.forEach(fila => {
            fila.classList.add(claseTema);
            fila.classList.remove(claseTemaOpuesta);
        });
        preciosMensuales.forEach(precio => {
            precio.classList.add(claseTema);
            precio.classList.remove(claseTemaOpuesta);
        });
        preciosAnuales.forEach(precio => {
            precio.classList.add(claseTema);
            precio.classList.remove(claseTemaOpuesta);
        });
        menuLinksA.forEach(link => {
            link.classList.add(claseTema);
            link.classList.remove(claseTemaOpuesta);
        });
        redesLinksA.forEach(link => {
            link.classList.add('dark-mode-link');
            link.classList.remove('light-mode');
        });

        if (redesSection) {
            redesSection.classList.add(modoOscuro ? 'dark-mode-section' : 'light-mode');
            redesSection.classList.remove(modoOscuro ? 'light-mode' : 'dark-mode-section');
        }
        if (footerElement) {
            footerElement.classList.add(modoOscuro ? 'dark-mode-footer' : 'light-mode');
            footerElement.classList.remove(modoOscuro ? 'light-mode' : 'dark-mode-footer');
        }

        if (nav) {
            nav.classList.remove(...claseNavbarOpuesta);
            nav.classList.add(...claseNavbar);
        }

        if (themeToggleBtn) {
            themeToggleBtn.textContent = textoBoton;
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        const esModoOscuro = !body.classList.contains('dark-mode');
        alternarTema(esModoOscuro);
    });
});