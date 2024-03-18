require('dotenv').config()
const { BASE_URL} = process.env;
const axios = require('axios')
const {Movies} = require("../types/class")
const moviesValidation = require('../utils/validations/moviesVlidations')

const getFilms = async () => {
    try {
        //declaramos una respuesta
        const { data } = await axios.get(BASE_URL)
        const movies = data.map((movie) => {
            if(!moviesValidation(movie)){
                throw new Error ("Missing requires fields");
            }
            return new Movies(movie);
        })
        return data;
    } catch (error) {
        throw new Error(error);        
    }
};

module.exports = { getFilms, }

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