const changeListener = []

export const subscribe = cbFn => {
  changeListener.push(cbFn)
}

const publish = word => {
  changeListener.forEach(changeListener => changeListener(word))
}

export const dataService = () => {
  const wordList = []

  return {
    setWordFormat(name, meaning) {
      const data = {
        index: localStorage.length,
        name: name,
        meaning: meaning,
        status: 'name' || 'meaning'
      }

      return data
    },

    addWord(word) {
      wordList.push(word)
      localStorage.setItem(word.index, JSON.stringify(word))

      publish(word)
    },

    getWordList() {
      return wordList
    }
  }
}

// 저장하는 액션과 화면에 뿌려주는 액션을 구분하기
// 근데 저장하는 액션이 실행됐을 때, 화면에서 알아차릴 수 있어야함
