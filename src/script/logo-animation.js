export const initLogoAnimation = () => {
    const headerLogoContainer = document.getElementById('header-logo');
    if (!headerLogoContainer) return;

    const logoImg = headerLogoContainer.querySelector('img');
    if (!logoImg) return;

    let ticking = false;

    const updateLogo = () => {
        const isHomePage = window.location.pathname === '/';
        const scrollY = window.scrollY;
        const threshold = window.innerHeight * 0.01;

        // Remove all classes first
        logoImg.classList.remove('hero-logo-fixed', 'hero-logo-shrunk');
        headerLogoContainer.style.opacity = '1';

        if (!isHomePage || scrollY > threshold) {
            // Normal state: logo in header, no special class
            logoImg.style.position = '';
            logoImg.style.top = '';
            logoImg.style.left = '';
            logoImg.style.zIndex = '';
            logoImg.style.transform = '';
            logoImg.style.width = '';
            return;
        }

        // Animation in progress
        logoImg.classList.add('hero-logo-fixed');

        // Decide if we need to finish the shrink
        const progress = scrollY / threshold;
        if (progress > 0.95) { // Near the end, snap to final position
            logoImg.classList.add('hero-logo-shrunk');
        }
    };

    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateLogo();
                ticking = false;
            });
            ticking = true;
        }
    };

    // Initial check
    updateLogo();

    // Listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateLogo);
    window.addEventListener('popstate', updateLogo);

    // Cleanup
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateLogo);
        window.removeEventListener('popstate', updateLogo);

        logoImg.classList.remove('hero-logo-fixed', 'hero-logo-shrunk');
        logoImg.style.cssText = ''; // reset all inline styles
    };
};