const { Movies } = require("../types/class")
const moviesValidation = require('../utils/validations/moviesVlidations')
const Movie = require('../models/Movie')

const getFilms = async () => {
    try {
        //declaramos una respuesta
        const movies = await Movie.find()
        const moviesCollection = movies.map((movie) => {
            if(moviesValidation(movie)){
                return new Movies(movie);
            }
        })
        return moviesCollection;
    } catch (error) {
        throw new Error(error.message);        
    }
};

module.exports = { getFilms } 

//tambien se puede hacer asi, es la mas adecuada, porque un servicio solo exporta lo que le digo:

// module.exports = {
//     getFilms: async () => {
//         try {
//             //declaramos una respuesta
//             const { data } = await axios.get('https://students-api.up.railway.app/movies')
//             return data;
//         } catch (error) {
//             throw new Error(error);        
//         }
//     },
// }