// GET Y SET EN CLASES 

class Persona{
    //constructor
    constructor(nombre, apellido, idioma){
        this._nombre = nombre;
        this._apellido = apellido;
        this._idioma = idioma
    }
    get nombrecompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    get nombre(){ //RETORNA EL NOMBRE
        return this._nombre;
    }
    set nombre(nombre){ // SE CAMBIA EL NOMBRE  
        this._nombre = nombre;
    }
    set idioma(idioma){
        this._idioma = idioma;
        return this._idioma;
    }
}

let persona1 = new Persona("williams", "perez", "es");
persona1.nombre = "Williams Jose" // SET 
console.log(persona1.nombrecompleto);
console.log(persona1.nombre); //GET 
persona1.idioma = "us"
console.log(persona1._idioma)
