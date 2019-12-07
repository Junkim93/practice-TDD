import { saveInputWord } from '../logics/dataService.mjs'
import { setData } from '../logics/dataHandling.mjs'

export const addWordEvent = (triggerEls, dataEls, viewFn) => {
  const addWord = () => {
    event.preventDefault()
    const wordData = {
      name: dataEls.nameEl.value,
      meaning: dataEls.meaningEl.value
    }

    const word = setData(wordData.name, wordData.meaning)

    saveInputWord(word)
    viewFn.updateView(word)
    viewFn.initView(dataEls)
  }

  triggerEls.btnAdd.addEventListener('click', addWord)
}
