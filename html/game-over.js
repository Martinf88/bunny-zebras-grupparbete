import { randomWord, randomWordEasy, randomWordHard } from './spelarvy.js'

export const wordReveal = document.querySelector('.word-reveal')
const winMessage = document.querySelector('.win-message')
const lossMessage = document.querySelector('.loss-message')
const tryAgain = document.querySelector('.try-again') 

// wordReveal.innerText = `Ordet var: ${randomWord || randomWordHard}`
// console.log(randomWord, randomWordHard);
// wordReveal.innerText = `Ordet var: ${randomWord || randomWord}`
// console.log(randomWord, randomWord);
// wordReveal.innerText = `Ordet var: ${randomWord || randomWordEasy}`
// console.log(randomWord, randomWordEasy);


winMessage.classList.add('hidden')
lossMessage.classList.add('hidden')

