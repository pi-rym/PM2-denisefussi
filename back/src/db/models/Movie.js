const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: [String], 
  rate: Number,
  poster: String
});
//el model interactua con la base de datos. y trae los datos determinados a la coleccion. 
const Movie =  model('Movie', movieSchema)

module.exports = Movie;