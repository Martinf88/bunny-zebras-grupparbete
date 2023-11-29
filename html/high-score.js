import { theWord } from './spelarvy.js'
import { highScoreContainer } from './spelarvy.js'
import { playContainer } from './spelarvy.js'
import { highScoreBtn } from './spelarvy.js'
import { gameViewBtn } from './spelarvy.js'



//Togglar High Score och spelarvy
highScoreContainer.style.display = 'none'


highScoreBtn.addEventListener('click', () => {
	if (highScoreContainer.style.display === 'none') {
        highScoreContainer.style.display = 'flex';
		playContainer.style.display = 'none';
		theWord.style.display = 'none'
    } 
})

gameViewBtn.addEventListener('click', () => {
	if (playContainer.style.display === 'none') {
        playContainer.style.display = 'flex';
		highScoreContainer.style.display = 'none';
		theWord.style.display = 'flex'
    } 
})
//Antal Gissningar
const guessText = document.querySelector(".guess-text b");
guessText.innerText = '${wrongGuessCount} / ${maxGuess}';

//the date and time on the High Score page 
function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes(); // Corrected typo
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

function formatDate(date) {
    const Days = ["1", "2", "3", "4", "5", "6", "7"];
    const Months = ["Januari", "Feburari", "Mars", "April", "Mai", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

    return `${Days[date.getDay()]}, ${Months[date.getMonth()]}`; // Corrected typo
}
