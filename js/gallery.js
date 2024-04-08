const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
    image.addEventListener('click', () => {
        // You can add code here to handle what happens when an image is clicked, e.g., opening it in a modal.
        console.log('Image clicked:', image.alt);
    });
});