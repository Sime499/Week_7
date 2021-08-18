const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/add-movie', (req, res) => {
    res.render('add-movie')
})

router.get('/:movieId', (req, res) => {
    res.send('movie ID')
})

router.post('/add-movie', (req, res) => {


    const movieTitle = req.body.movieTitle
    const movieposterUR = req.body.movieposterUR
    const movieDescription = req.body.movieDescription
    const movieGenre = req.body.movieGenre

    let movie = { title: movieTitle, posterURL: movieposterUR, description: movieDescription, genre: movieGenre }

    movies.push(movie)
    res.render('index', { allmovies: movies })
})

module.exports = router