const tower = require('./tower');

describe('tower() 모듈의', () => {
  const heights = [6, 9, 5, 7, 4];

  const t = tower(heights);

  describe('returnReceivingTower()는', () => {
    it('주어진 배열의 원소값에서 인덱스가 자신보다 작은 원소의 크기가, 자신보다 크면 해당 위치의 인덱스를, 큰 값이 없으면 0을 반환하는 배열을 리턴한다.', () => {
      const expected = [0, 0, 2, 2, 4];

      expect(t.returnReceivingTower()).toStrictEqual(expected);
    });
  });
});
