// Sobreescritura en JS
// Se refiere a modifcar el comportamiento de un metodo previamente definido en la clase padre
// llamando o efectuandolo desde la clase hija

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
      
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto() {
        return this._nombre + " " + this._apellido;
    }

}

class Empleado extends Persona { 
    constructor(nombre,apellido,departamento) {
        super(nombre, apellido); 
        this._departamento = departamento;

    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobrescritura
    // Debe poseer el mismo nombre de la funcion previamente definida sino no pasa a ser sobreescritura
    // Sino que seria un nuevo metodo. Se usa el mismo nombre y los mismos parametros

    // .1ra opcion pero estariamos repitiendo codigo
    // nombreCompleto() {
    //     return this._nombre + " " + this._apellido + ", " + this._departamento;
    // }

    // /2da opcion, utilizando super para acceder a los metodos y atributos de la clase padre
    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
        // Regresa el nombre y el apellido y concatena el dpto
    }
}

let persona1 = new Persona('Diego', 'Sanchez');
console.log(persona1);

let empleado1 = new Empleado("Diego",'Sanchez', "Recursos Humanos");
console.log(empleado1.nombreCompleto()); 
