
//funcion para sumar dos numeros
function sumar(numero1, numero2){
    return numero1 + numero2;
}

//llamada de funciones
let resultadosuma1= sumar(4,6)
let resultadosuma2= sumar(5,2)

console.log(resultadosuma1, resultadosuma2)

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
