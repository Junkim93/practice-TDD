function handleData() {
  return {
    setData(name, meaning) {
      return {
        index: localStorage.length,
        name: name,
        meaning: meaning,
        status: "name" || "meaning"
      };
    },

    getLength(val) {
      return val.length;
    },

    getObjKeys(obj) {
      return Object.keys(obj);
    },

    getItemList(indexArr, fn) {
      return indexArr.reduce((acc, curr) => {
        const value = fn(curr);
        acc.push(value);
        return acc;
      }, []);
    }
  };
}

module.exports = handleData;
