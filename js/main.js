// This file contains the main JavaScript logic for the portfolio website.
// It handles the loading of content, event listeners for user interactions,
// and any dynamic behavior required for the bento grid elements.

document.addEventListener('DOMContentLoaded', () => {
    // Load portfolio data from JSON file
    fetch('data/portfolio.json')
        .then(response => response.json())
        .then(data => {
            const portfolioContainer = document.getElementById('portfolio-container');
            data.portfolioItems.forEach(item => {
                const bentoElement = createBentoElement(item);
                portfolioContainer.appendChild(bentoElement);
            });
        })
        .catch(error => console.error('Error loading portfolio data:', error));

    // Function to create a bento grid element
    function createBentoElement(item) {
        const bento = document.createElement('div');
        bento.classList.add('bento');
        bento.style.backgroundImage = `url(${item.image})`;
        
        const banner = document.createElement('div');
        banner.classList.add('banner');
        banner.textContent = item.title;

        bento.appendChild(banner);
        bento.addEventListener('mouseenter', () => {
            bento.classList.add('hover');
        });
        bento.addEventListener('mouseleave', () => {
            bento.classList.remove('hover');
        });

        return bento;
    }
});