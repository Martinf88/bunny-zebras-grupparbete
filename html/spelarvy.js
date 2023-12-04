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
export const gameOverPage = document.querySelector('.game-over-container')
const guessAmount = document.querySelector('.guess-amount')
const winLose = document.querySelector('.win-lose')
export const highScoreBtn = document.querySelector('.highscore-btn')
export const gameViewBtn = document.querySelector('.gameview-btn')
const errorMessage = document.querySelector('#error-message');
let gameOver = false;
export const theWord = document.querySelector('#the-word');
export const guesses = document.querySelector('#guesses')
let highScoreList = document.querySelector('.high-score-list')
const scoreBtn = document.querySelector('.score-btn')
const dateBtn = document.querySelector('.date-btn')

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
export const gamerContainer = document.querySelector('.gamer-container')


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
	keyboard.style.display = 'flex';
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
	hangManHeader.innerText = 'Spelare: ' + playerName;
	hangManHeader.style.display = 'block';

	//sparar spelarens namn i high-score-list. Webbläsaren kommer inte ihåg, det skall fixas.
	// const li = document.createElement('li')
	// li.append(playerName)
	// highScoreList.append(li)
}

// highScoreList = []

// Hämta sparad spelarlista från localStorage
function getSavedPlayerList() {
    const savedPlayerList = localStorage.getItem('playerList');
    return savedPlayerList ? JSON.parse(savedPlayerList) : [];
}

// Spara spelarlista till localStorage
function savePlayerList(playerList) {
    localStorage.setItem('playerList', JSON.stringify(playerList));
}

// Spara en ny spelares data till localStorage
function savePlayerData() {
	
    const playerData = `${playerName} | Gissningar: ${keyDownCount} | Datum: ${gameStartTime}`;
    highScoreList.innerHTML += `<li>${playerData}</li>`;

    let playerList = getSavedPlayerList();
    playerList.push(playerData);
    savePlayerList(playerList);
}

// Återställ tidigare sparad spelarlista när sidan laddas
window.onload = function() {
    const savedPlayers = getSavedPlayerList();
    savedPlayers.forEach(player => {
        highScoreList.innerHTML += `<li>${player}</li>`;
    });
};

// rensa knapp för high-score medans man testar
const clearBtn = document.querySelector('.clear-btn')
function clearHighScores() {
    localStorage.removeItem('playerList');
    highScoreList.innerHTML = '';
}
clearBtn.addEventListener('click', clearHighScores);
// rensa knapp för high-score medans man testar


//anropar en funktion när man klickar
scoreBtn.addEventListener('click', () => {
	sortHighScoreListByGuesses();
})
dateBtn.addEventListener('click', () => {
	sortHighScoreListByDate();
})

// Funktion för att sortera highscore-listan efter antal gissningar
function sortHighScoreListByGuesses() {
    const playerList = Array.from(document.querySelectorAll('.high-score-list > li'));
    const sortedList = playerList.sort((a, b) => {
        const guessesA = getGuessesFromPlayerData(a.textContent);
        const guessesB = getGuessesFromPlayerData(b.textContent);
        return guessesA - guessesB;
    });
    displayHighScoreList(sortedList);
}

// Funktion för att sortera highscore-listan efter datum/tid
function sortHighScoreListByDate() {
    const playerList = Array.from(document.querySelectorAll('.high-score-list > li'));
    const sortedList = playerList.sort((a, b) => {
        const dateA = getDateFromPlayerData(a.textContent);
        const dateB = getDateFromPlayerData(b.textContent);
        return dateB - dateA;
    });
    displayHighScoreList(sortedList);
}

// Funktion för att visa den sorterade highscore-listan
function displayHighScoreList(sortedList) {
    const highScoreList = document.querySelector('.high-score-list');
    highScoreList.innerHTML = ''; // Rensa listan för att lägga till den sorterade listan
    sortedList.forEach(player => {
        highScoreList.appendChild(player);
    });
}

// Extrahera antal gissningar från spelardata
function getGuessesFromPlayerData(playerData) {
    const matches = playerData.match(/Gissningar: (\d+)/);
    return matches ? parseInt(matches[1]) : 0;
}

// Extrahera datum och tid från spelardata
function getDateFromPlayerData(playerData) {
    const matches = playerData.match(/Datum: (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/);
    return matches ? new Date(matches[1]).getTime() : 0;
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


const forsokIgenIgen = document.querySelector('.forsok-igen-igen')
// Anropa denna i stället for window.location.reload()
forsokIgen.addEventListener('click', () => {
	gameOver = false;
	keyboard.style.display = 'none';
	playContainer.style.display = 'flex';
	gamerContainer.style.display = 'flex';
	hideOnPlay.style.display = 'flex';
	gameOverPage.style.display = 'none';
	highScoreContainer.style.display = 'none';
	resetGame();

})
forsokIgenIgen.addEventListener('click', () => {
	gameOver = false;
	keyboard.style.display = 'none';
	playContainer.style.display = 'flex';
	gamerContainer.style.display = 'flex';
	hideOnPlay.style.display = 'flex';
	gameOverPage.style.display = 'none';
	highScoreContainer.style.display = 'none';
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

}

//Tangentbord på skärmen
const keyboard = document.querySelector('.keyboard');
keyboard.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const key = event.target.innerText;
    handleOnScreenKeyPress(key);
  }
});

function handleOnScreenKeyPress(key) {
  simulateKeyPress({ key: key });
}

function simulateKeyPress(event) {
  const simulatedEvent = new KeyboardEvent('keydown', {
    key: event.key,
    code: event.key.charCodeAt(0),
    which: event.key.charCodeAt(0),
  });

  document.dispatchEvent(simulatedEvent);
}

// console.log('randomWord', randomWord);

// console.log('randomWordNormal', randomWordNormal);

// console.log('randomWordEasy', randomWordEasy);