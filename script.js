document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Toggle navbar visibility
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Highlight active section in navbar on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let header = document.querySelector('header');
        let headerHeight = header.offsetHeight; // Consider header height for sticky behavior

        sections.forEach(sec => {
            let sectionId = sec.getAttribute('id');
            let sectionOffset = sec.offsetTop - headerHeight;
            let sectionHeight = sec.offsetHeight;

            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href="#' + sectionId + '"]').classList.add('active');
                
                              if (h2Element) {
                    h2Element.classList.add('show-animate');
                }
            } else {
                                if (h2Element) {
                    h2Element.classList.remove('show-animate');
                }
            }
        });
        
        // Toggle sticky class for header
        header.classList.toggle('sticky', scrollPosition > 100);
        
        // Close the navbar when scrolling
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


   