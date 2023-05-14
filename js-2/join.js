function join(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i] + " ";
    }
    return result.trim();
}

console.log(join(["Hola", "mundo", "!"])); // "Hola mundo !"
console.log(join([1, 2, 3, 4])); // "1 2 3 4"
console.log(join(["Otro", "ejemplo", "mas!"])); // "Otro ejemplo mas!"