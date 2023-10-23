module.exports = (data, page, genre) => {
  const length = data.length
  return {
    results: data[page - 1] || [],
    page,
    total_pages: length,
    genre_name: genre
  }
}