// ¿Que es un objeto? 

/*Es una coleccion de propiedades, donde cada propiedad tiene un nombre
y un valor*/

//Crear objeto
let miCoche = {
    marca: "Toyota",
    modelo: "Corola",
    año: 2020,
    color: "Azul",
    esAutomatico: true
};

//Acceder a las propiedades
console.log(miCoche.marca); // Imprime Toyota
console.log(miCoche.color); // Imprime Azul

//Modificar Propiedades
miCoche.color = "Rojo";
miCoche.año = 2021;
console.log(miCoche.color); // Imprime rojo

//Asignar nuevas propiedades
miCoche.kilometraje = 50000; //Añade nuevas propiedades
console.log(miCoche.kilometraje);

//Eliminar propiedades
delete miCoche.esAutomatico; //Borra esAutomatico
console.log(miCoche.esAutomatico) //Imprime undefined -> es decir, esta borrado

