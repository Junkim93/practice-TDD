import app from "./app";

(() => {
  const btnAdd = document.querySelector("form__word-add-btn");
  const wordsEl = document.querySelector("body__word-list");
  const nameEl = document.querySelector("form__word-add-name");
  const meaningEl = document.querySelector("form__word-add-meaning");

  // 로컬 스토리지에 있는 단어 배열 불러오기
  app.loadWordList();
  const view = app.inputWordView(
    {
      triggerEl: btnAdd,
      updateEl: wordsEl
    },
    null
  );
  view.initView(app.getWordList());

  // 버튼 트리거에 의한 단어 저장 및 화면 출력
  app.saveInputWord(nameEl.value, meaningEl.value);
})();
