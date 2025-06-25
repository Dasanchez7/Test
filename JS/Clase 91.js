// get y set para las propiedades de la clase
class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // pero no se pueden llamar igual que la propiedad
    // set para modificar el valor atributo
    // get para leer el valor del atributo
    // de igual forma se colocan fuera del constructor de la clase
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
        // se asigna la variable que recibimos como parametro al atributo de la clase
    }

}
            
let persona1 = new Persona('Diego','Sanchez');
persona1.nombre = 'Alejandro Anez';
// No se accede directamente a la propiedad, si no a traves del metodo set
console.log(persona1.nombre); // se manda a llamar el metodo  get sin ()