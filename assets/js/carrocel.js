const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Clona as primeiras e últimas imagens para criar o efeito de rolagem infinita
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

carouselImages.appendChild(firstClone);
carouselImages.insertBefore(lastClone, images[0]);

// Atualiza o carrossel para o índice atual
function updateCarousel() {
    const width = images[0].clientWidth;
    carouselImages.style.transition = 'transform 0.5s ease-in-out';
    carouselImages.style.transform = `translateX(-${(currentIndex + 1) * width}px)`;
}

// Move para a próxima imagem
function nextImage() {
    const width = images[0].clientWidth;
    if (currentIndex >= images.length - 1) {
        currentIndex = 0;
        carouselImages.style.transition = 'none'; // Remove a transição para o loop
        carouselImages.style.transform = `translateX(-${width}px)`;
        setTimeout(() => {
            carouselImages.style.transition = 'transform 0.5s ease-in-out';
            nextImage();
        }, 50);
    } else {
        currentIndex++;
        updateCarousel();
    }
}

// Move para a imagem anterior
function prevImage() {
    const width = images[0].clientWidth;
    if (currentIndex <= 0) {
        currentIndex = images.length - 1;
        carouselImages.style.transition = 'none'; // Remove a transição para o loop
        carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
        setTimeout(() => {
            carouselImages.style.transition = 'transform 0.5s ease-in-out';
            prevImage();
        }, 50);
    } else {
        currentIndex--;
        updateCarousel();
    }
}

// Adiciona eventos aos botões
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Inicializa o carrossel na posição correta
window.addEventListener('load', () => {
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${width}px)`;
});

// Atualiza o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);