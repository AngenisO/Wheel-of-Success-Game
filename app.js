const btn_reset = document.getElementsByClassName('btn__reset');
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0; 
const phrases = [
    'who stole cookie from cookie jar',
    'happy wife happy life',
    'bigger you are harder you fall',
    'im batman',
    'costco keeps the cost low'
];

btn_reset.addEventListener('clicked', () => {
    if(btn_reset.textContent == 'Start Game'){
        overlay.style.display = 'none';
    }else if (btn_reset.textContent == 'Replay'){
        overlay.style.display = "none";
    }

});
