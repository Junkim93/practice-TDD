const setData = (name, meaning) => {
  const data = {
    index: localStorage.length,
    name: name,
    meaning: meaning,
    status: 'name' || 'meaning'
  }

  return data
}

const getLength = val => {
  return val.length
}

const getObjKeys = obj => {
  return Object.keys(obj)
}

const getItemList = (indexArr, fn) => {
  const itemList = indexArr.reduce((acc, curr) => {
    const value = fn(curr)
    acc.push(value)
    return acc
  }, [])

  return itemList
}

export { setData, getLength, getObjKeys, getItemList }
