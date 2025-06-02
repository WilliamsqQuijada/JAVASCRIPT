// CONSTRUCTOR OBJETOS EN JS
// Nos ayuda a crear varios objetos tipo personas

function Persona(Nombre, Apellido, Email){
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Email = Email;
    this.nombrecompleto = function(){
        return this.Nombre + " " + this.Apellido;
    };
    this.newemail = function(nuevoemail){
        this.Email = nuevoemail;
        return this.Email;
    }
}

let padre = new Persona("Williams", "Perez", "williams@gmailcom");
let madre = new Persona("Carla", "Martinez", "carla@gmail.com");
console.log(padre)
console.log(madre);
// CAMBIO
padre.Nombre = "Jose";
console.log(padre);
console.log(padre.nombrecompleto())
console.log(madre.nombrecompleto())
console.log(padre.newemail("jose@gmail.com"));
console.log(padre)

for  (propiedad in padre){
    console.log(padre[propiedad]);
}


console.log(typeof Persona);
console.log(typeof padre);



