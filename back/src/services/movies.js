const { Movies } = require("../types/class")
const moviesValidation = require('../middlewares/moviesVlidations')
const Movie = require('../db/models/Movie')

module.exports = {
    getFilms: async () => {
    try {//declaramos una respuesta
        const movies = await Movie.find()
        const moviesMap = movies.map((movie) => {
            if(moviesValidation(movie)){
                return new Movies(movie);
            }
        })
        return moviesMap;
    } catch (error) {
        throw new Error(error.message);        
    }
},
   
    postFilms: async (movie) => {
        try {
            const newMovie = await Movie.create(movie)

            return newMovie
        } catch (error) {
            throw new Error(error.message);  
        }
    },

    updateMovie: async (title) => {
        try {
            Movie.findOneAndUpdate({ title }, { $inc: {}})
        } catch (error) {
            throw new Error(error.message);  
        }
    },
}

