const App = {};

App.calcLowestValue = (a, b) => {
  return Math.min(a, b);
};

App.calcGreatCommonDivisor = (a, b, maxNum) => {
  for (let i = maxNum; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};

App.calcLeastCommonMultiple = (a, b, GCD) => {
  return (a * b) / GCD;
};

// module.exports = App;
