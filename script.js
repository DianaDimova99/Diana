console.log("JavaScript is successfully linked!WoooW");

// Select the image container element
const imageContainer = document.querySelector('.image-container');

// Add event listener for mouse enter (hover)
imageContainer.addEventListener('mouseenter', function() {
    // Add a class that scales the image when hovered
    imageContainer.classList.add('pop-out');
});

// Add event listener for mouse leave (when the mouse leaves the image)
imageContainer.addEventListener('mouseleave', function() {
    // Remove the pop-out class when hover ends
    imageContainer.classList.remove('pop-out');
});
