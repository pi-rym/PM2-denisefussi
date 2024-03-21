const { Router } = require('express')
const {moviesController, postMoviesController} = require('../controllers/moviesController')
const { validateMovies } = require('../middlewares/moviesVlidations')

const moviesRoute = Router()

//aca realizo la definicion de la ruta en si. la que activa el controller. Definamos la ruta de tipo get, cuando el cliente haga una request a /movies deberia impactar en el index y server.
moviesRoute.get('/', moviesController)
moviesRoute.post('/', validateMovies, postMoviesController )

module.exports = moviesRoute;
   
