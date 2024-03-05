const filmsSection = document.getElementById('films') 

function films(movie) {
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

    filmsSection.appendChild(movieElement)
    movieElement.appendChild(containerMovie)
}
tempData.forEach(films)

console.log(tempData);
