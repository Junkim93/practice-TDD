function printer(_priorities, _location) {
  if (!(_priorities && _location)) throw Error('_priorities & _location');
  const priorities = _priorities;
  const location = _location;

  return {
    getWaitingList() {
      return priorities.map((el, i) => ({
        priority: el,
        location: i
      }));
    },

    returnHigherPriority(arr, val) {
      return arr.find(el => {
        return val.priority < el.priority;
      });
    },

    returnSameLocation(arr) {
      return arr.find(el => {
        return el.location === location;
      });
    }
  };
}

module.exports = printer;

// 테스트 코드
const _priorities = [2, 1, 3, 2];
const _location = 2;
const exec = printer(_priorities, _location);
const waitingList = exec.getWaitingList();
const printedList = [];

while (waitingList.length !== 0) {
  const doc = waitingList.shift();

  if (exec.returnHigherPriority(waitingList, doc)) {
    waitingList.push(doc);
  } else {
    printedList.push(doc);
  }
}

const result = exec.returnSameLocation(printedList);
console.log(printedList.indexOf(result) + 1);
