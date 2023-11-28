import { words } from './svenska-ord.js'
// const viewContainer = document.querySelector('.view-container')
// const playContainer = document.querySelector('.play-container')
// const gamerContainer = document.querySelector('.gamer-container')
const hangMan = document.querySelector('.hangman')
const hangManHeader = document.querySelector('.hang-man-header')
const hideOnPlay = document.querySelector('#hide-on-play')
// const scaffold = document.querySelector('#scaffold')
// const head = document.querySelector('#head')
// const body = document.querySelector('#body')
// const arms = document.querySelector('#arms')
// const legs = document.querySelector('#legs')
// const playerInput = document.querySelector('#player-input')
const difficulty = document.querySelector('.difficulty')
// const normalBtn = document.querySelector('.normal')
// const theWord = document.querySelector('#the-word')

const underline = document.querySelector('.underline')

// const viewContainer = document.querySelector('.view-container')
// const playContainer = document.querySelector('.play-container')
// const gamerContainer = document.querySelector('.gamer-container')
const highScoreContainer = document.querySelector('.high-score-container')
// const hangMan = document.querySelector('.hangman')
const scaffold = document.querySelector('#scaffold')
const head = document.querySelector('#head')
const body = document.querySelector('#body')
const arms = document.querySelector('#arms')
const legs = document.querySelector('#legs')
const ground = document.querySelector('#ground')
// const playerInput = document.querySelector('#player-input')
// const difficulty = document.querySelector('.difficulty')
// const normalBtn = document.querySelector('.normal')
// const theWord = document.querySelector('#the-word')
// const guesses = document.querySelector('#guesses')
// const underline = document.querySelector('.underline')
const hidden = document.querySelector('.hidden')
const gameOverPage = document.querySelector('.game-over-container')
const guessAmount = document.querySelector('.guess-amount')
const winLose = document.querySelector('.win-lose')
const highScoreBtn = document.querySelector('.highscore-btn')
const gameViewBtn = document.querySelector('.gameview-btn')
const errorMessage = document.querySelector('#error-message');
let gameOver = false;


const minWordLength = words.filter(word => word.length >= 10);
const theWord = document.querySelector('#the-word');
const randomIndex = Math.floor(Math.random() * minWordLength.length);
export const randomWord = minWordLength[randomIndex].toUpperCase();
const guesses = document.querySelector('#guesses')
// const guesses = document.querySelector('#guesses')

let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;
let keyDownCount = 0

function generateWord() {
	let hiddenLetters = Array(randomWord.length).fill('_');

	theWord.innerText = hiddenLetters.join(' ');

	document.addEventListener('keydown', (event) => {

		if (gameOver) {
            return;
        }
		
		const pressedKey = event.key.toUpperCase();

		if	(/^[A-ZÅÄÖ]$/.test(pressedKey)) {
			guesses.innerText += `${pressedKey}-`;
			keyDownCount ++
			guessAmount.innerHTML = `<p class="guess-amount">Du gissade ${keyDownCount} gånger.</p>`; // - visar antalet gissningar
			
			

			if (randomWord.includes(pressedKey)) {
			
				randomWord.split('').forEach((char, index) => {
					if (char === pressedKey) {
						hiddenLetters[index] = pressedKey;
					}
				});
				theWord.innerText = hiddenLetters.join(' ');

				if (!hiddenLetters.includes('_')) {
					endGame(true);
				}
			} else {
				revealHangmanPart();
				incorrectGuesses++;

				if (incorrectGuesses >= maxIncorrectGuesses) {
					endGame(false);
				}
			}
		} else {
			console.log('Invalid input. Only alphabet letters are allowed.');
		}
	});
}

const playContainer = document.querySelector('.play-container')
const normalBtn = document.querySelector('.normal')
const playerInput = document.querySelector('#player-input')
const gamerContainer = document.querySelector('.gamer-container')

//döljer välj svårighetsgrad meddelande
difficulty.style.display = 'none'

normalBtn.addEventListener('click', startGame);

// spelet startar med Enter. Behöver ändras vid flera svårighetsgrader
playerInput.addEventListener('keypress', (event) =>{ 
	if (event.key === "Enter")
	difficulty.style.display ='block'
});

const playerNameContainer = document.createElement('div');
playerNameContainer.className = 'page';
playerNameContainer.style.display = 'none';
gamerContainer.insertAdjacentElement('afterend', playerNameContainer);

function startGame() {

	const playerName = playerInput.value;
	if (playerName.trim().length < 2) {
		errorMessage.textContent = 'Skriv in ditt namn. Minst två bokstäver.';
		return;
	}

	hideOnPlay.style.display = 'none';

	fullBody.forEach(element => {
		element.style.display = "none"
	})
	hangManHeader.innerHTML = `<h1 class="hang-man-header">Spelare: ${playerName}</h1>`;
	hangManHeader.style.display = 'block';
	

	generateWord()
}

//Listas med alla figurens delar
const fullBody = [ground, scaffold, head, body, arms, legs]

function revealHangmanPart() {
	const hangmanParts = [ground, scaffold, head, body, arms, legs];

	const hiddenPart = hangmanParts.find(part => part.style.display === 'none');

	if (hiddenPart) {
		hiddenPart.style.display = 'block';
	}
}

function endGame(isWin) {
	gameOver = true;

	if (isWin) {
		console.log('Congratulations! You win!');
		winLose.innerHTML = `<h2 class="win-lose">Grattis! Du vann!</h2>`;
		gameOverPage.style.display = 'flex';
		playContainer.style.display = 'none';
		gamerContainer.style.display = 'none';


	} else {
		console.log('Sorry! You lose!');
		winLose.innerHTML = `<h2 class="win-lose">Tyvärr! Du förlorade!</h2>`;
		gameOverPage.style.display = 'flex';
		playContainer.style.display = 'none';
		gamerContainer.style.display = 'none';
	}

}

//Togglar High Score och spelarvy
highScoreContainer.style.display = 'none'


highScoreBtn.addEventListener('click', () => {
	if (highScoreContainer.style.display === 'none') {
        highScoreContainer.style.display = 'flex';
		playContainer.style.display = 'none';
		theWord.style.display = 'none'
    } else {
        highScoreContainer.style.display = 'none';
		playContainer.style.display = 'flex';
		theWord.style.display = 'flex'
    }
})

gameViewBtn.addEventListener('click', () => {
	if (playContainer.style.display === 'none') {
        playContainer.style.display = 'flex';
		highScoreContainer.style.display = 'none';
		theWord.style.display = 'flex'
    } else {
        playContainer.style.display = 'none';
		highScoreContainer.style.display = 'flex';
		theWord.style.display = 'none'
    }
})
