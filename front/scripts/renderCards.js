const filmSection = document.getElementById('films') 

 function renderCards(movie) {
    const movieElement = document.createElement('div')
    const containerMovie = document.createElement('div')
    //me falta agregar una clase para el css para que quede el texto dentro de la img.
    containerMovie.classList.add('divMovie')

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
    }


module.exports = renderCards;

