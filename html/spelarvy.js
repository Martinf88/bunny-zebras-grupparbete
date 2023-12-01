import { words } from './svenska-ord.js'
const hangManHeader = document.querySelector('.hang-man-header')
const hideOnPlay = document.querySelector('#hide-on-play')
const forsokIgen = document.querySelector('.forsok-igen')
const difficulty = document.querySelector('.difficulty')
const wordReveal = document.querySelector('.word-reveal')
export const highScoreContainer = document.querySelector('.high-score-container')
const scaffold = document.querySelector('#scaffold')
const head = document.querySelector('#head')
const body = document.querySelector('#body')
const arms = document.querySelector('#arms')
const legs = document.querySelector('#legs')
const ground = document.querySelector('#ground')
const hidden = document.querySelector('.hidden')
const gameOverPage = document.querySelector('.game-over-container')
const guessAmount = document.querySelector('.guess-amount')
const winLose = document.querySelector('.win-lose')
export const highScoreBtn = document.querySelector('.highscore-btn')
export const gameViewBtn = document.querySelector('.gameview-btn')
const errorMessage = document.querySelector('#error-message');
let gameOver = false;
export const theWord = document.querySelector('#the-word');
export const guesses = document.querySelector('#guesses')
let highScoreList = document.querySelector('.high-score-list')

let minWordLengthHard = words.filter(word => word.length >= 6 && word.length <= 9);
let minWordLengthNormal = words.filter(word => word.length >= 10 && word.length <= 14);
let minWordLengthEasy = words.filter(word => word.length >= 15 && word.length <= 19);

let randomIndexNormal = Math.floor(Math.random() * minWordLengthNormal.length);
let randomIndexEasy = Math.floor(Math.random() * minWordLengthEasy.length);

export let randomWord = ''
export let randomWordNormal = minWordLengthNormal[randomIndexNormal].toUpperCase();
export let randomWordEasy = minWordLengthEasy[randomIndexEasy].toUpperCase();

export let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;
export let keyDownCount = 0;
let pressedKeyList = []
let hiddenLetters = []
let gameStarted = false

//Nödvändiga variabler ^

document.addEventListener('keydown', (event) => {
	if (!gameStarted) {
		return;
	}

	if (gameOver) {
		return;
	}

	if (!event.key) {
		return
	}

	const pressedKey = event.key.toUpperCase();

	console.log(`Lista: ${pressedKeyList}`);
	if (pressedKeyList.includes(pressedKey)) {

		return
	}
	pressedKeyList.push(pressedKey)

	if (/^[A-ZÅÄÖ]$/.test(pressedKey)) {
		guesses.innerText += `${pressedKey}-`;
		keyDownCount++
		guessAmount.innerHTML = `<p class="guess-amount">Du gissade ${keyDownCount} gånger.</p>`; // - visar antalet gissningar

		let randomWordUppercase = randomWord.toUpperCase()
		if (randomWordUppercase.includes(pressedKey)) {

			randomWordUppercase.split('').forEach((char, index) => {
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
export const playContainer = document.querySelector('.play-container')
const hardBtn = document.querySelector('.hard')
const normalBtn = document.querySelector('.normal')
const easyBtn = document.querySelector('.easy')
export const playerInput = document.querySelector('#player-input')
const gamerContainer = document.querySelector('.gamer-container')


//döljer välj svårighetsgrad meddelande
difficulty.style.display = 'none'

playerInput.addEventListener('input', function () {
	if (playerInput.value.trim().length < 2) {
		errorMessage.innertext = 'Skriv in ditt namn. Minst två bokstäver.';
		errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort
	} else {
		errorMessage.innerText = '';
		errorMessage.style.display = 'none'; // Dölj felmeddelandet om texten är tillräckligt lång
	}
});

let mode = ''

// Lägg till en händelselyssnare på knapparna för att kontrollera om det finns ett felmeddelande innan spelet startar
hardBtn.addEventListener('click', function () {
	mode = 'hard'
	if (playerInput.value.trim().length < 2) {
		errorMessage.innerText = 'Skriv in ditt namn. Minst två bokstäver.';
		errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort när användaren försöker starta spelet
	} else {
		errorMessage.innerText = '';
		errorMessage.style.display = 'none'; // Starta spelet om texten är tillräckligt lång
		startGame();
	}
});
normalBtn.addEventListener('click', function () {
	mode = 'normal'
	if (playerInput.value.trim().length < 2) {
		errorMessage.innerText = 'Skriv in ditt namn. Minst två bokstäver.';
		errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort när användaren försöker starta spelet
	} else {
		errorMessage.innerText = '';
		errorMessage.style.display = 'none'; // Starta spelet om texten är tillräckligt lång
		startGame();
	}
});

easyBtn.addEventListener('click', function () {
	mode = 'easy'
	if (playerInput.value.trim().length < 2) {
		errorMessage.textContent = 'Skriv in ditt namn. Minst två bokstäver.';
		errorMessage.style.display = 'block'; // Visa felmeddelandet om texten är för kort när användaren försöker starta spelet
	} else {
		errorMessage.textContent = '';
		errorMessage.style.display = 'none'; // Starta spelet om texten är tillräckligt lång
		startGame();
	}
});

const playerNameContainer = document.createElement('div');
playerNameContainer.className = 'page';
playerNameContainer.style.display = 'none';
gamerContainer.insertAdjacentElement('afterend', playerNameContainer);


let gameStartTime = '';
let playerName = '';

export function startGame() {
	gameStarted = true;

	gamerContainer.style.display = 'flex';
	let currentDate = new Date();
	gameStartTime = currentDate.toLocaleString();
	console.log(gameStartTime);

	if (mode === 'easy') {
		randomWord = minWordLengthEasy[Math.floor(Math.random() * minWordLengthEasy.length)];
		//slumpa ett index
		console.log('easy', randomWord);
	}
	else if (mode === 'normal') {
		randomWord = minWordLengthNormal[Math.floor(Math.random() * minWordLengthNormal.length)];
		//slumpa ett index
		console.log('normal', randomWord);
	}
	else {
		randomWord = minWordLengthHard[Math.floor(Math.random() * minWordLengthHard.length)];
		//slumpa ett index
		console.log('hard', randomWord);
	}

	hiddenLetters = Array(randomWord.length).fill('_');

	theWord.innerText = hiddenLetters.join(' ');
	wordReveal.innerText = 'Ordet var: ' + randomWord;


	playerName = playerInput.value;
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
	// const li = document.createElement('li')
	// li.append(playerName)
	// highScoreList.append(li)
}

// highScoreList = []

function savePlayerData() {

	let playerItem = document.createElement('li');

	let playerNameNode = document.createTextNode(`${playerName} | `);
    let guessesNode = document.createTextNode(`Gissningar: ${keyDownCount} | `);
    let timeNode = document.createTextNode(`Datum: ${gameStartTime} `);

	playerItem.appendChild(playerNameNode);
    playerItem.appendChild(guessesNode);
    playerItem.appendChild(timeNode);

	highScoreList.appendChild(playerItem);
	localStorage.setItem(playerNameNode, guessesNode, timeNode );
}

//Lista med figurens delar
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

	savePlayerData();
}

let view = 'start-view'
let wrongGuessesCount = 0

// Anropa denna i stället for window.location.reload()
forsokIgen.addEventListener('click', () => {
	gameOver = false;
	playContainer.style.display = 'flex';
	gamerContainer.style.display = 'flex';
	hideOnPlay.style.display = 'flex';
	gameOverPage.style.display = 'none';
	resetGame();

})

function resetGame() {
	gameStarted = false
	
	// Clearar föregående ord och nollställer valda variabler
	theWord.innerText = '';
	guesses.innerText = '';
	keyDownCount = 0;
	pressedKeyList = [];
	incorrectGuesses = 0;

	// Väljer ett nytt ord baserat på svårighetsgrad
	if (difficulty === 'hard') {
		generateWord(randomWordHard);
	} else if (difficulty === 'normal') {
		generateWord(randomWordNormal);
	} else if (difficulty === 'easy') {
		generateWord(randomWordEasy);
	}
}

// console.log('randomWord', randomWord);

// console.log('randomWordNormal', randomWordNormal);

// console.log('randomWordEasy', randomWordEasy);