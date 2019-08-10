const AppView = require("./AppView");

// 사용할 숫자 값이 들어있는 배열을 반환한다.
// 이때 불러온 값은 5로 가정한다.
test("Add childNode of output", () => {
  const GCD = 5;
  const LCM = 5;
  const p = `최소공약수: ${GCD}, 최대공배수: ${LCM}`;
  expect(AppView.createPTag(GCD, LCM)).toBe(p);
});

// 로직을 어떻게 짤까

// 값 전달
// 1. 입력받은 숫자 값을 DOM으로 불러 온다.
// 2. 입력받은 숫자 값을 계산 로직에 전달한다.
// 3.

// 태그에 결과값 출력
// 1. 버튼 클릭에 대한 이벤트리스너를 만든다
// 2. 이벤트 리스너는 인풋에 입력된 숫자값을 반환한다.

// 1. output 클래스에 p 태그를 추가한다.
// 2. p 태그의 innerHTML에 계산 로직의 결과값을 추가한다.
// 3. output 태그의 자식으로 추가한다.
// 4. input의 value를 초기화 한다.

// 숫자 값 배열 리턴
// 리턴 한 값을 계산하기 위해 넘겨줘야 함

// 넘겨 받은 결과 값 받기
// 클릭하는 순간 평가해야 함
