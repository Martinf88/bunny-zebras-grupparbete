import { randomWord } from './spelarvy.js'

const wordReveal = document.querySelector('.word-reveal')

wordReveal.innerText = `Ordet var: ${randomWord}`
console.log(randomWord);