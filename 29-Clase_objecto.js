// CLASE OBJEBTO, METODO TOSTRING, SOBREESCRITURA, POLIMORFISMO EN JS

// METODO ToString


class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this.nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombrecompleto(){
        return this._nombre + " " + this._apellido; 
    }
    newnombre(nuevo){
        this._nombre = nuevo;
        return this._nombre
    }
    ToString(){
        return this.nombrecompleto();
    }

}

//HEREDERA DE LA CLASE PADRE
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){ // ACA TAMBIEN PONER LOS PARAMETROS DE LA CLASE PADRE JUNTO CON LOS DE LA HIJA
        super(nombre, apellido) // LLAMAR AL CONSTRUCTOR DE LA CLASE PADRE CON SUS PARAMETROS
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombrecompleto(){
        return super.nombrecompleto() + ", Soy de: " + this._departamento  //SOBREESCRITURA
    }
}


let persona1 = new Persona("williams", "perez");
console.log(persona1._nombre)
console.log(persona1);
console.log(persona1.ToString());

//CREAR OBJETOS DE LA HIJA
let empleado1 = new Empleado("maria", "lopez", "sistemas");
console.log(empleado1);
console.log(empleado1.nombrecompleto())
console.log(empleado1.ToString());

