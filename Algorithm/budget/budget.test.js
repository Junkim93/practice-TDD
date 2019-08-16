const budget = require('./budget');

describe('budget() 모듈의', () => {
  let calc, moneyList, totalBudget;

  beforeEach(() => {
    moneyList = [1, 6, 7, 3, 9, 5];
    totalBudget = 10;
    calc = budget(moneyList, totalBudget);
  });

  describe('sortArr()은', () => {
    it('인자로 받은 배열을 오름차순으로 정렬합니다.', () => {
      const expected = [1, 3, 5, 6, 7, 9];
      expect(calc.sortArr()).toStrictEqual(expected);
    });
  });

  describe('reduceSumArr()은', () => {
    it('배열의 원소를 누적 덧셈 하여, 하나의 값으로 리턴합니다.', () => {
      expect(calc.reduceSumArr()).toBe(31);
    });
  });

  describe('isGreaterThanTotalBudget은', () => {
    it('인자로 받은 함수가 totalBudget 보다 크면 true를 반환한다.', () => {
      calc.sortArr();
      const fx = calc.reduceSumArr();
      expect(calc.isGreaterThanTotalBudget(fx)).toBeTruthy();
    });
  });

  describe('popEl()은', () => {
    it('moneyList 배열의 맨 뒤에 있는 원소 하나를 추출하여 리턴한다.', () => {
      calc.sortArr();
      const expected = 9;

      expect(calc.popEl()).toBe(expected);
    });
  });

  describe('getArrLength()는', () => {
    it('배열의 길이를 반환한다.', () => {
      expect(calc.getArrLength()).toBe(6);
    });
  });
});
