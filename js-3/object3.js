let receta = {

}

receta.Nombre = "Sandwich"
receta.Ingredientes = []

receta.Ingredientes.push({ Nombre: "Pan", Cantidad: 2 });

receta.Ingredientes.push({ Nombre: "Queso", Cantidad: 1 });

let totalCantidad = 0;
for (let i = 0; i < receta.Ingredientes.length; i++) {
    totalCantidad += receta.Ingredientes[i].Cantidad;
}

console.log(receta.Ingredientes[0].Nombre)
console.log("La suma de las cantidades de los ingredientes es:", totalCantidad)