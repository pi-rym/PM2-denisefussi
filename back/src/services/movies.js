const { Movies } = require("../types/class")
const moviesValidation = require('../utils/validations/moviesVlidations')
const Movie = require('../models/Movie')

module.exports = {
    getFilms: async () => {
    try {
        //declaramos una respuesta
        const movies = await Movie.find()
        // const moviesCollection = movies.map((movie) => {
        //     if(moviesValidation(movie)){
        //         return new Movies(movie);
        //     }
        // })
        return movies;
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

