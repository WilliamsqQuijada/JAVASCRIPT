// FUNCIONES EN JS
// BLOQUE DE CODIGO REUTILIZABLE QUE HACE UNA TAREA EN PARTICULAR

// DEFINIMOS LA FUNCION
function sumar(a,b){
    let resultadosuma = a + b;
    console.log(resultadosuma) // AQUI EL RETURN REGRESA EL RESULTADO <- ESTO NO SE PONE
    return resultadosuma;
}

// LE DAMOS LOS VALORES A LAS VARIBALES
let ar1 = 5;
let ar2 = 5;
let resultar = sumar(ar1, ar2);
console.log(`El resultado de la suma es: ${resultar}`);

// PASO POR VALOR A LAS FUNCIONES, VALORES PRIMITIVOS
// NO SE SOBREESCRIBE, SOLO MANDA UNA COPIA.
function valor(numero){
    numero = 20;
    console.log(numero);
}

let num = 10;
valor(num);
console.log(num);

// PASO POR REFERENCIA, ARREGLOS

function cambio(parametro){
    parametro[0] = 20;
}

let arreglo = [10];
console.log(arreglo[0])
cambio(arreglo);
console.log(arreglo[0])


// CADENA Y FUNCIONES
// CADENAS INMUTABLES EN JS




