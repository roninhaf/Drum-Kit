function playSoundAndAnim(a) {
    
    const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
    if(!audio){return;};

    const key = document.querySelector(`div[data-key="${a.keyCode}"]`).classList.add('playing');
    
    audio.currentTime = 0;
    audio.play();
}

function removeAnim(a) {
    
    if(a.propertyName!=='transform') {return};
    a.target.classList.remove('playing');
}

console.log(Array.from(document.querySelectorAll('.key')));
const keys = Array.from(document.querySelectorAll('.key')).forEach(a=>a.addEventListener('transitionend',removeAnim));

window.addEventListener('keydown',playSoundAndAnim);
