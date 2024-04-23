// Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
// Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
// Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
// Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.

let myImgs = document.getElementsByClassName(`img-w`)

let imgVisualizzata

for(let i = 0; i < myImgs.length; i++){
    const immagine = myImgs[i]
    if(immagine.classList.contains(`show`)){
        immagine.classList.remove(`show`);

        imgVisualizzata = i;
    }
}

myImgs[imgVisualizzata+1].classList.add(`show`)



