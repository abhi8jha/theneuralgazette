// Small script to highlight the active navigation link.
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.site-nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Create a URL object to easily access the pathname
        const linkUrl = new URL(link.href);
        const linkPath = linkUrl.pathname;

        // Remove existing 'active' class
        link.classList.remove('active');

        // Check if the link's pathname is a substring of the current path
        // This handles cases like '/articles/' and '/articles/sample-article.html'
        if (currentPath.startsWith(linkPath) && linkPath !== '/') {
             // Handle the case where the link is for the home page.
             if(linkPath === '/index.html' && currentPath === '/index.html'){
                link.classList.add('active');
             } else if (linkPath !== '/index.html') {
                link.classList.add('active');
             }
        }
    });

    // Explicitly set home as active if on the root page
    if (currentPath === '/' || currentPath === '/index.html') {
        const homeLink = document.querySelector('.site-nav a[href$="index.html"]');
        if (homeLink) {
            // Deactivate others first
            navLinks.forEach(link => link.classList.remove('active'));
            homeLink.classList.add('active');
        }
    }
});
