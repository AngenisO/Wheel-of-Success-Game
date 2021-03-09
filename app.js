const btn_reset = document.querySelector('.btn__reset');
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

btn_reset.addEventListener('click', () => {
    if(btn_reset.textContent == 'Start Game'){
        overlay.style.display = 'none';
    }if (btn_reset.textContent == 'Replay'){
        overlay.style.display = "none";
    }

});

function getRandomPhraseAsArray(arr){
    let randomNum = Math.floor(Math.random() * arr.length);
        return arr[randomNum];
};

const addPhraseToDisplay  = (arr) => {
    const listItem = document.querySelector('#phrase ul');
    for(let i = 0; i < listItem.length; i++){
        let li = document.createElement('li');
        li.textContent = arr[i];
        listItem.appendChild('li');
    }if (arr[i] == ""){
        li.classList.add('space');
    } else {
        li.classList.add('letter');
    }

};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

const checkLetter = (qwerty) => {
    let letter = document.querySelectorAll('.letter');
    let match = null;
    for(let i = 0; i < letter.length; i++){
        if(qwerty === letter[i].textContent.toLowerCase()){
            letter[i].classList.add("show");
            match = qwerty;
        }
    } return match;
}