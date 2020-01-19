const Renderer = class {
  #base
  #view

  constructor(baseElement) {
    this.#base = baseElement
  }
  set view(v) {
    if (v instanceof View) this.#view = v
    else throw `invalid view: ${v}`
  }
  render(data) {
    const base = this.#base
    const view = this.#view
    if (!base || !view) throw 'no base or view'
    if (Array.isArray(data))
      data.forEach(el => base.appendChild(view.getElement(el)))
    if (typeof data === 'object' && data.constructor === Object)
      base.appendChild(view.getElement(data))
  }
}

const View = class {
  getElement(data) {
    throw 'override!'
  }
}

const inputRenderer = new Renderer(document.querySelector('.header'))
inputRenderer.view = new (class extends View {
  #el

  getElement(data) {
    this.#el = document.createElement(`${data.elType}`)
    this.#el.className = `${data.className}`
    this.#el.setAttribute('placeholder', `${data.placeholder}`)
    return this.#el
  }
})()
inputRenderer.render({
  placeholder: 'New ToDo',
  elType: 'input',
  className: 'todo__input',
})

const listRenderer = new Renderer(document.querySelector('.contents'))
listRenderer.view = new (class extends View {
  #el

  getElement(data) {
    this.#el = document.createElement('ul')
    this.#el.className = `${data.className}`
    return this.#el
  }
})()
listRenderer.render({
  className: 'todo__list',
})

const deleteBtnRenderer = new Renderer()
deleteBtnRenderer.view = new (class extends View {
  #el

  getElement(data) {
    this.#el = document.createElement('button')
    this.#el.innerText = `${data.text}`
    this.#el.className = `${data.className}`
    this.#el.addEventListener('click', data.deleteToDo)
    return this.#el
  }
})()

const contentsRenderer = new Renderer(document.querySelector('.todo__list'))
contentsRenderer.view = new (class extends View {
  #toDo
  #deleteBtn

  getElement(data) {
    this.#toDo = document.createElement('li')
    this.#toDo.innerText = data.content
    this.#toDo.index = data.index
    this.#deleteBtn = document.createElement('button')
    this.#deleteBtn.innerText = '❌'
    this.#deleteBtn.index = data.index
    this.#deleteBtn.className = 'todo__btn-delete'
    const deleteToDo = value => {
      const els = document.querySelectorAll('.todo__list > li')
      for (const el in els) {
        if (els.hasOwnProperty(el)) {
          if (els[el].index === value.toElement.index) {
            els[el].remove()
            localStorage.removeItem(els[el].index)
          }
        }
      }
    }
    this.#deleteBtn.addEventListener('click', deleteToDo)
    this.#toDo.appendChild(this.#deleteBtn)
    return this.#toDo
  }
})()

const addBtnRenderer = new Renderer(document.querySelector('.header'))
addBtnRenderer.view = new (class extends View {
  #el

  getElement(data) {
    this.#el = document.createElement('button')
    this.#el.innerText = `${data.text}`
    this.#el.className = `${data.className}`
    this.#el.addEventListener('click', data.addToDo)
    return this.#el
  }
})()
addBtnRenderer.render({
  text: '추가',
  className: 'todo__btn-add',
  addToDo() {
    const input = document.querySelector('.todo__input')
    const data = {
      content: input.value,
      index: localStorage.length,
    }
    localStorage.setItem(data.index, data.content)
    contentsRenderer.render(data)
    input.value = ''
  },
})

const smallDB = class {
  #toDoItems = []

  get items() {
    return this.#toDoItems
  }
  initToDoItems() {
    const store = Array.from(localStorage)
    store.forEach((el, index) => {
      this.#toDoItems.push({ content: el, index })
    })
  }
}

const dataService = new smallDB()
dataService.initToDoItems()
contentsRenderer.render(dataService.items)
