// OBJETOS EN JS

let persona = {
    nombre: "Williams",
    apellido: "Perez",
    Email: "williams@gmail.com",
    edad: 23,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellido;
    },
    saludar: function(){
        return (`Hola, mucho gusto ${this.nombre}`);
    }, 
    newemail: function(nuevoemail){ // agregar un numero email
        this.Email = nuevoemail
        return this.Email // retorna el email nuevo pero guardado el la variable anterior
    },
    newedad: function(nuevaedad){
        this.edad = nuevaedad;
        return this.edad
    }
}

// ACCEDER A LAS PROPIEDADES DEL OBJETO
console.log(persona['edad']); // otra forma de leer los valores.
// visualizarlos con un ciclo for in
for (nompropiedades in persona){
    console.log(nompropiedades);
    console.log(persona[nompropiedades]);
}

// AGREGAR Y ELIMINAR 
// AGREGAR
persona.telefono = "8888-7777";
console.log(persona)
//ELIMINAR
delete persona.telefono;
console.log(persona)

// MANDAR A IMPRIMIR UN OBJETO
// forma para imprimir en un navegador web
// concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);
// for in
for (impresion in persona){
    console.log(persona[impresion]);
}
// utlizando object.values lo convierte a un arreglo
let personaarray = Object.values(persona);
console.log(personaarray)
// JSON.stringify los convierte a cadena
let personastring = JSON.stringify(persona);
console.log(personastring)

//VISUALIZAR 
console.log(persona.nombre);
console.log(persona);

//AGREGAR METODOS A OBJETOS
console.log(persona.nombrecompleto());
console.log(persona.saludar());
console.log(persona.newemail("nuevo@gmail.com"));
console.log(persona.newedad(25));

console.log(persona)

// CREACION DE OBJETOS EN JS
// OTRA FORMA DE CREAR LOS OBJETOS

let persona2 = new Object();
persona2.nombre = "vanessa";
persona2.direccion = "saturno 15";
persona2.telefono = 77778888;
console.log(persona2)
console.log(persona2.direccion)


