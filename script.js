document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const closeLetter = document.getElementById("closeLetter");

    // Klikkaa kirjekuorta -> Näytä kirje
    envelope.addEventListener("click", function () {
        letter.style.display = "flex";
    });

    // Klikkaa sulkupainiketta -> Piilota kirje
    closeLetter.addEventListener("click", function () {
        letter.style.display = "none";
    });
    
    // Sulje kirje myös kun klikataan selaimen takaisinpainiketta
    window.addEventListener("popstate", function() {
        letter.style.display = "none";
    });
    
    // Kun kirje avataan, lisää historia-entry
    envelope.addEventListener("click", function() {
        history.pushState({letterOpen: true}, "");
    });
});