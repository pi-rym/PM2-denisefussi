const axios = require('axios')
const renderCards = require("./renderCards")

//PROMESAS

//const getFilms = () => {
    //axios.get('https://students-api.up.railway.app/movies')
    //.then(({ data })=> data.forEach(renderCards))
  //  .catch((error)=> console.log(error.message))
//}

//Async Await 

const getFilms = async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/movies')
        console.log(data);
        data.forEach(renderCards)
    } catch (error) {
        console.log(error.message);
        
    }
}



module.exports = getFilms;