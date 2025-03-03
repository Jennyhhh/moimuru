document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const closeLetter = document.getElementById("closeLetter");

    // Klikkaa kirjekuorta -> Näytä kirje
    envelope.addEventListener("click", function () {
        letter.style.display = "block";
    });

    // Klikkaa sulkupainiketta -> Piilota kirje
    closeLetter.addEventListener("click", function () {
        letter.style.display = "none";
    });
});