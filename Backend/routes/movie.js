const express = require('express');

const movieContrlers = require('../controllers/movie');

const router = express.Router()

router.get('/trending', movieContrlers.getTrending)
router.get('/top-rate', movieContrlers.getTopRate)
router.get('/discover', movieContrlers.getByGenre)
router.post('/video', movieContrlers.getTrailer)
router.post('/search', movieContrlers.getMovieByKeys) 

module.exports = router