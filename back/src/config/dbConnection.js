require('dotenv').config()
const mongoose = require('mongoose')

//const URI = procces.env.URI

const dbCon = async () => {
    await mongoose.connect("mongodb+srv://denisefussi:NBhRbjf5RPtqIlMw@micluster.tmcvrg4.mongodb.net/MovieDB?retryWrites=true&w=majority&appName=miCluster")
}

module.exports = dbCon;