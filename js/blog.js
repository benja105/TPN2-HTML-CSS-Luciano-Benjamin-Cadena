// Modo Oscuro
const botonAlternarTema = $('#theme-toggle');
const cuerpo = $('body');
const encabezado = $('header');
const navegacion = $('nav');
const enlacesMenu = $('.navbar-nav');
const seccionFiltros = $('.tags');
const etiquetasFiltros = $('.tags label');
const seccionGaleria = $('.newspaper');
const tarjetas = $('.post.card');
const seccionComentarios = $('.comentarios');
const tarjetasComentarios = $('.comentario.cards');
const avatares = $('.avatar');
const seccionRedes = $('footer .redes');
const enlacesRedes = $('footer .redes a');
const pieDePagina = $('footer');

function alternarModoOscuro() {
    cuerpo.toggleClass('dark-mode');
    encabezado.toggleClass('dark-mode');
    navegacion.toggleClass('navbar-dark bg-dark');
    enlacesMenu.toggleClass('dark-mode');
    enlacesMenu.find('a.nav-link').toggleClass('dark-mode-link');
    botonAlternarTema.toggleClass('dark-mode-button');
    seccionFiltros.toggleClass('dark-mode');
    etiquetasFiltros.toggleClass('dark-mode-label');
    seccionGaleria.toggleClass('dark-mode-section');
    tarjetas.toggleClass('dark-mode-card');
    seccionComentarios.toggleClass('dark-mode-section');
    tarjetasComentarios.toggleClass('dark-mode-card');
    avatares.toggleClass('dark-mode-avatar');
    seccionRedes.toggleClass('dark-mode-section');
    enlacesRedes.toggleClass('dark-mode-link');
    pieDePagina.toggleClass('dark-mode-footer');

    botonAlternarTema.text(cuerpo.hasClass('dark-mode') ? 'Modo Claro' : 'Modo Oscuro');
    localStorage.setItem('theme', cuerpo.hasClass('dark-mode') ? 'dark' : 'light');
}

botonAlternarTema.on('click', alternarModoOscuro);

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

// Filtros por Etiquetas
$('.tags input[type="radio"]').on('change', function() {
    const etiquetaSeleccionada = this.id;
    $('.post').hide().filter('.' + etiquetaSeleccionada).show();
    if (etiquetaSeleccionada === 'all') {
        $('.post').show();
    }
});

// Comentarios con Avatares (Dinámicas)
$('.comentario').each(function() {
    const comentario = $(this);

    // Agregar funcionalidad de "Responder"
    const enlaceResponder = $('<a href="#" class="reply-link">Responder</a>').on('click', function(e) {
        e.preventDefault();
        alert('Funcionalidad de responder al comentario.');
    });
    comentario.append(enlaceResponder);

    // Agregar funcionalidad de "Destacar"
    const enlaceDestacar = $('<a href="#" class="highlight-link">Destacar</a>').on('click', function(e) {
        e.preventDefault();
        comentario.toggleClass('highlighted-comment');
    });
    comentario.append(enlaceDestacar);
});

// Revelación con Scroll (IntersectionObserver)
const observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            $(entrada.target).addClass('revealed');
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.1
});

$('.post').each(function() {
    observador.observe(this);
});