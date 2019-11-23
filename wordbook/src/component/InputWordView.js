function inputWordView(options, fn) {
  const view = {
    updateView(obj) {
      if (obj && Object.prototype.toString.call(obj) !== "[object Object]") {
        throw Error("Not Object");
      }
      options.updateEl.innerHTML = obj.name;
      options.updateEl.key = obj.index;
      options.updateEl.addEventListener("click", toggleFn);
      options.parentEl.appendChild(options.updateEl);
    },

    initView(arr) {
      if (arr && Object.prototype.toString.call(arr) !== "[object Array]") {
        throw Error("Not Array");
      }
      arr.forEach(word => {
        this.updateView(word);
      });
    }
  };

  options.triggerEl.addEventListener("click", saveFn => {
    view.updateView();
  });

  // data 타입은 두 가지.
  // 1. {} 한 가지 값만, 바로 주입할 때
  // 2. [] 여러 값이 동시에 들어올 때
  // 3. 화면에 updateView를 반복해줘야 한다.

  return view;
}

module.exports = inputWordView;
