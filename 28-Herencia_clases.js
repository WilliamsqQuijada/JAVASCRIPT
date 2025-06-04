//HERENCIA EN CLASES DE JS

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

//CREAR OBJETOS DE LA HIJA
let empleado1 = new Empleado("maria", "lopez", "sistemas");
console.log(empleado1)
empleado1.nombre = "Claudia";
console.log(empleado1._nombre)
console.log(empleado1)

//DEFINIR UN METODO EN LA CLASES PADRE PARA HEREDARLO EN LA CLASE HIJA
console.log(empleado1.nombrecompleto())
empleado1.newnombre("Maria");
console.log(empleado1._nombre)
console.log(empleado1.nombrecompleto())

//SOBREESCRITURA EN JS
// MODIFICAR UN COMPORTAMIENTO DE CUALQUIER METODO DEFINIDO EN LA CLASES PADRE

console.log(empleado1.nombrecompleto());