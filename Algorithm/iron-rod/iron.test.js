const iron = require('./iron');

describe('iron() 모듈의', () => {
  it('초기값을 주입하지 않으면 에러를 던진다.', () => {
    const actual = () => iron();
    expect(actual).toThrowError();
  });

  // 테스트값 설정
  const arrangement = '()(((()())(())()))(())';
  const test = iron(arrangement);

  describe('returnCutIron()은', () => {
    it('testcode', () => {
      expect(test.returnCutIron()).toBe(17);
    });
  });
});

// 1. stack 구조로 풀어보자.
// 2. 배열에 원소를 넣는다. (단순 push)
// 3. 배열에 들어간 원소를 판별한다. '('
// 4. 원소가 '(' 면 count를 1 증가시킨다.
// 5. 원소가 ')' 고, 이전 원소가 '(' 면 count는 1 감소시키고, razor 카운트를 올린다.
// 6. 원소가 ')' 고, 이전 원소가 ')' 면 count를 감소시키고, 레이저 커팅 연산을 한다.
//
