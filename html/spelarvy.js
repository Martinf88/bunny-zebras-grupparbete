import { words } from './svenska-ord.js'
import { wordReveal } from './game-over.js'
// const viewContainer = document.querySelector('.view-container')
// const playContainer = document.querySelector('.play-container')
// const gamerContainer = document.querySelector('.gamer-container')
const hangMan = document.querySelector('.hangman')
const hangManHeader = document.querySelector('.hang-man-header')
const hideOnPlay = document.querySelector('#hide-on-play')
const forsokIgen = document.querySelector('.forsok-igen')
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
export const highScoreContainer = document.querySelector('.high-score-container')
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
export const highScoreBtn = document.querySelector('.highscore-btn')
export const gameViewBtn = document.querySelector('.gameview-btn')
const errorMessage = document.querySelector('#error-message');
let gameOver = false;


export const theWord = document.querySelector('#the-word');
const guesses = document.querySelector('#guesses')
const minWordLengthHard = words.filter(word => word.length >= 6 && word.length <= 9);
const minWordLength = words.filter(word => word.length >= 10 && word.length <= 14);
const minWordLengthEasy = words.filter(word => word.length >= 15 && word.length <= 19);
const randomIndexHard = Math.floor(Math.random() * minWordLengthHard.length);
const randomIndex = Math.floor(Math.random() * minWordLength.length);
const randomIndexEasy = Math.floor(Math.random() * minWordLengthEasy.length);
export const randomWordHard = minWordLengthHard[randomIndexHard].toUpperCase();
export const randomWord = minWordLength[randomIndex].toUpperCase();
export const randomWordEasy = minWordLengthEasy[randomIndexEasy].toUpperCase();

let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;
let keyDownCount = 0
let pressedKeyList = []

function generateWord(randomWord) {
	let hiddenLetters = Array(randomWord.length).fill('_');

	theWord.innerText = hiddenLetters.join(' ');
	wordReveal.innerText = 'Ordet var: ' + randomWord;

	document.addEventListener('keydown', (event) => {

		if (gameOver) {
            return;
        }
		
		const pressedKey = event.key.toUpperCase();

		console.log(`Lista: ${pressedKeyList}`);
		if (pressedKeyList.includes(pressedKey)){
			
			return
		}
		pressedKeyList.push(pressedKey)
		
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

export const playContainer = document.querySelector('.play-container')
const hardBtn = document.querySelector('.hard')
const normalBtn = document.querySelector('.normal')
const easyBtn = document.querySelector('.easy')
const playerInput = document.querySelector('#player-input')
const gamerContainer = document.querySelector('.gamer-container')

//döljer välj svårighetsgrad meddelande
// difficulty.style.display = 'none'

playerInput.addEventListener('input', function() {
    if (playerInput.value.trim().length < 2) {
        errorMessage.innertext = 'Skriv in ditt namn. Minst två bokstäver.';
        errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort
    } else {
        errorMessage.innerText = '';
        errorMessage.style.display = 'none'; // Dölj felmeddelandet om texten är tillräckligt lång
    }
});

// Lägg till en händelselyssnare på knapparna för att kontrollera om det finns ett felmeddelande innan spelet startar
hardBtn.addEventListener('click', function() {
    if (playerInput.value.trim().length < 2) {
        errorMessage.innerText = 'Skriv in ditt namn. Minst två bokstäver.';
        errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort när användaren försöker starta spelet
    } else {
        errorMessage.innerText = '';
        errorMessage.style.display = 'none'; // Starta spelet om texten är tillräckligt lång
        startGame();
        generateWord(randomWordHard);
    }
});
normalBtn.addEventListener('click', function() {
    if (playerInput.value.trim().length < 2) {
        errorMessage.innerText = 'Skriv in ditt namn. Minst två bokstäver.';
        errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort när användaren försöker starta spelet
    } else {
        errorMessage.innerText = '';
        errorMessage.style.display = 'none'; // Starta spelet om texten är tillräckligt lång
        startGame();
        generateWord(randomWord);
    }
});

easyBtn.addEventListener('click', function() {
    if (playerInput.value.trim().length < 2) {
        errorMessage.textContent = 'Skriv in ditt namn. Minst två bokstäver.';
        errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort när användaren försöker starta spelet
    } else {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none'; // Starta spelet om texten är tillräckligt lång
        startGame();
        generateWord(randomWordEasy);
    }
});

const playerNameContainer = document.createElement('div');
playerNameContainer.className = 'page';
playerNameContainer.style.display = 'none';
gamerContainer.insertAdjacentElement('afterend', playerNameContainer);
const highScoreList = document.querySelector('.high-score-list')

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

	//sparar spelarens namn i high-score-list. Webbläsaren kommer inte ihåg, det skall fixas.
	const li = document.createElement('li')
	li.append(playerName)
	highScoreList.append(li)
	

	// generateWord()
	// generateWordEasy()
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

let view = 'start-view'
let wrongGuessesCount = 0

// Anropa denna i stället for window.location.reload()
function restart() {
    view = 'start-view'
    wrongGuessesCount = 0
}
