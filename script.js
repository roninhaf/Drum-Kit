"use strict";

function playSoundAndAnim(event) {
    
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio){return;};

    const key = document.querySelector(`div[data-key="${event.keyCode}"]`).classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
}

function removeAnim(event) {
    
    if(event.propertyName!=='transform') {return};
    event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key')).forEach(key => key.addEventListener('transitionend',removeAnim));

window.addEventListener('keydown',playSoundAndAnim);
