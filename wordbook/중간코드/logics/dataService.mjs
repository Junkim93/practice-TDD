import { getObjKeys, getItemList } from './dataHandling.mjs'
import dataStorage from './dataStorage.mjs'

const ds = dataStorage()

let wordList = []

export function saveInputWord(word) {
  ds.saveData(word)
  wordList.push(word)
}

export function loadWordList() {
  if (localStorage.length === 0) {
    return
  } else {
    const indexWords = getObjKeys(localStorage)
    const words = getItemList(indexWords, ds.getData)
    wordList = words
  }
}

export function getWordList() {
  return wordList
}
