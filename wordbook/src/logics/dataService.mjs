import handleData from './logic/dataHandling.mjs'
import dataStorage from './logic/dataStorage.mjs'

const hd = handleData()
const ds = dataStorage()
let wordList = []

export function saveInputWord(name, meaning) {
  const word = hd.setData(name, meaning)
  ds.saveData(word)
  wordList.push(word)
}

export function loadWordList() {
  if (localStorage.length === 0) {
    return
  } else {
    const indexWords = hd.getObjKeys(localStorage)
    const words = hd.getItemList(indexWords, ds.getData)
    wordList = words
  }
}

export function getWordList() {
  return wordList
}

// pub-sub pattern 하구싶당;
