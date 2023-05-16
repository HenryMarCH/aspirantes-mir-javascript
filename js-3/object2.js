const persona = {
    nombre: "Henry",
    edad: 29,
    ciudad: "Lima",
    profesion: "Cocinero"
}

console.log(persona)

function presentacion(persona) {
    return `Hola mi nombre es ${persona.nombre} tengo ${persona.edad} años y vivo en ${persona.ciudad}`
}

const mensaje = presentacion(persona)
console.log(mensaje)

persona.hobbies = ["Videojuegos", "Programar", "Cocinar"]
console.log(persona.hobbies)

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);

}
