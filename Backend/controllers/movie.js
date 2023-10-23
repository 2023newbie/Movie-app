const Movies = require('../models/Movies')
const Genres = require('../models/Genres')
const Videos = require('../models/Videos')
const response = require('../utils/res-type')
const resGenreType = require('../utils/res-genre-type')

exports.getTrending = (req, res, next) => {
  const page = +req.query.page || 1
  const movies = Movies.trending()
  const resData = response(movies, page)
  res.status(200).json(resData)
}

exports.getTopRate = (req, res, next) => {
  const page = +req.query.page || 1
  const movies = Movies.top_rate()
  const resData = response(movies, page)
  res.status(200).json(resData)
}

exports.getByGenre = (req, res, next) => {
  const page = +req.query.page || 1
  const genreId = req.query.genre
  if (!genreId) {
    res.status(400).json({ msg: 'Not found genre param.' })
  }

  const pointGenre = Genres.getById(+genreId)
  if (!pointGenre) {
    res.status(400).json({ msg: 'Not found that genre id.' })
  }

  const movies = Movies.getByGenre(+genreId)
  const resData = resGenreType(movies, page, pointGenre.name)
  res.status(200).json(resData)
}

exports.getTrailer = (req, res, next) => {
  const id = req.body.film_id
  if (!id) {
    res.status(400).json({ msg: 'Not found film_id param.' })
  }

  const video = Videos.getById(+id)
  if (!video) {
    res.status(404).json({ msg: 'Not found video.' })
  }

  res.status(200).json(video)
}

exports.getMovieByKeys = (req, res, next) => {
  const page = +req.query.page || 1
  const keyword = req.body.keyword.toLowerCase().trim()
  if (keyword === '' || !keyword) {
    res.status(400).json({ msg: 'Not found keyword param.' })
  }
  
  const genreId = Genres.getByName(req.body.genre).id
  const keys = {
    keyword,
    genreId,
    mediaType: req.body.mediaType,
    language: req.body.language,
    year: req.body.year
  }

  const movies = Movies.getByKeys(keys)
  const resData = response(movies, page)
  res.status(200).json(resData)
}
