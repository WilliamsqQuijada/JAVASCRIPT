// SUBCADENAS EN JS

let cadena = "hola mundo";
console.log(cadena.length)
// EXTRAER PARTES DE UNA CADENA
for (i = 0; i < cadena.length; i ++){
    console.log(`${i} -> ${cadena[i]}`);
}
// substring(indice inicio, indice final)

let cadena1 = cadena.substring(0,4);
console.log(cadena1)
let cadena2 = cadena.substring(5,10);
console.log(cadena2)

// CONCATENAR CADENAS

let cadena3 = cadena1 + " " + cadena2;
console.log(cadena3)
let cadena4 = `${cadena1} ${cadena2}`
console.log(cadena4);

// CONVERTIR CADENA A NUMEROS
// parseInt() para convertir string a integer

let a = "20", b = "30";
console.log(a + b);
let suma = parseInt(a) + parseInt(b);
console.log(suma);

// CONVERTIR NUMEROS A CADENA
// toString() para convertir integer a string

let c = 20, d = 20;
console.log(c + d);
let conca = c.toString() + d.toString();
console.log(conca)


// VALOR ABSOLUTO

let valor = -10;
let valorabsoluto = Math.abs(valor);
console.log(valorabsoluto);

// REDONDEO Y TRUNCADO EN JS

let dec = 8.5, redondeo, truncado;
// math.round() redonde al valor mas cercano
redondeo = Math.round(dec);
console.log(redondeo);

// math.trunc() elimina la parte decimal
truncado = Math.trunc(dec);
console.log(truncado);
