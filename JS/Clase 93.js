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
console.log(empleado1);
console.log(empleado1.nombre); // Para comprobar si herada el metodo get defindo de la clase padre