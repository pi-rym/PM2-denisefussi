// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado
class CarritoCompra {
    constructor(){
        this.products = []
    }

    agregarProducto(product){
        this.products.push(product)
    }
    calcularTotal(){
        let total = 0;
        for (const item of this.products) {
           const total = item.price * item.quantity
        }
        return total
    }
    aplicarDescuento(porcentaje){
        const subtotal = this.calcularTotal()
        const descuento = this.calcularTotal() * (porcentaje/100)
       return subtotal - descuento
    }
}

module.exports = CarritoCompra;

//PROMESAS 
const promesaResuelta = new Promise((resolve, reject), ()=>{
    resolve('se resuelve siempre')
})
const promesaRechazada = new Promise((resolve, reject), ()=>{
    reject('Razon del rechazo')
})

//si todo salio bien, voy a ejecutar una funcion con .then - succes handler. 
const promise = axios.get('http://');
promise
.then((res) => {})
//errpr handler 
.catch((err) => {})

const fetchMovies = async function myFunctionAsync(){
    try {
        const data = axios.get('http://')
    } catch (err) {
        
    }
}
fetchMovies()

//como instalar axios : npm i axios como una dependencia. despues requerirlo const axios = require() nos permite realizar solicitudes de tipo get y me va a retornar siempre una promesa pendiente axios.get(''). pregunta de entrevista. ME RETORNA UNA PROMESA. 
// particularidades: siempre retornan promesas. Cuando axios realiza una solicitud y tiene un resultado favorable. Cuando realiza una solicitud y tiene resultado desfavorable, rechaza la promesa y arroja un error. 
// vamos a utilizar tambien metodo POST< PUT y DELETE. 
