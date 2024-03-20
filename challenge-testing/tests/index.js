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
        total += item.price * item.quantity
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
