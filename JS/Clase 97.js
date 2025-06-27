// Palabra static
// metodo que se asocia exclusivamente con la clase 

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
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
        //  Recibir un objeto tipo persona como parametro
        console.log(persona.nombre);
        // Utilizar el objeto y acceder a su nombre en el parametro (por medio del get nombre)
        // es que es posible esta funcion
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

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString());

//persona1.saludar(); 
// No es posible llamar un metodo static desde un objeto pero si desde una clase

Persona.saludar();
// Solo se puede mandar a llamar desde la clase, ya que estan asociados
// NO SE ASOCIAN CON OBJETOS
// PERO SI LE PODEMOS PASAR COMO ARGUMENTO A UN METODO STATIC UN OBJETO
Persona.saludar2(persona1);
// la salida de este metodo estatico se observa solo por consola

// Ya que estos metodos se llaman desde la clase hija pero la hereda
Empleado.saludar();
Empleado.saludar2(empleado1);
