"use strict";
// const timerId = setTimeout( function () {
//      console.log('hello');
// },2000);

const btn = document.querySelector('.btn');
let timerId,
    i = 0; 
function myAnimation (){
    const elem =  document.querySelector('.box');
    let pos1 = 0,
        pos2 = 0;
     const id = setInterval(frame, 10);
     function frame (){
         if (pos2 == 300 &&  pos1 == 300) {
            clearInterval(id);
         } else if (pos1 == 300  ){
            pos2 ++;
           elem.style.left = pos2 + "px";
         
         } else if (pos2 == 0) {
             pos1++;
             elem.style.top = pos1 + "px";
         }
    }

}

btn.addEventListener('click', myAnimation);

const now = new Date();
console.log(now);