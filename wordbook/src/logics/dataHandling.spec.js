import handleData from '../dataHandling.mjs'

describe('handleData에', () => {
  let hd = handleData()

  describe('setData(val, val2)', () => {
    it('주입 받은 값이 입력된 객체를 반환한다.', () => {
      const name = 'Hello'
      const meaning = '안녕'

      const expected = {
        index: 0,
        name: 'Hello',
        meaning: '안녕',
        status: 'name' || 'meaning'
      }

      expect(hd.setData(name, meaning)).toEqual(expected)
    })
  })

  describe('getLength(val)는', () => {
    it('주입받은 값의 길이를 반환한다.', () => {
      const arr = [1, 2, 3, 4, 5]

      expect(hd.getLength(arr)).toBe(5)
    })
  })

  describe('getObjKeys(obj)는', () => {
    it('주입받은 객체의 프로퍼티 값 목록을 스트링 타입의 배열 형태로 반환한다.', () => {
      const obj = { 0: 'a', 1: 'b', 2: 'c' }
      const expected = ['0', '1', '2']

      expect(hd.getObjKeys(obj)).toStrictEqual(expected)
    })
  })

  describe('getItemList(indexArr, fn)는', () => {
    it('단어 데이터가 들어있는 배열을 반환한다.', () => {
      const indexArr = ['0', '1']

      const expected = [
        {
          index: 0,
          name: 'Hello',
          meaning: '안녕',
          status: 'name' || 'meaning'
        },
        {
          index: 1,
          name: 'Cool',
          meaning: '멋져',
          status: 'name' || 'meaning'
        }
      ]

      const fn = index => {
        return expected[index]
      }

      expect(hd.getItemList(indexArr, fn)).toEqual(expected)
    })
  })
})
