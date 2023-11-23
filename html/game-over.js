import { randomWord } from './spelarvy.js'

const wordReveal = document.querySelector('.word-reveal')
const winMessage = document.querySelector('.win-message')
const lossMessage = document.querySelector('.loss-message')

wordReveal.innerText = `Ordet var: ${randomWord}`
console.log(randomWord);


winMessage.classList.add('hidden')
lossMessage.classList.add('hidden')