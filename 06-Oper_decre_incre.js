//OPERADORES DECREMTNO E INCREMENTO

let a,b,c;
a = 0;
//pre-incremento

++a;
console.log(a)

//post-incremento
a++;
console.log(a)

//pre-decremento
--a;
console.log(a)

//post-decremento
a--;
console.log(a)


//EJEMPLO

a = 5;
b = 2;
c = ++a * b--;
console.log(c)
console.log(a)
console.log(b)
console.log(typeof c)


