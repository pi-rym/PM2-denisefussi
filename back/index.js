require('dotenv').config();
const { PORT } = process.env

//tiene la resposabilidad de levantar el servidor 
const app = require('./src/server')
const dbCon = require('./src/config/dbConnection')

dbCon()
.then(() => {
    app.listen(PORT, "localhost", ()=> console.log(`Server is listening on port ${PORT}`))
}).catch((err) => console.log("problemas de conexion con la DB", err.message))
