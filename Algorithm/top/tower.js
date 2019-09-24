function tower(data) {
  const _data = data;

  return {
    returnReceivingTower() {
      return _data.map((el, i, arr) => {
        for (i--; i > -1; i--) {
          // i가 0일 경우 반복문을 빠져나가고 0을 리턴한다. (첫 번째 인덱스의 왼쪽에는 어떤 수신탑도 없기 때문)
          if (arr[i] > el) break; // 현재 원소는 무조건 arr[i] 값보다 오른쪽에 있는 값이다. (반복문에서 -1 해주기 때문)
        } // 수신할 탑을 찾으면 조건문을 빠져나오고, 해당 탑의 인덱스 값을 반환한다.
        return ++i;
      });
    }
  };
}

module.exports = tower;
