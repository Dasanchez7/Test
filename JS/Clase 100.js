// Atributos static vs non-static

class Persona{
    
    // Atributo estatico que pertenece a la clase y no a ningun objeto
    // Iniciacilizarlo con algun valor
    static contadorPersonas = 0; // atributo de nuestra clase

    // estos son atributo no static que se asocia con los objetos de la clase
    // una vez que sean creados
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas; // Cada vez creado un objeto tendra un id unico
        // Cada vez que se cree un objeto de tipo persona se aumenta en 1
        // NO se usa this pq este accede al objeto que se esta ejecutando en este momento
        // y como apunta a un objeto, los static solo funcionan con clases
        
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    
    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde el metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre);

    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString() );
// En estas dos creaciones de clases son cuando se suma el contadorObjetosPersona(sea hija o padre)
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString());

console.log(Persona.contadorPersonas); // Indica el numero de objetos creados con la clase persona

