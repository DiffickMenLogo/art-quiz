const toglleSlider = document.querySelector('.checker');
let checher = true;

export function activate(){
    toglleSlider.classList.toggle('active');
    checher = !checher;
}