//Ejercicio con funciones

// Función saludo.
function saludo(nombre){
    console.log("Hola " + nombre)
}
saludo("Juan");

//Funcion calcular el area rectangulo
function calcularAreaRectangulo(alto, ancho){
    let area = (alto * ancho)
    return area 
}
let areaRectanculo = calcularAreaRectangulo(4, 5); //Guardamos el valor del return en una variable
console.log("El area del rectangulo es de: " + areaRectanculo); // Para imprimir necesitamos solamente llamar la variable que almacena el resultado de la funcion