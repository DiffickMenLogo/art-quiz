(()=>{"use strict";const e=document.querySelector(".checker");let n=!0;const t=document.querySelector(".time-to-game-changed"),c=document.querySelector(".add-btn"),r=document.querySelector(".dec-btn");c.addEventListener("click",(function(){t.innerHTML=+t.innerHTML+1,20!=t.innerHTML&&21!=t.innerHTML||(t.innerHTML=0)})),r.addEventListener("click",(function(){t.innerHTML-=1,0!=t.innerHTML&&-1!=t.innerHTML||(t.innerHTML=20)})),document.querySelector(".checker").addEventListener("click",(function(){e.classList.toggle("active"),n=!n})),document.querySelector(".progress").addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, #82CFD0 0%, #82CFD0 ${e}%, #fff ${e}%, white 100%)`}))})();