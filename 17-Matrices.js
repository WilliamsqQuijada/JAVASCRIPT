// MATRICES
// MTARIZ 2*3
let matriz = [[100,200,300], [400,500]];

console.log(matriz);

// AGREGAR VALORES

matriz[1][2] = 600;
console.log(matriz)
console.log(matriz[0][2]) // BUSCAR UN VALOR DENTRO DE LA MADTRIZ
matriz[0][0] = 101;
console.log(matriz) // MODIFICAR
console.log(`El espacio [0][2] tiene: ${matriz[0][2]}`)


// ITERAR UNA MATRIZ PARTE 1
// SE NECESITAN 2 CICLOS ANIDADOS PARA RECORRER LAS MATRICES
// 1 CICLO PARA EL EXTERNO [] Y EL OTRO PARA EL INTERNO [[]]

let matriz1 = [[100,200,300], [400,500,600]];
console.log(matriz1);

// NUMERO DE REGLONES
console.log(matriz1.length);
// NUMERO DE COLUMNAS
console.log(matriz1[0].length);
console.log(matriz1[1].length);

// RECORRES REGLONES 
for(let i = 0; i < matriz1.length; i ++){
    console.log(matriz1[i]);

    // RECORRER COLUMNAS
    for (let j = 0; j < matriz1[i].length; j++){
        console.log(matriz1[i][j]);
    }
}