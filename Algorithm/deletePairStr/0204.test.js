/*
  파라미터: 문자열 알파벳
  동작:
  - 현재 문자와 다음 문자가 같으면 둘 다 제거
    - 인자로 받은 문자열을 배열로 쪼갠다.
    - 반복문 (파라미터로 받은 string이 ''이 되면 반복문을 종료한다. (5: if))
      - 쪼개진 배열의 가장 앞 원소를 추출한다.
      - 비교할 대상 배열에 넣는다.
      - 쪼개진 배열의 가장 앞 원소를 추출한다.
      - 비교할 대상 배열에 넣는다.
      - 비교할 대상 배열 내의 두 원소를 비교하여 같을 경우 모두 제거한다. (3)
      - 그렇지 않다면, 다음 1-3을 수행한다. (4)
  결과1: 동작으로 인해 문자가 전부 제거되면 return 1
  결과2: 동작으로 인해 문자가 전부 제거되지 못하면 return 0
  
  예상: stack 구조에 알파벳을 넣고 새로 들어오는 값과 비교하기
*/

const solution = anyString => {
  const comparedAlphabet = [];
  for (let i = 0; i < anyString.length; i++) {
    if (comparedAlphabet[comparedAlphabet.length - 1] == anyString[i]) {
      comparedAlphabet.pop();
    } else {
      comparedAlphabet.push(anyString[i]);
    }
  }
  if (comparedAlphabet.length == 0) {
    return 1;
  } else {
    return 0;
  }
};

const deleteEqualStr = (arr, str) => {
  if (arr[arr.length - 1] == str) {
    arr.pop();
  }
  return arr;
};

const pushDiffStr = (arr, str) => {
  if (arr[arr.length - 1] != str) {
    arr.push(str);
  }
  return arr;
};

test('solution의 결과는', () => {
  expect(solution('baabaa')).toBe(1);
  expect(solution('cdcd')).toBe(0);
});

test('배열의 마지막 원소와 인자로 주어지는 string 값이 같다면, 배열의 마지막 원소를 제거한다', () => {
  expect(deleteEqualStr(['a'], 'a')).toEqual([]);
});
test('배열의 마지막 원소와 인자로 주어지는 string 값이 다르다면, 주입받은 string 값을 배열에 넣는다', () => {
  expect(pushDiffStr(['a'], 'b')).toEqual(['a', 'b']);
});
