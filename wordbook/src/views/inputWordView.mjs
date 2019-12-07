function inputWordView(options) {
  const view = {
    updateView(obj) {
      if (obj && Object.prototype.toString.call(obj) !== '[object Object]') {
        throw Error('Not Object')
      }
      const updateEl = document.createElement('li')
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

    initView(dataEls) {
      dataEls.nameEl.value = ''
      dataEls.meaningEl.value = ''
    }
  }

  return view
}

export default inputWordView
