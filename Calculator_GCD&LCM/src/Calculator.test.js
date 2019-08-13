const App = require("./Calculator");

describe("App.Calculator", () => {
  let calc;
  const data = { firstNum: 1071, secondNum: 1029 };

  it("초기값을 주입하지 않으면 에러를 던진다", () => {
    const actual = () => (calc = App.Calculator());
    expect(actual).toThrowError();
  });

  beforeEach(() => (calc = App.Calculator(data)));

  describe("calcHighestNum()", () => {
    it("두 수 중 더 큰 값을 반환한다", () => {
      expect(calc.calcHighestNum()).toBe(1071);
    });
  });

  describe("calcLowestNum()", () => {
    it("두 수 중 더 작은 값을 반환한다", () => {
      expect(calc.calcLowestNum()).toBe(1029);
    });
  });

  describe("calcGreatCommonDivisor()", () => {
    it("두 수를 내림차순으로 받아, 두 수의 최대공약수를 반환한다", () => {
      const highestNum = calc.calcHighestNum();
      const lowestNum = calc.calcLowestNum();

      // 두 수의 최대공약수는 21 입니다.
      expect(calc.calcGreatCommonDivisor(highestNum, lowestNum)).toBe(21);
    });
  });

  describe("calcLeastCommonMultiple()", () => {
    it("두 수와 최대공약수를 인자로 받아, 최소공배수를 반환한다", () => {
      const highestNum = calc.calcHighestNum();
      const lowestNum = calc.calcLowestNum();
      const GCD = calc.calcGreatCommonDivisor(highestNum, lowestNum);

      // 두 수의 최소공배수는 52479 입니다.
      expect(calc.calcLeastCommonMultiple(highestNum, lowestNum, GCD)).toBe(
        52479
      );
    });
  });
});
