let persona = {
    nombre: "Jose",
    edad: 24,
    ciudad: "Granada",
    profesion: "Estudiante",
    hobbies: ["leer", "cine", "deporte"]
}

//Acceder y mostrar propiedades
console.log(persona.nombre + " " + persona.profesion)
console.log(persona.hobbies[1])

//Modificar una propiedad
persona.edad += 1;
console.log(persona.edad);

//Añade una nueva propiedad
persona.email = "tu.email@ejemplo.com"
console.log(persona.email)