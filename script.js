function removePlayingClass(a) {
    if(a.propertyName!=='transform') {return;};console.log(a.target.tagName);
    a.target.classList.remove('playing');
}

function playsound(a) {
    const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${a.keyCode}"]`);
    if(!audio){return};
    //console.log(key);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

const keys = Array.from(document.querySelectorAll('.key'));console.log(keys);
keys.forEach(a => a.addEventListener('transitionend', removePlayingClass));

window.addEventListener('keydown',playsound);
