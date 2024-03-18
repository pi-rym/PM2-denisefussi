const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    year: Int32,
    Director: String,
    Duration: String,
    genre: [],
    rate: Double,
    poster: String,
  });

const Movie =  model('Movie', movieSchema)

module.exports = Movie;