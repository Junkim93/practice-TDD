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

const getData = index => {
  const item = JSON.parse(window.localStorage.getItem(index))
  if (item.name !== '' && item.meaning !== '') {
    return item
  } else {
    return
  }
}

const deleteData = index => {
  window.localStorage.removeItem(index)
}

const clearData = () => {
  window.localStorage.clear()
}

export { getLength, getObjKeys, getItemList, getData, deleteData, clearData }
