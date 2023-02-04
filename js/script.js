let imgSlider = document.getElementsByClassName('imgSlider');
let etape = 0;
let nbrImg = imgSlider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');
// enlever la class active du container
function enleverAtiveImages() {
    for(let i = 0; i < nbrImg; i++) {
        imgSlider[i].classList.remove('active');
    }
}
// incrémenter l'étape et enlever la class active
suivant.addEventListener('click', function(){
    etape++;
    if(etape>=nbrImg){
        etape = 0;
    }
    enleverAtiveImages();
    imgSlider[etape].classList.add('active');
})
// décrémenter l'étape et enlever la class active
precedent.addEventListener('click', function(){
    etape--;
    if(etape<0){
        etape = nbrImg-1;
    }
    enleverAtiveImages();
    imgSlider[etape].classList.add('active');
})
// faire défiler automatiquement le slider après 5s
setInterval(function(){
    etape++;
    if(etape>=nbrImg){
        etape = 0;
    }
    enleverAtiveImages();
    imgSlider[etape].classList.add('active');
}, 5000)