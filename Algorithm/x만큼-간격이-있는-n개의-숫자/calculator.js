const calculator = (_x, _n) => {
  const x = _x;
  const n = _n;

  return {
    getArray() {
      return Array(n);
    },

    fillArray(arr) {
      return arr.fill(x);
    },

    calcEachElement(arr) {
      return arr.map((el, i) => {
        return el * (i + 1);
      });
    }
  };
};

// exec test code
const test = calculator(2, 5);

const emptyArr = test.getArray();
const arr = test.fillArray(emptyArr);
const result = test.calcEachElement(arr);

console.log(result);

module.exports = calculator;
