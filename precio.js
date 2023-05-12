//ejercicio descuento
function calcularPrecio(precio,descuento){
    if (precio <= 0 || descuento < 0 || descuento >100){
return "los valores son invalidos";
    } else if(descuento===0){
        return "el precio sin descuento es $" + precio;
    } else {
        var precioFinal = precio - (precio*descuento/100);
        return"el precio con descuento es $" + precioFinal;
    }
}
console.log (calcularPrecio (200,20))
