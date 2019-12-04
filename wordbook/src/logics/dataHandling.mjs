import dataStorage from './dataStorage.mjs'

const handleData = () => {
  return {
    setData(name, meaning) {
      const data = {
        index: localStorage.length,
        name: name,
        meaning: meaning,
        status: 'name' || 'meaning'
      }

      return data
    },

    getLength(val) {
      return val.length
    },

    getObjKeys(obj) {
      return Object.keys(obj)
    },

    getItemList(indexArr, fn) {
      const itemList = indexArr.reduce((acc, curr) => {
        const value = fn(curr)
        acc.push(value)
        return acc
      }, [])

      return itemList
    }
  }
}

export default handleData
