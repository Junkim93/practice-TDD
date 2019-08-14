const isHarshad = require('./harshad');

describe('harshad()', () => {
  const x = Number(21);
  const harshad = isHarshad(x);

  describe('getArrValue()', () => {
    it('인자로 받은 양의 정수 x를 배열로 반환한다', () => {
      expect(harshad.getArrValue()).toStrictEqual(['2', '1']);
    });
  });

  describe('sumArrValue()', () => {
    it('reduce 함수로 배열의 원소를 모두 더한 값을 리턴 받는다', () => {
      const arr = harshad.getArrValue();
      expect(harshad.sumArrValue(arr)).toBe(3);
    });
  });

  describe('getRemainder()', () => {
    it('x에서 인자로 받은 값을 나눈 후 그 나머지 값을 반환한다', () => {
      const arr = harshad.getArrValue();
      const sumValue = harshad.sumArrValue(arr);
      expect(harshad.getRemainder(sumValue)).toBe(0);
    });
  });

  describe('isTrue()', () => {
    it('입력받은 값이 0이면 true를, 0이 아니면 false를 반환한다', () => {
      const arr = harshad.getArrValue();
      const sumValue = harshad.sumArrValue(arr);
      const remainder = harshad.getRemainder(sumValue);

      expect(harshad.isTrue(remainder)).toBeTruthy();
      expect(harshad.isTrue(remainder !== 0)).toBeFalsy();
    });
  });
});
