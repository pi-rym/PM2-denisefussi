const { getFilms, postFilms } = require("../services/movies");

const moviesController = async (req, res) => {
  try {
    const response = await getFilms();
    res.status(200).json({error: false, data: response});
  } catch (error) {
    res.status(500).send({error: true, message:error.message});
  }
};

const postMoviesController = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body
    const postMovie = await postFilms({
        title, 
        year, 
        director, 
        duration, 
        genre, 
        rate, 
        poster   
    });
    res.status(201).json({error: false, data:postMovie, message: "Peli creada exitosamente" });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};
//si hay un error en la ruta ovies, va a caer en mi catch, en mi error 500. sino, 404.
module.exports = {
  moviesController,
  postMoviesController,
};

//const postawait postFilms(req.body);
//