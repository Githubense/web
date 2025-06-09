// This file contains JavaScript functions specifically for handling animations.
// It manages the timing and triggering of animations defined in the CSS 
// when users hover over the bento grid elements.

document.addEventListener('DOMContentLoaded', () => {
    const bentoItems = document.querySelectorAll('.bento-item');

    bentoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('expand');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('expand');
        });
    });
});