// Heredar metodos de la clase padre hacia la hija que no sean get o set

// VER LA IMAGEN HERENCIA EN JS
// Es un diagrama UML UNIFIED MODELING LANGUAGE UMLETINO.COM 
// Clase padre se han definido algunos atributos y metodos
// Clase hija (empleado) que hereda todas las caracteristicas padre al agregar extends en la definicion de clase

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
     
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
        // se asigna la variable que recibimos como parametro al atributo de la clase
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
        // se asigna la variable que recibimos como parametro al atributo de la clase
    }
    // dentro de una clase no es necesario separar los metodos con comas ni usar la palabra reservada function
    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }

}

class Empleado extends Persona { // Con el extends automaticamente hereda toda las caracteristicas de la clase previa padre
    /*
    El constructor
    Su función principal es preparar el objeto para su uso, asignando valores iniciales a sus atributos.
    */
    // Hay que mandar primero a llamar el constructor de la clase padre con super()
    constructor(nombre,apellido,departamento) {
        super(nombre, apellido); // Llamando al constructor de la clase padre para poder inicializar el constructor de atributos de la clase hija
        this._departamento = departamento;
        // this._departamento es el atributo de nuestra clase
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Diego', 'Sanchez');
console.log(persona1);

let empleado1 = new Empleado("Diego",'Sanchez', "Recursos Humanos");
console.log(empleado1.nombreCompleto()); // heredando y mandando a llamar la funcion o el metodo de la clase padre 
console.log(empleado1.nombre); // Para comprobar si herada el metodo get defindo de la clase padre
// Al fin y al cabo todo vendria englobandose en un solo objeto

/*
El objeto mas interno es el objeto padre y el objeto externo que hereda 
las caracteristicas y funciones es el objeto hijo
*/