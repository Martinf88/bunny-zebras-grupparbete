import { theWord } from './spelarvy.js'
import { highScoreContainer } from './spelarvy.js'
import { playContainer } from './spelarvy.js'
import { highScoreBtn } from './spelarvy.js'
import { gameViewBtn } from './spelarvy.js'
import {keyDownCount} from './spelarvy.js'
import {playerInput} from './spelarvy.js'
import {guesses} from './spelarvy.js'
import {incorrectGuesses} from './spelarvy.js'
import {startGame} from './spelarvy.js'
import { gamerContainer } from './spelarvy.js'
import {gameOverPage} from './spelarvy.js'


//Togglar High Score och spelarvy
highScoreContainer.style.display = 'none'


highScoreBtn.addEventListener('click', () => {
	if (highScoreContainer.style.display === 'none') {
        highScoreContainer.style.display = 'flex';
		playContainer.style.display = 'none';
		gamerContainer.style.display = 'none';
        gameOverPage.style.display = 'none';
    } 
})

gameViewBtn.addEventListener('click', () => {
	if (playContainer.style.display === 'none') {
        playContainer.style.display = 'flex';
		highScoreContainer.style.display = 'none';
		theWord.style.display = 'flex'
		guesses.style.display = 'flex'
        gameOverPage.style.display = 'none';
        gamerContainer.style.display = 'flex';
    } 
})