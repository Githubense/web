// This file contains JavaScript functions specifically for handling animations.
// It manages the timing and triggering of animations defined in the CSS 
// when users hover over the bento grid elements.

document.addEventListener('DOMContentLoaded', () => {
    const bentoItems = document.querySelectorAll('.bento');

    console.log('Animations.js loaded, found bento items:', bentoItems.length);

    // Initialize items as hidden for loading animation
    bentoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.setProperty('--index', index);
    });

    // Smooth loading animation
    setTimeout(() => {
        bentoItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'all 0.6s ease-out';
            }, index * 100);
        });
    }, 100);

    // Enhanced hover effects
    bentoItems.forEach(item => {
        const banner = item.querySelector('.banner');
        const background = item.querySelector('.bento-background');
        
        if (banner && background) {
            item.addEventListener('mouseenter', () => {
                if (!item.classList.contains('expanded')) {
                    banner.style.transform = 'translateY(-5px)';
                    banner.style.transition = 'all 0.3s ease-out';
                    background.style.transform = 'scale(1.05)';
                    background.style.transition = 'all 0.3s ease-out';
                }
            });

            item.addEventListener('mouseleave', () => {
                if (!item.classList.contains('expanded')) {
                    banner.style.transform = '';
                    background.style.transform = '';
                }
            });
        }
    });

    // Add staggered animation delays for mobile
    if (window.innerWidth <= 768) {
        bentoItems.forEach((item, index) => {
            item.style.setProperty('--mobile-delay', '0.05s');
            item.style.setProperty('--index', index);
        });
    }
});

// Intersection Observer for content animations
const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements for scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the main content to load
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.project, .education-item, .achievement, .cert-item, .app-item, .contact-item, .design-item');
        console.log('Setting up content observer for', animatedElements.length, 'elements');
        animatedElements.forEach(el => {
            contentObserver.observe(el);
        });
    }, 500);
});

// Handle window resize for responsive animations
window.addEventListener('resize', () => {
    const bentoItems = document.querySelectorAll('.bento');
    if (window.innerWidth <= 768) {
        bentoItems.forEach((item, index) => {
            item.style.setProperty('--mobile-delay', '0.05s');
            item.style.setProperty('--index', index);
        });
    }
});

// Export for debugging
window.animationsDebug = function() {
    console.log('Animation system status:');
    console.log('Bento items found:', document.querySelectorAll('.bento').length);
    console.log('Animated elements:', document.querySelectorAll('.project, .education-item, .achievement, .cert-item, .app-item, .contact-item').length);
    console.log('Content observer active:', !!contentObserver);
};