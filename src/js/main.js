// get all keys (pegar todas teclas)
let keys = document.querySelectorAll('.key');

// play notes (tocar notas)
function playNotes(event) {

    let audioKeyCode = getKeyCode(event);

    // get type or pressed key (pegar tecla pressionada)
    const key = document.querySelector(`.key[data-key= "${audioKeyCode}"]`);

    // if key exists
    const cantFoundAnyKey = !key;

    if (cantFoundAnyKey) {
        return;
    }
    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === 'keydown';
    if (isKeyboard) {
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

function addPlayingClass(key){
    key.classList.add('playing');
}

function removePlayingClass(event){
   event.target.classList.remove('playing');
}

// click with mouse (clique do mouse)
keys.forEach(function (key) {
    key.addEventListener('click', playNotes);
    key.addEventListener('transitionend',removePlayingClass)
});
// keyboard type (clique da tecla)
window.addEventListener('keydown', playNotes);
