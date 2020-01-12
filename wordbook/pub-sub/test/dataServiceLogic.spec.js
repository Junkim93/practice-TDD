import { getItemList } from '../dataServiceLogic'

describe('getItemList는', () => {
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

    expect(getItemList(indexArr, fn)).toEqual(expected)
  })
})

describe('', () => {})
