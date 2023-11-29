import { randomWord, randomWordEasy } from './spelarvy.js'

const wordReveal = document.querySelector('.word-reveal')
const winMessage = document.querySelector('.win-message')
const lossMessage = document.querySelector('.loss-message')

wordReveal.innerText = `Ordet var: ${randomWord || randomWordEasy}`
console.log(randomWord, randomWordEasy);


winMessage.classList.add('hidden')
lossMessage.classList.add('hidden')

