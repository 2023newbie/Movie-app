module.exports = (data, page) => {
  const length = data.length
  return {
    results: data[page - 1] || [],
    page,
    total_pages: length
  }
}