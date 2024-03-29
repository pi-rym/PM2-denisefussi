// function moviesValidation(movieObject) {
//     if (!movieObject.title || !movieObject.year || !movieObject.director){
//         throw new Error ('Missing equired fields');
//     } 
//     return true;
// }

const validateMovies = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body

    if(![title, year, director, duration, genre, rate, poster].every(Boolean)) return res.status(400).json({message: "Faltan datos por completar"})

    next()
}

module.exports = {
    validateMovies }