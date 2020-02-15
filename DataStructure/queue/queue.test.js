const Queue = class {
  constructor() {
    this.pushS = []
    this.popS = []
  }

  get status() {
    return this.pushS
  }

  enqueue(el) {
    this.pushS.push(el)
  }
  dequeue() {
    if (this.pushS.length == 1) return
    // 첫 번째 시도에서 피드백을 받고 추가함

    while (this.pushS.length != 1) {
      this.popS.push(this.pushS.pop())
    }
    this.pushS.pop()
    while (this.popS.length != 0) {
      this.pushS.push(this.popS.pop())
    }
  }
}

describe('Queue', () => {
  const queue = new Queue()

  test('status', () => {
    expect(queue.status).toStrictEqual([])
  })

  test('enqueue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    const expected = [1, 2, 3]

    expect(queue.status).toStrictEqual(expected)
  })

  test('dequeue', () => {
    queue.dequeue()

    const expected = [2, 3]

    expect(queue.status).toStrictEqual(expected)
  })
})
