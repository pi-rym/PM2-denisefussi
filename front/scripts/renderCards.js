const filmSection = document.getElementById('films') 
const axios = require('axios')

const renderCards = (data) => {
    data.forEach((movie) => {
    const movieElement = document.createElement('div')
    const containerMovie = document.createElement('div')
    containerMovie.classList.add('div-movie')

    movieElement.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`

    containerMovie.innerHTML = `
    <h3>${movie.title} (${movie.year})</h3>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Duracion:</strong> ${movie.duration}</p>
    <p><strong>Genero:</strong> ${movie.genre.join(', ')}</p>
    <p><strong>Rate:</strong> ${movie.rate}</p>
    `

    filmSection.appendChild(movieElement)
    movieElement.appendChild(containerMovie)
    })
}

//PROMESAS

const getFilms = () => {
    axios.getAdapter('')
    .then(({data}) => data.forEach(renderCards))
    .catch((error) => console.log(error.message))
}

module.exports = renderCards;

