const App = require("./App");

// 두 수 중 작은 수를 반환한다.
test("Calculate lowest-valued number", () => {
  expect(App.calcLowestValue(3, 12)).toBe(3);
});

// 두 수에 각각 나눴을 때 나머지가 0이 되는 i값 (GCD)를 반환한다.
test("Calculate GreatCommonDivisor", () => {
  const maxNum = App.calcLowestValue(3, 12);
  expect(App.calcGreatCommonDivisor(3, 12, maxNum)).toBe(3);
});

// 최소공약수를 이용해서 최대공배수 값을 얻는다.
test("Calculate LeastCommonMultiple", () => {
  const maxNum = App.calcLowestValue(3, 12);
  const GCD = App.calcGreatCommonDivisor(3, 12, maxNum);
  expect(App.calcLeastCommonMultiple(3, 12, GCD)).toBe(12);
});
