document.addEventListener("DOMContentLoaded", function() {
    // Función para activar el carrusel
    function activateCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5000, // Intervalo de cambio de diapositivas en milisegundos (5 segundos en este caso)
            pause: "hover" // Pausa el carrusel al pasar el mouse sobre él
        });
    }

    // Activa el carrusel para cada sección de la galería
    activateCarousel("capitulo1-carousel");
    activateCarousel("capitulo2-carousel");
    activateCarousel("capitulo3-carousel");
    // Continúa con el resto de las secciones...

    // Función para mostrar u ocultar el carrusel de videos
    function toggleVideoCarousel(carouselId) {
        const carouselVideos = document.getElementById(carouselId).querySelectorAll(".carousel-video");
        carouselVideos.forEach(video => {
            // Detiene la reproducción de los videos cuando se ocultan
            if (video.classList.contains("active")) {
                video.pause();
            }
        });
    }

    // Evento al cambiar de diapositiva en el carrusel
    document.querySelectorAll(".carousel").forEach(carousel => {
        carousel.addEventListener("slide.bs.carousel", function() {
            toggleVideoCarousel(this.id);
        });
    });
});
