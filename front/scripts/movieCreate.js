const axios = require('axios')

const genres = ['Action', 'Adventure', 'Sci-fi', 'Drama', 'Comedy', 'Terror', 'Romance'];

const btnSubmit = document.getElementById('btnSubmit')
const btnClean = document.getElementById('btnClean')
const options = document.getElementById('options')

const title = document.getElementById('title')
const year = document.getElementById('year')
const director = document.getElementById('director')
const duration = document.getElementById('duration')
const rate = document.getElementById('rate')
const poster = document.getElementById('poster')

function renderGenres() {
    options.innerHTML = ''
    for (const genre of genres) {
        const input = document.createElement
        ('input')
        const label = document.createElement
        ('label')

        input.type = "checkbox"
        input.id = genre
        input.name = "genre[]"
        input.value = genre

        label.htmlFor = genre
        label.textContent = genre;

        options.appendChild(input)
        options.appendChild(label)
    }
    return options;
}
renderGenres()

function validateCheckbox() {
    const checkBoxes = document.querySelectorAll('input[name="genre[]"]')

    for (const i of checkBoxes) {
        if (i.checked) {
            i.classList.add("selected")
            return true;   
        }   
    }
}

function buttonSubmit(event) {
    event.preventDefault();
    const genres = validateCheckbox();

    const postFilm = async () => {
        try {
        
        const postMovie = await axios.post('http://localhost:3000/movies', {
            title: title.value,
            year: year.value,
            director: director.value,
            duration: duration.value,
            rate: rate.value,
            poster: poster.value,
            genre: genres
            });

            alert('Película agregada exitosamente');
        } catch (error) {
            if (![title.value, year.value, director.value, duration.value, rate.value, poster.value, genres].every(Boolean)) {
                alert('Faltan algunos campos');
            } else {
                alert('Error al agregar la película. Inténtelo de nuevo más tarde.');
            }
        }
    }
 postFilm();
}


function cleanInputs() {
    title.value = ''
    year.value = ''
    director.value = ''
    duration.value = ''
    rate.value = ''
    poster.value = ''

    const checkBoxes = document.querySelectorAll('input[name="genre[]"]')

    for (const i of checkBoxes) {
        i.checked = false;
        i.classList.remove('selected')
    }
}

btnSubmit.addEventListener('click',buttonSubmit)
btnClean.addEventListener('click', cleanInputs)