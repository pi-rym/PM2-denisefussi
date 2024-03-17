//tiene la resposabilidad de levantar el servidor 
const app = require('./src/server')

const PORT = 3000;

app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`))

