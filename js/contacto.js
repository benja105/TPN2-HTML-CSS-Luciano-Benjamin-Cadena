$(document).ready(function() {
    const formulario = $('#formulario');
    const nombreInput = $('#nombre');
    const emailInput = $('#email');
    const mensajeInput = $('#mensaje');
    const spinner = $('.spinner-border');
    const modalConfirmacion = $('#confirmacionModal');
    const botonAlternarTema = $('#theme-toggle');
    const cuerpo = $('body');
    const encabezado = $('header');
    const navegacion = $('nav');
    const listaEnlacesMenu = $('#navbarNav ul');
    const contenedorContacto = $('.contacto-container');
    const formularioContacto = $('.formulario');
    const botonEnviar = $('.btn-enviar');
    const pieDePagina = $('footer');
    const seccionRedes = $('.redes');
    const enlacesRedes = $('.redes a');

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

    // Función para alternar el modo oscuro
    function alternarModoOscuro() {
        cuerpo.toggleClass('dark-mode');
        encabezado.toggleClass('dark-mode');
        navegacion.toggleClass('navbar-dark bg-dark');
        listaEnlacesMenu.toggleClass('dark-mode');
        listaEnlacesMenu.find('a.nav-link').toggleClass('dark-mode-link');
        botonAlternarTema.toggleClass('dark-mode-button');
        contenedorContacto.toggleClass('dark-mode-section');
        formularioContacto.toggleClass('dark-mode-card');
        botonEnviar.toggleClass('dark-mode-button');
        pieDePagina.toggleClass('dark-mode-footer');
        seccionRedes.toggleClass('dark-mode-section');
        enlacesRedes.toggleClass('dark-mode-link');
        modalConfirmacion.find('.modal-content').toggleClass('dark-mode');
        botonAlternarTema.text(cuerpo.hasClass('dark-mode') ? 'Modo Claro' : 'Modo Oscuro');
        localStorage.setItem('theme', cuerpo.hasClass('dark-mode') ? 'dark' : 'light');
    }

    // Evento para el botón de modo oscuro
    botonAlternarTema.on('click', alternarModoOscuro);

    // Validación en tiempo real para el nombre
    nombreInput.on('input', function() {
        if (this.checkValidity()) {
            $(this).removeClass('is-invalid').addClass('is-valid');
            $(this).next('.invalid-feedback').hide();
            $(this).nextAll('.valid-feedback').show();
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            $(this).next('.invalid-feedback').show();
            $(this).nextAll('.valid-feedback').hide();
        }
    });

    // Validación en tiempo real para el email
    emailInput.on('input', function() {
        if (this.checkValidity()) {
            $(this).removeClass('is-invalid').addClass('is-valid');
            $(this).next('.invalid-feedback').hide();
            $(this).nextAll('.valid-feedback').show();
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            $(this).next('.invalid-feedback').show();
            $(this).nextAll('.valid-feedback').hide();
        }
    });

    // Validación en tiempo real para el mensaje
    mensajeInput.on('input', function() {
        if (this.checkValidity()) {
            $(this).removeClass('is-invalid').addClass('is-valid');
            $(this).next('.invalid-feedback').hide();
            $(this).nextAll('.valid-feedback').show();
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            $(this).next('.invalid-feedback').show();
            $(this).nextAll('.valid-feedback').hide();
        }
    });

    // Manejo del envío del formulario
    formulario.on('submit', function(e) {
        e.preventDefault();

        // Verificar si el formulario es válido
        const esNombreValido = nombreInput[0].checkValidity();
        const esEmailValido = emailInput[0].checkValidity();
        const esMensajeValido = mensajeInput[0].checkValidity();

        if (esNombreValido && esEmailValido && esMensajeValido) {
            spinner.fadeIn();

            
            setTimeout(function() {
                spinner.fadeOut();
                modalConfirmacion.modal('show');
                formulario[0].reset();
                // Limpiar las clases de validación
                nombreInput.removeClass('is-valid');
                emailInput.removeClass('is-valid');
                mensajeInput.removeClass('is-valid');
                nombreInput.nextAll('.valid-feedback').hide();
                emailInput.nextAll('.valid-feedback').hide();
                mensajeInput.nextAll('.valid-feedback').hide();
            }, 1500);
        } else {
            // Mostrar mensajes de error si no son válidos
            if (!esNombreValido) {
                nombreInput.removeClass('is-valid').addClass('is-invalid').next('.invalid-feedback').show().nextAll('.valid-feedback').hide();
            }
            if (!esEmailValido) {
                emailInput.removeClass('is-valid').addClass('is-invalid').next('.invalid-feedback').show().nextAll('.valid-feedback').hide();
            }
            if (!esMensajeValido) {
                mensajeInput.removeClass('is-valid').addClass('is-invalid').next('.invalid-feedback').show().nextAll('.valid-feedback').hide();
            }
        }
    });
});