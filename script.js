// Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
// Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
// Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
// Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.

let myImgs = document.getElementsByClassName(`img-w`)

let imgVisualizzata = 0
let ultimaImg = myImgs.length - 1
let nextImg


   


document.getElementById(`btn-down`).addEventListener(`click`, function(){
    myImgs[imgVisualizzata].classList.remove(`show`)
    if(imgVisualizzata < myImgs.length - 1){
        imgVisualizzata++
    } else{
        imgVisualizzata = 0
    }
    myImgs[imgVisualizzata].classList.add(`show`)
})

document.getElementById(`btn-up`).addEventListener(`click`, function(){
    myImgs[imgVisualizzata].classList.remove(`show`)

    if(imgVisualizzata == 0){
        console.log(`sei sulla 0`)
        imgVisualizzata = ultimaImg
    }else{
        console.log(`non sei sulla 0`)
        imgVisualizzata--
    }
    myImgs[imgVisualizzata].classList.add(`show`)

})



