function solution(nums, target) {
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

/*
  주어진 배열 안에서 두 수를 더해서
  특정 타겟의 값을 만들 수 있다고 가정했을 때,
  해당하는 두 수의 배열을 리턴하는 함수를 만들어라

  1. 배열의 원소가 target 숫자보다 작다면, 해당 인덱스와 그 다음 인덱스를 더해본다
  2. 그 다음 인덱스와의 합이 타겟 값과 다르다면 그 다음 인덱스를 더해본다
    - 타겟 값보다 큰 원소의 값은 계산하지 않는다
  3. 1-2를 반복해서 원하는 타겟 값을 찾아낸다
  4. 타겟 값과 일치하는 두 수의 인덱스 번호를 결과 배열에 넣어준다
*/

describe('Two Sum의', () => {
  it('case1은 [0, 1]', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(solution(nums, target)).toStrictEqual([0, 1]);
  });
  it('case2는 [1, 2]', () => {
    const nums = [2, 5, 5, 11];
    const target = 10;
    expect(solution(nums, target)).toStrictEqual([1, 2]);
  });
});
