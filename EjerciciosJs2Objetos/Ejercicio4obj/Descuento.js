const Producto = {
  item : "Taladro Bauker",
  precio : 19990,
  descuento : 10,

  aplicarDescuento : function() {
    const aplicado = (this.precio * ((100 - this.descuento)/100))
    //                   19.990   -   19.900 x 1-
    return aplicado
    
    
  },

  mostrarPrecio : function(){
    console.log(`El precio con descuento es de: ${this.aplicarDescuento()}`)
  }
}

Producto.aplicarDescuento()
Producto.mostrarPrecio()
