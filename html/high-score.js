import { theWord } from './spelarvy.js'
import { highScoreContainer } from './spelarvy.js'
import { playContainer } from './spelarvy.js'
import { highScoreBtn } from './spelarvy.js'
import { gameViewBtn } from './spelarvy.js'
import {keyDownCount} from './spelarvy.js'



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



//the date and time on the High Score page 
/*function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes(); // Corrected typo
    const isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

function formatDate(date) {
    const Days = ["1", "2", "3", "4", "5", "6", "7"];
    const Months = ["Januari", "Feburari", "Mars", "April", "Mai", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

    return `${Days[date.getDay()]}, ${Months[date.getMonth()]}`; // Corrected typo
}*/

 //Davids code
/*const li = document.createElement('li');
const highScoreList = document.querySelector(".high-score-list");
const highScoreHeader = document.querySelector('.high-score-header')

let keydownSpan = document.createElement('span');
keydownSpan.innerText = keyDownCount;
console.log( "visa Keydown" + keydownSpan);


    function renderDateAndTime(highscore){
        highScoreList.innerText ='';
        const items = highScoreList.map( score => {
            const li = document.createElement('li');
            const nameSpan = document.createElement ('span');
            const dateSpan = document.createElement ('span');
            const timeSpan = document.createElement ('span');

    
         const dateTime = new Date(score.timestamp * 1000);
        nameSpan.innerText = date.name;
        dateSpan.innerText = `Date: ${dateTime.toLocaleDateString()}`;
        timeSpan.innerText = `Time: ${dateTime.toLocaleTimeString()}`;
        
       

        li.append(nameSpan);
        li.append(dateSpan);
        li.append(timeSpan);

        return li;
        });

    items.forEach(item => {
        highScoreList.appendChild(item);
    });
        }

//chat gpt
        function updateLocalTime(){
            let time = document.getElementById("current-time");
            let d = new Date();
            time.innerHTML = d.toLocaleTimeString();
        }
        updateLocalTime();
        setInterval(updateLocalTime, 1000);
        updateLocalTime();
        */

        let keydownSpan = document.createElement('span');
        keydownSpan.innerText = keyDownCount;
        console.log( "visa Keydown" + keydownSpan);

    function updateDateTime() {
        var currentDate = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        var formattedDate = currentDate.toLocaleDateString('en-US', options);

        document.getElementById('date-time').innerText = formattedDate;
    }

    // Update date and time every second
    setInterval(updateDateTime, 1000);

    // Initial call to display date and time
    updateDateTime();

