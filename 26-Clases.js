// CLASES EN JS
// LA CLASES ES UNA PLATINA QUE TENDRA ATRIBUTOS Y METODOS Y VAMOS A PODER CREAR OBJETOS QUE SON INSTANCIAS

class Persona{
    //constructor
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona("williams", "perez");
console.log(persona1);
let persona2 = new Persona("carlos", "lara");
console.log(persona2);