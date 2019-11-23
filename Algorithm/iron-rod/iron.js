function iron(arrangement) {
  if (!arrangement) throw Error();

  const stack = [];
  let iron = 0;
  let razor = 0;

  return {
    returnCutIron() {
      stack.push(arrangement[i]);

      if (arr[i] === '(') iron++;
      if (arr[i] === ')' && arr[i - 1] === '(') {
        iron--;
        razor++;
      }
      if (arr[i] === ')' && arr[i - 1] === ')') {
        iron--;
        // 현재 커팅된 쇠막대기 수를 연산할 수 있는 식
      }
    }
  };
}

module.exports = iron;
