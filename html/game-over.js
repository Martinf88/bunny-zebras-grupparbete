import { randomWord, randomWordEasy, randomWordHard } from './spelarvy.js'

export const wordReveal = document.querySelector('.word-reveal')
const tryAgain = document.querySelector('.try-again') 
tryAgain.addEventListener('click', () => {
    window.location.href = './index.html';
  });
// wordReveal.innerText = `Ordet var: ${randomWord || randomWordHard}`
// console.log(randomWord, randomWordHard);
// wordReveal.innerText = `Ordet var: ${randomWord || randomWord}`
// console.log(randomWord, randomWord);
// wordReveal.innerText = `Ordet var: ${randomWord || randomWordEasy}`
// console.log(randomWord, randomWordEasy);

