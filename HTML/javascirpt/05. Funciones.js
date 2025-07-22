/*Funciones -> Organizar el codigo en bloques y esos bloques serán reutilizados para devolver valores.

    function nombreDeLaFuncion(){
    // Aquí va codigo de la funcion
    console.log("Hola")}

    //Para llamarla
    nombreDeMiFuncion();
 */

function nombreDeLaFuncion(){
    console.log("¡Hola es mi primera funcion")
}
nombreDeLaFuncion();

    //FUNCION CON PARAMETROS
function saludar(nombre){ //<- Nombre es el parametro
    console.log("Hola " + nombre + " !")
}
saludar(Juan);

//Funciones con retorno -> para devolver resultados
function sumar(a, b){
    let resultado = a + b;
    return resultado;
}
let sumaDeNumeros = sumar(5, 3);
console.log(sumaDeNumeros);

console.log(sumar(10,2));