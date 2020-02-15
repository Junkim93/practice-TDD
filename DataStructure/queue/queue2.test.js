const Queue = class {
  constructor() {
    this.pushS = []
    this.popS = []
  }

  enqueue(el) {
    this.pushS.push(el)
  }

  dequeue() {
    if (this.popS.length > 0) {
      return this.popS.pop()
    }

    if (this.pushS.length > 0 && this.popS.length == 0) {
      while (this.pushS.length != 0) {
        this.popS.push(this.pushS.pop())
      }
      return this.popS.pop()
    }
  }
}

describe('Queue', () => {
  const queue = new Queue()

  test('enqueue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    const expected = [1, 2, 3]

    expect(queue.pushS).toStrictEqual(expected)
  })

  test('dequeue', () => {
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(3)
  })
})
