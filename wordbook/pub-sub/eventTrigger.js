import { dataService } from './dataService.mjs'
import { options } from './options.js'

export const handleToggle = e => {
  const words = dataService.getWordList()
  const word = words[e.target.key]

  if (word.status === 'name') {
    e.target.innerText = word.meaning
    word.status = 'meaning'
  } else {
    e.target.innerText = word.name
    word.status = 'name'
  }
}

const handleAddWord = () => {
  event.preventDefault()

  const word = ds.setWordFormat(options.nameEl.value, options.meaningEl.value)

  dataService.addWord(word)
}

const handleSearchWord = e => {
  if (e.key === 'Enter') {
    event.preventDefault()
    const inputVal = options.searchEl.value

    const wordLiElArr = Array.from(options.wordListEl.childNodes)
    wordLiElArr.forEach(el => {
      if (el.innerText !== inputVal) el.style.display = 'none'
    })
  }
}

options.btnEl.addEventListener('click', handleAddWord)
options.searchEl.addEventListener('keypress', handleSearchWord)
