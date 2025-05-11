document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    
    let currentIndex = 0;
    const totalImages = images.length;

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Botón para ir a la imagen anterior
    scrollLeftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1; // Vuelve a la última imagen
        }
        updateCarousel();
    });

    // Botón para ir a la imagen siguiente
    scrollRightBtn.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve a la primera imagen
        }
        updateCarousel();
    });
});