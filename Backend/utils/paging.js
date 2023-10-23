module.exports = arr => {
  const numberPage = Math.ceil(arr.length / 20)
  const returnArr = []
  returnArr.length = numberPage
  let itemIndex = 0
  for (let i = 0; i < numberPage; i++) {
    const arrItem = []
    for (let j = 0; j < 20; j++) {
      if (!arr[itemIndex]) {
        break
      }
      arrItem[j] = arr[itemIndex]
      itemIndex++
    }
    returnArr[i] = arrItem
  }
  return returnArr
}
