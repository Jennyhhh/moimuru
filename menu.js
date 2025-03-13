document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("valikkomenu");
    const menuIcon = document.querySelector(".valikonkuva img");
    
    // Aluksi oletamme, että fontit eivät ole vielä latautuneet
    document.body.classList.add('fonts-not-loaded');

    // Tarkista fontit
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
            // Fontit ladattu, varmista että ne näkyvät oikein
            document.body.classList.remove('fonts-not-loaded');
            document.body.classList.add('fonts-loaded');
        });
    } else {
        // Fallback vanhemmille selaimille
        setTimeout(function() {
            document.body.classList.remove('fonts-not-loaded');
            document.body.classList.add('fonts-loaded');
        }, 1000); // Odota sekunnin verran
    }
    //Klikkaa valikon kuvaketta -> Näytä valikko

    function toggleMenu() {
        menu.classList.toggle("active");
    }

    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    }    
    
    // Estä iOS-zoomaus
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Android-laitteiden bugit
    const isAndroid = /android/i.test(navigator.userAgent);
    if (isAndroid) {
        // Android-kohtaiset korjaukset
        document.querySelectorAll('button').forEach(function(button) {
            button.style.minHeight = '48px';
        });
    }

    
});