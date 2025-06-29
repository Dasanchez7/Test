// Atributos static vs non-static

class Persona{
    
    // Atributo estatico que pertenece a la clase y no a ningun objeto
    // Iniciacilizarlo con algun valor
    static contadorObjetosPersona = 0; // atributo de nuestra clase

    //Este es un atributo no static sin necesidad de declararlo en el constructor
    // Este atributo se asocia a los objetos creados apartir de la plantilla persona, no a la clase misma
    email = "Valor default";

    // estos son atributo no static que se asocia con los objetos de la clase
    // una vez que sean creados
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
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
        return this._nombre + ' ' + this._apellido;
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

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

// Si queremos utilizar la variable por medio de un objeto
//  porque no se encuentra dentro del objeto nos saldra undefined
console.log(persona1.contadorObjetosPersona);
// Aca estariamos definiendo un nueva atributo para el objeto persona1

// esta variable estatica se tiene que acceder desde la clase,
// tal cual igual como los metodos estaticos
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);
// Clases hijas tambien heredan los atributos

// Objetos
console.log(persona1.email);
console.log(empleado1.email); // Clase hija hereda igual el atributo email

// Clases
console.log(Persona.email); // Aca seria un atributo statico se esta creando y asociado a la platilla
console.log(Empleado.email)