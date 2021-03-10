const btn_reset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const heartLive = document.querySelectorAll('.tries')[0];
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
    }else if (btn_reset.textContent == 'Replay'){
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

const checkLetter = (clickBtn) => {
    let letter = document.querySelectorAll('.letter');
    let match = null;
    for(let i = 0; i < letter.length; i++){
        if(clickBtn === letter[i].textContent.toLowerCase()){
            letter[i].classList.add("show");
            match = clickBtn;
        }
    } return match;
};


const missGuess = () => {
    const heartImg = heartLive.firstElementChild;
    heartImg.src = "images/lostHeart.png";
    heartImg.className = "lost";
    missed+= 1 ;
};

qwerty.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        e.target.classList.add('chosen');
        e.target.setAttribute('disabled', true);
        let checked = checkLetter(e.target.textContent);
        console.log(checked);
    }else if (checked === null){
        missed += 1;
        heartLive[missed-1].setAttribute("src", "images/lostHeart.png");
    }

});

function endGame (result, msg)  {
    overlay.className = result;
    overlay.firstElementChild.textContent = message;
    overlay.lastElementChild.textContent = "New Game";
    overlay.style.display = "block";
};

function checkWin(){
    const letters = document.querySelectorAll(".letter");
    const show = document.querySelectorAll('.show');
    if(letters.length === show.length){
        endGame("win","You Win!");
    } else if (missed => 5){
        endGame('lose','Sorry, You Lose!')
    }
};
