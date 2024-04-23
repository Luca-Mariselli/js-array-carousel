// Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
// Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
// Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
// Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.

let myImgs = document.getElementsByClassName(`img-w`)

let imgVisualizzata
let nextImg


document.getElementById(`btn-down`).addEventListener(`click`, function(){
    for(let i = 0; i < myImgs.length; i++){
        const immagine = myImgs[i]
        if(immagine.classList.contains(`show`)){
            immagine.classList.remove(`show`);

            imgVisualizzata = i;
        }
    }

    nextImg = imgVisualizzata + 1;

    if( nextImg >= myImgs.length){
        nextImg = 0
    }

    myImgs[nextImg].classList.add(`show`)   
})

   




