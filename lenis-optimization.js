/**
 * AOYOU Logic Website - Lenis Smooth Scroll Optimization
 * Usage: Add before </body>: <script src="lenis-optimization.js"></script>
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Check if Lenis is loaded
    if (typeof Lenis === 'undefined') {
        console.error('[Lenis] Library not found. Please include Lenis script first.');
        return;
    }
    
    // Device detection
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Performance optimization - disable heavy animations on mobile
    if (isMobile || prefersReducedMotion) {
        const heavyElements = {
            '#particle-canvas': 'hide',
            '#stars-container': 'hide', 
            '.mouse-trail-container': 'hide',
        };

        Object.entries(heavyElements).forEach(([selector, action]) => {
            document.querySelectorAll(selector).forEach(el => {
                if (action === 'hide') el.style.display = 'none';
            });
        });
        console.log('[Performance] Mobile mode - heavy animations disabled');
    }
    
    // Initialize Lenis smooth scroll - simplified for better performance
    const lenis = new Lenis({
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    // GSAP ScrollTrigger integration (if loaded)
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        lenis.on('scroll', ScrollTrigger.update);
        
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
    }

    // Start Lenis
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update scroll progress bar
    lenis.on('scroll', (data) => {
        const progressEl = document.getElementById('scroll-progress');
        if (progressEl) {
            progressEl.style.width = Math.round(data.progress * 100) + '%';
        }
    });

    // Navbar scroll effect
    lenis.on('scroll', ({ scroll }) => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (scroll > 100) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        }
    });

    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
                
                // Close mobile menu
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Initialize on page load
    window.addEventListener('load', () => {
        lenis.scrollTo(0, { immediate: true });
        console.log('[Lenis] Smooth scroll initialized successfully');
    });
    
    console.log('[Lenis] Optimization loaded');
});
