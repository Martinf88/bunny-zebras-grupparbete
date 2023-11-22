import { words } from './svenska-ord.js'

const viewContainer = document.querySelector('.view-container')
const playContainer = document.querySelector('.play-container')
const gamerContainer = document.querySelector('.gamer-container')
const hangMan = document.querySelector('.hangman')
const scaffold = document.querySelector('#scaffold')
const head = document.querySelector('#head')
const body = document.querySelector('#body')
const arms = document.querySelector('#arms')
const legs = document.querySelector('#legs')
const playerInput = document.querySelector('#player-input')
const difficulty = document.querySelector('.difficulty')
const normalBtn = document.querySelector('.normal')
const theWord = document.querySelector('#the-word')
const guesses = document.querySelector('#guesses')
const underline = document.querySelector('.underline')
// const hidden = document.querySelector('.hidden')

normalBtn.addEventListener('click', () => {
	playContainer.classList.add('hidden')
	
	// theWord.style.visibility('hidden')
	// theWord.classlist.add('hidden');
})




