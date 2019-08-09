const App = {};

App.getLowestValue = (a, b) => {
  return Math.min(a, b);
};

App.getGreatCommonDivisor = (a, b, maxNum) => {
  for (let i = maxNum; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

App.getLeastCommonMultiple = (a, b, GCD) => {
  return (a * b) / GCD;
};

module.exports = App;
