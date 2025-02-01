document.addEventListener("DOMContentLoaded", function () {
    // Create a temporary image to preload the background
    const bgImage = new Image();
    bgImage.src = './assets/bg_img.jpg'; // Path to your background image

    bgImage.onload = function () {
        // Hide the loader after the image is loaded
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
    };
});