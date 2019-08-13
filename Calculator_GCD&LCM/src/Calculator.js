var App = App || {};

App.Calculator = _data => {
  if (!_data) throw Error("_data");
  const data = _data;
  data.firstNum = data.firstNum;
  data.secondNum = data.secondNum;

  return {
    calcHighestNum() {
      return Math.max(data.firstNum, data.secondNum);
    },

    calcLowestNum() {
      return Math.min(data.firstNum, data.secondNum);
    },

    calcGreatCommonDivisor(highestNum, lowestNum) {
      if (highestNum % lowestNum === 0) {
        return lowestNum;
      }
      if (highestNum % lowestNum !== 0) {
        return this.calcGreatCommonDivisor(lowestNum, highestNum % lowestNum);
      }
    },

    calcLeastCommonMultiple(highestNum, lowestNum, GCD) {
      return (highestNum * lowestNum) / GCD;
    }
  };
};

module.exports = App;
