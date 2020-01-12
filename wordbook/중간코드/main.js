import { app } from './app.mjs'
;(() => {
  const dataEls = {
    nameEl: document.querySelector('.form__word-add-name'),
    meaningEl: document.querySelector('.form__word-add-meaning')
  }

  const viewEls = {
    wordListEl: document.querySelector('.body__word-list')
  }

  const triggerEls = {
    btnAdd: document.querySelector('.form__word-add-btn')
  }

  const view = app.inputWordView(viewEls)

  app.addWordEvent(triggerEls, dataEls, view)
})()
