
function Persona(nombre, apellido, email, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    this.nombrecompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}


let padre = new Persona("Williams", "Perez", "williams@gmail.com", 23)
let madre = new Persona("Carla", "Martinez", "carla@gmail.com", 22)

//PROTOTYPE. VALORES COMPARTIDOS
Persona.prototype.telfono = 61678806;
console.log("Telefono del padre: ", padre.telfono, "Telefono de la madre:", madre.telfono);


//USO DE CALL
//PARA PODER USAR LOS METODOS DE OTROS OBJETOS
let persona1 = {
    nombre: "Williams",
    apellido: "Perez",
    nombrecompleto: function(titulo, Telefono){ // AGREGAMOS PARAMETROS
        return titulo + ": " + this.nombre + " " + this.apellido + ", Celular: " + Telefono;
    }
}
let persona2 = {
    nombre: "Vanessa",
    apellido: "Perez"
}
console.log(persona1.nombrecompleto());
console.log(persona1.nombrecompleto.call(persona2));
//PASO DE ARGUMENTOS EN CALL
console.log(persona1.nombrecompleto.call(persona2, "Lic", "8888-9999"))

//METODO APPLY
//MANDAR A LLAMAR UN METODO DONDE EN CIERTO OBJETO NO ESTE DEFINIDO EL METODO
//AQUI LOS PARAMETROS SE MANDAN EN ARREGLO, SE PUEDE PONER DIRECTAMENTE O DECLARAR UN ARREGLO APARTE.
//let arreglo = ["Lic", "5588-9966"];
console.log(persona1.nombrecompleto.apply(persona2, ["Lic", "5588-9966"]))

