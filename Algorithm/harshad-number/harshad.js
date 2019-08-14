const isHarshad = _data => {
  const data = Number(_data);
  return {
    getArrValue() {
      return String(data).split('');
    },

    sumArrValue(arr) {
      return arr.reduce((a, b) => {
        return Number(a) + Number(b);
      });
    },

    getRemainder(sumValue) {
      return data % sumValue;
    },

    isTrue(remainder) {
      if (remainder === 0) {
        return true;
      }
      if (remainder !== 0) {
        return false;
      }
    }
  };
};

module.exports = isHarshad;
