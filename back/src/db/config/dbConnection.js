require('dotenv').config()
const mongoose = require('mongoose')
const { URI } = process.env

//exportamos la funcion
module.exports = async () => {
    await mongoose.connect(`${URI}`)
}