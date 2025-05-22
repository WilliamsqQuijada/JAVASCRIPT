// ARREGLOS EN JS
// PERMITI ALAMACENAR MULTIPLES VALORES EN UNA SOLA VARIABLE
// SE ENCAPSULAN EN []
// PUEDE ALAMCENAR CUALQUIER TIPO DE DATO

let arreglo = [];

//AGREGANDO O MODIFICANDO ARREGLO
arreglo[0] = 13;
arreglo[1] = 20;
arreglo[5] = "Hola";
arreglo[4] = 30;
arreglo[0] = 15  //CAMBIANDOLE EL VALOR

//MOSTRAR EL ARREGLO
console.log(arreglo);
console.log(`La casilla 0 tiene: ${arreglo[0]}`);
console.log(`La casilla 1 tiene: ${arreglo[1]}`);
console.log(`La casilla 2 tiene: ${arreglo[2]}`);
console.log(`La casilla 5 tiene: ${arreglo[5]}`);

console.log(arreglo.length)


// SINTAXIS SIMPLIFICADA 

let arreglo2 = [12, 34, "hola", 56];
console.log(arreglo2.length) // VISUALIZAR LA CANTIDAD
console.log(arreglo2)
console.log(`La casilla 0 tiene: ${arreglo2[0]}`);
arreglo2[5] = "JAVASCRIPT"; // AGREGAR ELEMENTOS
arreglo2[5] = "PHP" // MODIFICAR ELEMENTO
console.log(arreglo2.length) 
arreglo2.push(32); // AGREGAR VALOR AL FINAL
arreglo2.unshift("Inicio"); // AGREGAR VALOR AL INICIO
arreglo2.pop(); // ELIMINAR EL ULTIMO VALOR
arreglo2.shift(); // ELIMINAR EL PRIMER VALOR
arreglo2.splice(2,1); // ELIMINAR SEGUN LA POSICION         

// ITERAR ELEMENTOS DE ARREGLO CON CICLOS
// RECORRER CON FOR
for (let i = 0; i < arreglo2.length; i ++){
    console.log(arreglo2[i])
    console.log(`Arreglo ${i} = ${arreglo2[i]}`)
}

// RECORRER CON WHILE
let j = 0;
while(j < arreglo2.length){
    console.log(arreglo2[j]);
    j ++;
}








