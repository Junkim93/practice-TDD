const budget = (_moneyList, _totalBudget) => {
  const moneyList = _moneyList;
  const totalBudget = _totalBudget;

  return {
    sortArr() {
      return moneyList.sort((a, b) => {
        return a - b;
      });
    },

    popEl() {
      return moneyList.pop();
    },

    reduceSumArr() {
      return moneyList.reduce((a, b) => {
        return a + b;
      }, 0);
    },

    isGreaterThanTotalBudget(fx) {
      return fx > totalBudget;
    },

    getArrLength() {
      return moneyList.length;
    }
  };
};

// exec test code
const d = [1, 6, 7, 3, 9, 5];
const b = 10;

const test = budget(d, b);

function init() {
  test.sortArr();
  while (test.isGreaterThanTotalBudget(test.reduceSumArr())) {
    test.popEl();
  }
  return test.getArrLength();
}
// 여기서 while 문이 작동하는 이유
// while 문을 순회할 때 마다, 배열의 원소를 누산하여 조건을 평가한다.
// 그런데 반복문 안에서 원소를 하나씩 빼고 있다.
// 결국 누산된 값이 예산보다 작아지는 경우가 생기게 된다.
// 그래서 반복문이 종료될 수 있다.

init();

module.exports = budget;
