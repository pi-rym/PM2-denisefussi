const { getFilms, postFilms } = require("../services/movies")

const moviesController = async (req, res) => {
    try {
        const response = await getFilms();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const postMoviesController = async (req, res)=>{

    try {
      await  postFilms(req.body)

      res.status(201).json({message:"Peli creada exitosamente"})

    } catch (error) {
        res.status(400).json({error:error.message})
    }

}
//si hay un error en la ruta ovies, va a caer en mi catch, en mi error 500. sino, 404.
module.exports = {
    moviesController,
    postMoviesController
};