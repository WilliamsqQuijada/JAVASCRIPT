//CICLOS WHILE
//REPETIR EL BLOQUE DE CONDIGO MIENTRAS LA CONDICION SEA VERDADERA, HASTA QUE SEA FALSA SE DETIENE

let num = 1;
let multi = 5;

while (num <= 10){
    let resul = multi * num;
    console.log(resul);
    console.log(`${multi} x ${num} = ${resul}`);
    num++;
}

// DO WHILE
// EJECUTA AL MENOS UNA VES EL CODIGO PORQUE LA CONDICION VA DE ULTIMO

let n = 1;
do{
    console.log(n++)
}while(n <= 5);