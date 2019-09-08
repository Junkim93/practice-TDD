const printer = require('./printer');

describe('printer()', () => {
  let test;
  const priorities = [2, 1, 3, 2];
  const location = 2;
  const testArray = [
    { priority: 2, location: 0 },
    { priority: 1, location: 1 },
    { priority: 3, location: 2 },
    { priority: 2, location: 3 }
  ];

  it('초기값을 주입하지 않으면 에러를 던진다.', () => {
    const actual = () => (test = printer());
    expect(actual).toThrowError();
  });

  beforeEach(() => (test = printer(priorities, location)));

  describe('getWaitingList()', () => {
    it('원소값이 객체인 배열을 반환한다.', () => {
      expect(test.getWaitingList()).toStrictEqual(testArray);
    });
  });

  describe('returnHigherPriority()', () => {
    it('인자로 주입받은 배열에, 두 번째 인자인 val 보다 큰 값이 있다면, 해당 값을 리턴한다.', () => {
      const waitingList = test.getWaitingList();
      const val = testArray.splice(0, 1)[0]; //  { priority: 2, location: 0 }
      const expected = { priority: 3, location: 2 };
      expect(test.returnHigherPriority(waitingList, val)).toStrictEqual(expected);
    });
  });

  describe('returnSameLocation()', () => {
    it('인자로 주입받은 배열에, location과 같은 값이 있다면, 해당 값을 리턴한다.', () => {
      const waitingList = test.getWaitingList();
      const expected = { priority: 3, location: 2 };
      expect(test.returnSameLocation(waitingList)).toStrictEqual(expected);
    });
  });
});
