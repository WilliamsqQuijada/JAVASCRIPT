//GET Y SET EN OBJETOS
// MEJOR PRACTICA PARA CAMBIAR Y ACCEDER LOS VALORES 

let persona = {
    nombre: "Williams",
    apellido: "Perez",
    edad: 23,
    telefono: "8888-7777",
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase(); // obtenerlo en mayusculas
    },
    set lang(lang){ // para validar que cuando se modifique sea en mayusculas
        this.idioma = lang.toUpperCase()
    },
    get nombrecompleto(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombrecompleto);
console.log(persona);
console.log(persona.lang);
persona.lang = "en"; // se agregar el nuevo idioma
console.log(persona.idioma);
console.log(persona.lang);
