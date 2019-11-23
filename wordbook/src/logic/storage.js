function storage() {
  return {
    saveData(index, data) {
      if (!index) {
        throw Error(this.errorMessages.indexNullError);
      }

      if (!data) {
        throw Error(this.errorMessages.dataNullError);
      }

      if (data && Object.prototype.toString.call(data) !== "[object Object]") {
        throw Error(this.errorMessages.dataTypeError);
      }

      window.localStorage.setItem(index, JSON.stringify(data));
    },

    getData(index) {
      return JSON.parse(window.localStorage.getItem(index));
    },

    deleteData(index) {
      window.localStorage.removeItem(index);
    },

    clearData() {
      window.localStorage.clear();
    },

    errorMessages: {
      indexNullError: "데이터의 인덱스 번호를 주입하지 않았습니다.",
      dataNullError: "데이터를 주입하지 않았습니다.",
      dataTypeError: "데이터의 타입이 객체가 아닙니다."
    }
  };
}

module.exports = storage;
