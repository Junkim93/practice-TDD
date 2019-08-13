const App = require("./Calculator");
App.CalculatorView = require("./CalculatorView");

let calc, updateEls, view;

describe("App.CalculatorView", () => {
  beforeEach(() => {
    data = { firstNum: 1071, secondNum: 1029 };
    calc = App.Calculator(data);
    updateEls = {
      firstEl: document.createElement("input"),
      secondEl: document.createElement("input")
    };
    view = App.CalculatorView(calc, updateEls);
  });

  describe("updateView()", () => {
    it("Calculator의 calcGreatCommonDivisor() & calcLeastCommonDivisor() 의 실행결과를 출력한다", () => {
      const highestNum = calc.calcHighestNum();
      const lowestNum = calc.calcLowestNum();
      const GCD = calc.calcGreatCommonDivisor(highestNum, lowestNum);
      const LCM = calc.calcLeastCommonMultiple(highestNum, lowestNum, GCD);

      view.updateView();
      expect(updateEls.firstEl.value).toBe(GCD.toString());
      expect(updateEls.secondEl.value).toBe(LCM.toString());
    });
  });
});
