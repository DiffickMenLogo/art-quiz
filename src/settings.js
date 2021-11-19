import { activate } from "./time-game-toglle.js";
import { add, dec } from "./time-to-game.js";
const addBtn = document.querySelector('.add-btn');
const decBtn = document.querySelector('.dec-btn');
addBtn.addEventListener('click',add);
decBtn.addEventListener('click',dec);

const toglleBtn = document.querySelector('.checker');
toglleBtn.addEventListener('click',activate);

const progress = document.querySelector('.progress');
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})