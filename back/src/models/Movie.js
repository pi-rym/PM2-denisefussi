const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String,
  });
//el model interactua con la base de datos. 
const Movie =  model('Movie', movieSchema)

module.exports = Movie;