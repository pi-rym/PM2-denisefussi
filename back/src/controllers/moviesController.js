const moviesService = require('../services/movies')

const moviesController = async (req, res) => {
    try {
        const response = await moviesService.getFilms();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
//si hay un error en la ruta ovies, va a caer en mi catch, en mi error 500. sino, 404.
module.exports = moviesController;