function inputWordView(options, fn) {
  const view = {
    updateView(obj) {
      if (obj && Object.prototype.toString.call(obj) !== '[object Object]') {
        throw Error('Not Object')
      }
      options.updateEl.innerHTML = obj.name
      options.updateEl.key = obj.index
      // options.updateEl.addEventListener('click', toggleFn)
      options.parentEl.appendChild(options.updateEl)
    },

    initView(arr) {
      if (arr && Object.prototype.toString.call(arr) !== '[object Array]') {
        throw Error('Not Array')
      }
      arr.forEach(word => {
        this.updateView(word)
      })
    }
  }

  options.triggerEl.addEventListener('click', view.updateView())

  return view
}

export default inputWordView
