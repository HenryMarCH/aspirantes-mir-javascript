// escribe la función sum acá

function sum(arreglo) {
    return arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0