// SUMAR LOS PRIMEROS 5 NUMEROS
// 1+2+3+4+5 = 15
// BUCLE FOR
let i = 0;
let numero;
for (numero = 1; numero <= 5; numero ++){
    console.log(`${i} + ${numero}`);
    i += numero;
    console.log(i);
}
console.log(i);


// BUCLE WHILE

let num = 1;
let j = 0;

while (num <= 5){
    j += num;
    console.log(j);
    num ++;
}
console.log(j)

// DO WHILE

let inicializador = 0;
let n = 1;

do{
    inicializador += n; 
    console.log(inicializador)
    n++;
}while(n <= 5);

console.log(inicializador);


/*
let i = 0;

for (let numero = 1; numero <= 100; numero ++){
    i += numero;
    console.log(i);
}
console.log(i);


// MULTIPLOS DE UN NUMERO
let suma = 0;

for (let num = 1; num <= 100; num ++){
    
    if (num % 5 === 0){ //MULTIPLOS DE NUMEROS
        suma += num;
        console.log(suma);
    }
}
console.log(suma);

//NUMERO PAR E IMPAR
let i = 0;
let j = 0;
let conta1 = 0;
let conta2 = 0;
for (let num = 1; num <= 100; num ++){

    if (num % 2 === 0){
        i += num;
        conta1++;
        
    }
    else if(num % 2 !== 0){
        j += num;
        conta2++;
    }
}
console.log(i)
console.log(j)
console.log(conta1)
console.log(conta2)
*/
