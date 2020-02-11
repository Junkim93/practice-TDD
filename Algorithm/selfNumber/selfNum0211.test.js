/*
  양의 정수 n에 대하여, F(n) = n + (n의 각 자리 수)로 정의되는 함수
  예를들어 F(12) = 12 + 1 + 2 = 15
  문자열로 치환해서 자기의 길이만큼 더하고 숫자로 치환한다
  Number(String(n)) + Number(String(i)...)
*/

const sumFn = num => {
  const strNum = num.toString();
  let result = num;
  for (let i = 0; i < strNum.length; i += 1) {
    result += Number(strNum[i]);
  }
  return result;
};

const solution = a => {
  let num = 0;
  let result = 0;
  while (num != a) {
    num += 1;
    if (sumFn(num) == a) result += 1;
  }
  return result;
};

test('인자로 정수 12를 넘겼을 때 리턴 값은 15이다.', () => {
  expect(sumFn(12)).toBe(15);
});

test('101을 인자로 넘겼을 때 생성자는 2개이다.', () => {
  expect(solution(101)).toBe(2);
  expect(solution(31)).toBe(0);
  expect(solution(1000)).toBe(1);
});
