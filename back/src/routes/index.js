
//Aca router se requiere de express. estamos haciendo un destructuring de los objetitos de express e instanciando router. 
const { Router } = require('express')
const moviesRoute = require('./moviesRoute')
//instancia de Router accediendo a todos sus metodos y propiedades
const router = Router()

//metodo use que va a ser la ruta de movies.
router.use('/movies', moviesRoute)

module.exports = router