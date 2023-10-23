const express = require('express');
const cors = require('cors');

const movieRoutes = require('./routes/movie');
const auth = require('./middleware/auth');

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/movies', auth, movieRoutes)

app.use((req, res, next) => {
  res.status(404).json({message: 'Route not found.'})
})

app.listen(4000)