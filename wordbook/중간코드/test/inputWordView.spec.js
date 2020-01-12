import inputWordView from "../component/InputWordView";

describe("inputWordView()의", () => {
  let view, triggerEl, updateEl;

  beforeEach(() => {
    triggerEl = document.createElement("button");
    updateEl = document.createElement("li");
    // fn = toggle;
    view = inputWordView({ triggerEl, updateEl }, fn);
  });

  // it("wordArr을 주입하지 않으면 에러를 던진다.", () => {
  //   const actual = () => (view = inputWordView(null, updateEl))
  //   expect(actual).toThrowError()
  // });

  // it("triggerEl을 주입하지 않으면 에러를 던진다.", () => {
  //   const actual = () => (view = inputWordView(wordArr, { triggerEl }))
  //   expect(actual).toThrowError()
  // });

  // it("updateEl을 주입하지 않으면 에러를 던진다.", () => {});

  describe("updateView()는", () => {
    it("wordArr의 name 프로퍼티를 화면에 출력한다.", () => {
      const expected = "Hello";
      view.updateView();
      expect(updateEl.innerHTML).toBe(expected);
    });

    it("wordArr의 index 값을 엘리먼트의 key 값으로 지니고 있다.", () => {
      const expected = 0;
      view.updateView();
      expect(updateEl.key).toBe(expected);
    });
  });
});

// 맨 처음을 생각하자

// 사용자는 이름과 뜻을 입력한다.
// 이름과 뜻을 입력하고 나서, 버튼을 누른다.
// 입력받은 데이터가 로컬 스토리지와 배열에 저장된다.

// 인자로 options, 단어를 받아와야 한다. 그래야 뿌려주니까
// 클릭 이벤트 누르면 (저장이 된다.)
// 화면에 단어가 짠 하고 나온다.

// 1. 기존에 단어 배열이 있어서 바로 화면에 뿌려주는 경우
// 2. 버튼을 눌러서 화면에 뿌려주는 경우

// 그냥 단어를 받으면 화면에 뿌려준당 (영어이름만 표시된당)
// 반복문 도는 것을 따로 만든당
