const dataStorage = () => {
  return {
    saveData(data) {
      if (!data) {
        throw Error(this.errorMessages.dataNullError)
      }

      if (data && Object.prototype.toString.call(data) !== '[object Object]') {
        throw Error(this.errorMessages.dataTypeError)
      }

      window.localStorage.setItem(data.index, JSON.stringify(data))
    },

    getData(index) {
      const item = JSON.parse(window.localStorage.getItem(index))
      if (item.name !== '' && item.meaning !== '') {
        return item
      } else {
        return
      }
    },

    deleteData(index) {
      window.localStorage.removeItem(index)
    },

    clearData() {
      window.localStorage.clear()
    },

    errorMessages: {
      dataNullError: '데이터를 주입하지 않았습니다.',
      dataTypeError: '데이터의 타입이 객체가 아닙니다.'
    }
  }
}

export default dataStorage
