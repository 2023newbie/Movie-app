module.exports = (data, property) => {
  for (let i = 1; i <= data.length; i++) {
    for (let j = 0; j < data.length - i; j++) {
      if (data[j + 1][property] > data[j][property]) {
        ;[data[j + 1], data[j]] = [data[j], data[j + 1]]
      }
    }
  }
}