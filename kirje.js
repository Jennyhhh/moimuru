document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const closeLetter = document.getElementById("closeLetter");
    
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

    // Klikkaa kirjekuorta -> Näytä kirje
    envelope.addEventListener("click", function (e) {
        e.preventDefault();
        openLetter();
    });
    
    // Touch-event kirjekuorelle (parempi mobiilille)
    envelope.addEventListener("touchend", function (e) {
        e.preventDefault();
        // Varmista ettei tämä laukaise myös click-eventtiä
        setTimeout(openLetter, 10);
    });

    function openLetter() {
        letter.style.display = "flex";
        // Estä scrollaus kun modal on auki
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    }

    // Klikkaa sulkupainiketta -> Piilota kirje
    closeLetter.addEventListener("click", function () {
        closeLetterId();
    });

    // Sulje kirje myös kun klikataan taustan ulkopuolella
    letter.addEventListener("click", function(e) {
        if (e.target === letter) {
            closeLetterId();
        }
    });
    
    // Touch-eventit sulkemiseen
    closeLetter.addEventListener("touchend", function(e) {
        e.preventDefault();
        setTimeout(closeLetterId, 10);
    });
    
    function closeLetterId() {
        letter.style.display = "none";
        // Palauta scrollaus
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
    
    // Lisää touch-eventit mobiilille
    envelope.addEventListener("touchstart", function() {
        envelope.classList.add('touch-active');
    });
    
    envelope.addEventListener("touchend", function() {
        envelope.classList.remove('touch-active');
    });
    
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