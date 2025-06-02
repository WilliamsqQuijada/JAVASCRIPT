// FUNCIONES INCORPORADAS A JS

// OBTENER EL LARGO DE LA CADENA

let cadena1 = "hola";
console.log(cadena1.length);

// NO PODEMOS MODIFICAR UNA CADENA EN JS YA QUE SON INMUTABLES
// PERO SI PODEMOS ASIGNAR UNA NUEVA CADENA

cadena1 = "viva";
console.log(cadena1);

// RECORRER LOS CARACTERES

for(let i = 0; i < cadena1.length; i ++){
    console.log(i);
    console.log(cadena1[i]);
}