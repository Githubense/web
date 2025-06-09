// This file contains the main JavaScript logic for the portfolio website.
// It handles the loading of content, event listeners for user interactions,
// and any dynamic behavior required for the bento grid elements.

let hoverTimeout;
let isExpanded = false;

document.addEventListener('DOMContentLoaded', () => {
    const bentoItems = document.querySelectorAll('.bento');
    const backgroundOverlay = document.querySelector('.background-overlay');
    const body = document.body;

    console.log('Found bento items:', bentoItems.length);
    console.log('Background overlay:', backgroundOverlay);

    bentoItems.forEach((item, index) => {
        console.log(`Setting up bento item ${index}:`, item.className);
        
        // Hover enter with delay
        item.addEventListener('mouseenter', () => {
            if (isExpanded) return;
            
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                expandBentoItem(item);
            }, 800); // 800ms delay before expansion
        });

        // Hover leave - cancel expansion
        item.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
            if (!isExpanded) return;
            
            // Small delay before collapsing to prevent accidental closure
            setTimeout(() => {
                if (!item.matches(':hover') && !item.querySelector('.bento-details:hover')) {
                    collapseBentoItem(item);
                }
            }, 200);
        });

        // Click to expand (mobile/tablet support)
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Bento item clicked:', item.className);
            if (isExpanded && item.classList.contains('expanded')) {
                collapseBentoItem(item);
            } else if (!isExpanded) {
                expandBentoItem(item);
            }
        });

        // Prevent collapse when interacting with detailed content
        const detailedContent = item.querySelector('.bento-details');
        if (detailedContent) {
            detailedContent.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimeout);
            });

            detailedContent.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!item.matches(':hover')) {
                        collapseBentoItem(item);
                    }
                }, 200);
            });
        }
    });

    // Close on background overlay click
    if (backgroundOverlay) {
        backgroundOverlay.addEventListener('click', () => {
            const expandedItem = document.querySelector('.bento.expanded');
            if (expandedItem) {
                collapseBentoItem(expandedItem);
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isExpanded) {
            const expandedItem = document.querySelector('.bento.expanded');
            if (expandedItem) {
                collapseBentoItem(expandedItem);
            }
        }
    });

    function expandBentoItem(item) {
        if (isExpanded) return;
        
        console.log('Expanding bento item:', item.className);
        isExpanded = true;
        
        // Add expanded class
        item.classList.add('expanded');
        
        // Show background overlay
        if (backgroundOverlay) {
            backgroundOverlay.classList.add('active');
        }
        
        // Dim other items
        bentoItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.3';
                otherItem.style.filter = 'blur(2px)';
                otherItem.style.pointerEvents = 'none';
            }
        });

        // Prevent body scrolling
        body.style.overflow = 'hidden';

        // Animate skill tags with staggered delay
        const skillTags = item.querySelectorAll('.skill-tags span');
        skillTags.forEach((tag, index) => {
            tag.style.setProperty('--i', index);
        });

        // Trigger entrance animations for content
        setTimeout(() => {
            const contentItems = item.querySelectorAll('.project, .education-item, .achievement, .cert-item, .app-item, .contact-item, .design-item');
            contentItems.forEach((contentItem, index) => {
                setTimeout(() => {
                    contentItem.style.opacity = '1';
                    contentItem.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 200);
    }

    function collapseBentoItem(item) {
        if (!isExpanded) return;
        
        console.log('Collapsing bento item:', item.className);
        isExpanded = false;
        
        // Remove expanded class
        item.classList.remove('expanded');
        
        // Hide background overlay
        if (backgroundOverlay) {
            backgroundOverlay.classList.remove('active');
        }
        
        // Restore other items
        bentoItems.forEach(otherItem => {
            otherItem.style.opacity = '';
            otherItem.style.filter = '';
            otherItem.style.pointerEvents = '';
        });

        // Restore body scrolling
        body.style.overflow = '';

        // Reset content animations
        const contentItems = item.querySelectorAll('.project, .education-item, .achievement, .cert-item, .app-item, .contact-item, .design-item');
        contentItems.forEach(contentItem => {
            contentItem.style.opacity = '';
            contentItem.style.transform = '';
        });
    }

    // Initialize portfolio
    console.log('Portfolio initialized');
    
    // Setup touch support for mobile devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Initialize items as visible (remove loading state)
    setTimeout(() => {
        bentoItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
        body.classList.remove('loading');
    }, 100);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
});

// Debug function to check if everything is loaded
window.debugPortfolio = function() {
    console.log('Bento items:', document.querySelectorAll('.bento').length);
    console.log('Background overlay:', document.querySelector('.background-overlay'));
    console.log('CSS loaded:', document.styleSheets.length);
};

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);