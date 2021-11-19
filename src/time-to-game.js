const time = document.querySelector('.time-to-game-changed');

export function add(){
    time.innerHTML = +time.innerHTML + 1;
    if(time.innerHTML == 20 || time.innerHTML == 21){
        time.innerHTML = 0;
    }
}
export function dec(){
    time.innerHTML -= 1;
    if(time.innerHTML == 0 || time.innerHTML == -1){
        time.innerHTML = 20;
    }
}
