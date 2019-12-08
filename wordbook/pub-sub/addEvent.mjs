import { dataService } from './dataService.mjs'

const ds = dataService()

const btnEl = document.querySelector('.form__word-add-btn')
const nameEl = document.querySelector('.form__word-add-name')
const meaningEl = document.querySelector('.form__word-add-meaning')

const action = () => {
  event.preventDefault()

  const word = ds.setWordFormat(nameEl.value, meaningEl.value)

  ds.addWord(word)
}

btnEl.addEventListener('click', action)
