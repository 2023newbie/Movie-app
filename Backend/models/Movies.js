const fs = require('fs')
const path = './data/movieList.json'
const pagination = require('../utils/paging')
const sortDataByProp = require('../utils/sort-data-by-prop')

module.exports = {
  all: function () {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  },
  trending: function () {
    const movies = this.all()
    sortDataByProp(movies, 'popularity')
    return pagination(movies)
  },
  top_rate: function () {
    const movies = this.all()
    sortDataByProp(movies, 'vote_average')
    return pagination(movies)
  },
  getByGenre: function (genreId) {
    const movies = this.all()
    const pointMovies = movies.filter(m => m.genre_ids.includes(genreId))
    return pagination(pointMovies)
  },
  getByKeys: function ({ keyword, genreId, mediaType, language, year }) {
    const movies = this.all()
    const pointMovies = movies
      .filter(
        m =>
          m.overview.toLowerCase().includes(keyword) ||
          m.title?.toLowerCase().includes(keyword)
      )
      .filter(m => {
        return genreId === '' || m.genre_ids.includes(genreId)
      })
      .filter(m => mediaType === '' || m.media_type === mediaType)
      .filter(m => language === '' || m.original_language === language)
      
      .filter(
        m => m.first_air_date?.includes(year) || m.release_date?.includes(year)
      )
      

    return pagination(pointMovies)
  },
}
