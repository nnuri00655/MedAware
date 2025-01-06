document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.quote-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const sliderContainer = document.querySelector('.slider-container');

    let currentSlide = 0;

    function updateSlider() {
        const offset = -currentSlide * sliderContainer.offsetWidth;
        sliderContainer.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);
    updateSlider();
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("qr-modal");
    const qrCode = document.getElementById("qr-code");
    const closeButton = document.querySelector(".close-button");

    // Buttons to trigger the modal
    const appStoreButton = document.querySelector('a[href="#"]:first-child img');
    const googlePlayButton = document.querySelector('a[href="#"]:nth-child(2) img');

    // QR Code images
    const qrCodes = {
        appStore: "images/appstore-qr.png",
        googlePlay: "images/googleplay-qr.png",
    };

    // Open modal and set the QR code image
    const openModal = (qrImageSrc) => {
        qrCode.src = qrImageSrc;
        modal.style.display = "block";
    };

    appStoreButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(qrCodes.appStore);
    });

    googlePlayButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(qrCodes.googlePlay);
    });

    // Close the modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});