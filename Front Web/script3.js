document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".recommendations-slider");
    const prevButton = document.querySelector(".slider-button.prev");
    const nextButton = document.querySelector(".slider-button.next");
    const cards = document.querySelectorAll(".recommendations-card");

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Ширина карточки + расстояние между ними
    const totalCards = cards.length;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < totalCards - 3) { // Отображать максимум 3 карточки одновременно
            currentIndex++;
            updateSliderPosition();
        }
    });
});