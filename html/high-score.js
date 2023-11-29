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