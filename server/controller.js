const movies = require('./db.json');
let globalId = 11

module.exports = {
    getAllMovies: (req, res) => {
    res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        //console.log(req.body)
        const {title, rating, imageURL} = req.body
        const newMovie = {
            title,
            rating,
            imageURL,
            id: globalId
        }

        movies.push(newMovie)
        console.log(movies)
        res.status(200).send(movies)
        globalId++
    }
};