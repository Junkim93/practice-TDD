var App = App || {};

App.CalculatorView = (calc, updateEls) => {
  const highestNum = calc.calcHighestNum();
  const lowestNum = calc.calcLowestNum();
  const GCD = calc.calcGreatCommonDivisor(highestNum, lowestNum);
  const LCM = calc.calcLeastCommonMultiple(highestNum, lowestNum, GCD);

  return {
    updateView() {
      updateEls.firstEl.value = GCD;
      updateEls.secondEl.value = LCM;
    }
  };
};

module.exports = App.CalculatorView;
