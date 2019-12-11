import { getObjKeys, getItemList, getData } from './dataServiceLogic.mjs'

const changeListener = []

export const subscribe = cbFn => {
  changeListener.push(cbFn)
}

const publish = data => {
  changeListener.forEach(changeListener => changeListener(data))
}
export const dataService = (() => {
  const wordList = []

  return {
    setWordFormat(name, meaning) {
      const data = {
        index: localStorage.length,
        name: name,
        meaning: meaning,
        status: 'name' || 'meaning'
      }

      return data
    },

    addWord(word) {
      wordList.push(word)
      localStorage.setItem(word.index, JSON.stringify(word))

      publish(word)
    },

    getWordList() {
      return wordList
    },

    loadWordList() {
      if (localStorage.length === 0) return
      else {
        const indexWords = getObjKeys(localStorage)
        const words = getItemList(indexWords, getData)
        words.forEach(el => wordList.push(el))
      }
    }
  }
})()
