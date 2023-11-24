// import { words } from './svenska-ord.js'

// // theWord = value av math.random(words)
// // keyDown eller keyPress  för att dölja en bokstav i taget
// // flippa koden och dölj ordet för att avslöja en bokstav i taget
// // ordets längd skall vara minst tio tecken långt och vara kopplat till normal-knappen

// //senare skall figuren avslöjas bit för bit för varje korrekt gissning
// // senare skall varje knapptryckning visas i guesses
// // alla ord skall konverteras till lowercase


// const theWord = document.querySelector('#the-word');
// const randomIndex = Math.floor(Math.random() * words.length);
// const randomWord = words[randomIndex].toUpperCase();

// function generateWord() {
// 	let hiddenLetters = Array(randomWord.length).fill('_');
	
// 	theWord.innerText = hiddenLetters.join(' ');
// 	console.log(theWord);
	
// 	document.addEventListener('keydown', (event) => {
// 	  const pressedKey = event.key.toUpperCase();
	
// 	  if (randomWord.includes(pressedKey)) {
// 		randomWord.split('').forEach((char, index) => {
// 		  if (char === pressedKey) {
// 			hiddenLetters[index] = pressedKey;
// 		  }
// 		});
// 		theWord.innerText = hiddenLetters.join(' ');
// 	  }
	
// 	});
// 	console.log('hej');
// }


// const playContainer = document.querySelector('.play-container')
// const normalBtn = document.querySelector('.normal')
// const playerInput = document.querySelector('#player-input')
// const gamerContainer = document.querySelector('.gamer-container')

// normalBtn.addEventListener('click', startGame );
// const playerNameContainer = document.createElement('div');
// playerNameContainer.className = 'page';
// playerNameContainer.style.display = 'none';
// gamerContainer.insertAdjacentElement('afterend', playerNameContainer);

// function startGame() {

//     const playerName = playerInput.value;
//     if (playerName.trim().length < 2) {
//         alert('Vänligen ange ditt namn innan du startar spelet. Minst två tecken.');
//         return;
//     }
//     playContainer.style.opacity = '0';
//     playerNameContainer.innerHTML = `<p id="player-name">Spelare: ${playerName}</p>`;
//     playerNameContainer.style.display = 'flex';

// 	generateWord()
// }


