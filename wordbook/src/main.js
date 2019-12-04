import { app } from './app.mjs'
;(() => {
  const btnAdd = document.querySelector('.form__word-add-btn')
  const wordsEl = document.querySelector('.body__word-list')
  const nameEl = document.querySelector('.form__word-add-name')
  const meaningEl = document.querySelector('.form__word-add-meaning')

  const view = app.inputWordView(
    {
      triggerEl: btnAdd,
      updateEl: wordsEl
    },
    null
  )

  // 클릭할때마다 값을 던져줘야함

  view.initView(wordList)
})()

// 클릭 이벤트가 발생하면
// 입력한 단어 값을 불러오고
// -> 로컬 스토리지에 저장하고
// -> 저장한 값을 브라우저의 배열에 저장하고
// -> 해당 값을 화면에 뿌려준다

// 입력한 단어 값을 불러오고
// ->
