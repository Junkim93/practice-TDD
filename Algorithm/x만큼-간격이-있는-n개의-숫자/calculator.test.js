const calculator = require('./calculator');

describe('calculator() 모듈의', () => {
  let calc, x, n;

  beforeEach(() => {
    x = 2;
    n = 5;
    calc = calculator(x, n);
  });

  describe('getArray()는', () => {
    it('자연수 n개 만큼의 길이를 가진 배열을 리턴합니다.', () => {
      expect(calc.getArray()).toStrictEqual(Array(n));
    });
  });

  describe('fillArray()는', () => {
    it('배열의 각 원소 값에 정수 x를 할당하여 리턴합니다.', () => {
      const emptyArr = calc.getArray();
      const expected = Array(n).fill(x);

      expect(calc.fillArray(emptyArr)).toStrictEqual(expected);
    });
  });

  describe('calcEachElement()는', () => {
    it('배열을 인자로 받아, 각 원소 * (인덱스 + 1) 을 계산한 배열을 리턴합니다.', () => {
      const emptyArr = calc.getArray();
      const arr = calc.fillArray(emptyArr);

      const expected = arr.map((el, i) => {
        return el * (i + 1);
      });

      expect(calc.calcEachElement(arr)).toStrictEqual(expected);
    });
  });
});
