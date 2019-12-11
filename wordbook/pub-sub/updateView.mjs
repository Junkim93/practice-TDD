import { subscribe, dataService } from './dataService.mjs'
import { options } from './options.mjs'
import { handleToggle } from './eventTrigger.mjs'

export const updateView = (options, fn) => {
  const view = {
    updateView(obj) {
      if (obj && Object.prototype.toString.call(obj) !== '[object Object]') {
        throw Error('Not Object')
      }
      const updateEl = document.createElement('li')

      if (fn) updateEl.addEventListener('click', fn)
      updateEl.innerHTML = obj.name
      updateEl.key = obj.index
      options.wordListEl.appendChild(updateEl)
    },

    loadView(arr) {
      if (arr && Object.prototype.toString.call(arr) !== '[object Array]') {
        throw Error('Not Array')
      }
      arr.forEach(word => {
        this.updateView(word)
      })
    },

    initInputView() {
      options.nameEl.value = ''
      options.meaningEl.value = ''
    }
  }

  const initView = (() => {
    dataService.loadWordList()
    view.loadView(dataService.getWordList())
  })()

  return view
}

const view = updateView(options, handleToggle)
subscribe(view.updateView)
subscribe(view.initInputView)
