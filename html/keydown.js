import { words } from './svenska-ord.js'
const viewContainer = document.querySelector('.view-container')
const playContainer = document.querySelector('.play-container')
const gamerContainer = document.querySelector('.gamer-container')
const hangMan = document.querySelector('.hangman')
const scaffold = document.querySelector('#scaffold')
const head = document.querySelector('#head')
const body = document.querySelector('#body')
const arms = document.querySelector('#arms')
const legs = document.querySelector('#legs')
const playerInput = document.querySelector('#player-input')
const difficulty = document.querySelector('.difficulty')
const normalBtn = document.querySelector('.normal')
const theWord = document.querySelector('#the-word')
const guesses = document.querySelector('#guesses')
const underline = document.querySelector('.underline')


normalBtn.addEventListener('click', startGame);
const playerNameContainer = document.createElement('div');
playerNameContainer.className = 'page';
playerNameContainer.style.display = 'none';
gamerContainer.insertAdjacentElement('afterend', playerNameContainer);

function startGame() {

    const playerName = playerInput.value;
    if (playerName.trim().length < 2) {
        alert('Vänligen ange ditt namn innan du startar spelet. Minst två tecken.');
        return;
    }
    playContainer.style.opacity = '0';
    playerNameContainer.innerHTML = `<p id="player-name">Spelare: ${playerName}</p>`;
    playerNameContainer.style.display = 'flex';

}