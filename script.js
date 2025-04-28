// script.js

document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');
    const header = document.querySelector('header');
    const headerTitle = header.querySelector('h1'); // Fånga <h1> direkt
    const footerLinks = document.querySelectorAll('footer a');

    // Fade-in för sektioner
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    panels.forEach(panel => {
        observer.observe(panel);
    });

    // Header scroll-effekt + h1-förminskning
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            headerTitle.classList.add('smaller'); // Lägg till .smaller på h1
        } else {
            header.classList.remove('scrolled');
            headerTitle.classList.remove('smaller'); // Ta bort .smaller från h1
        }
    });

    // Highlighta aktiv länk i footern
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerLinks.forEach(link => link.classList.remove('active'));

                const id = entry.target.getAttribute('id');
                footerLinks.forEach(link => {
                    if (link.getAttribute('href') && link.getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });

    panels.forEach(panel => {
        sectionObserver.observe(panel);
    });
});
