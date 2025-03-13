document.addEventListener("DOMContentLoaded", function () {
    const kehukuva = document.querySelector(".Kehusimulaattori img");
    
    const aaniLista = [
        'äänet/ääni1.mp3',
        'äänet/ääni2.mp3',
        'äänet/ääni3.mp3',
        'äänet/ääni4.mp3',
        'äänet/ääni5.mp3',
        'äänet/ääni6.mp3',
        'äänet/ääni7.mp3',
        'äänet/ääni8.mp3',
        'äänet/ääni9.mp3',
        'äänet/ääni10.mp3',
        'äänet/ääni11.mp3',
    ];
    
    function toistaAani() {
        const satunnainenIndeksi = Math.floor(Math.random() * aaniLista.length);
        const satunnainenAani = new Audio(aaniLista[satunnainenIndeksi]);
        satunnainenAani.play();
    }

    if (kehukuva) {
        kehukuva.addEventListener("click", toistaAani);
    } 
});