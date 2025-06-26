// Clase object, sobrecarga y polimorfismo

/* Sino se agrega expecifica mente el extends de la clase object, 
JS lo hace automaticamente. Referiendose con esto a la clase padre.
La clase object es la clase padre de todas las clases en JS. Esta 
contiene varios metodos predefinidos 

Ejemplo
.toString (Se encarga de ver imprimir informacion del estado de los atributos
del objeto)

atributo prototype nos permite agregar atributos y metodos de manera dinamica

SHORTCURTS
CRTL + K , CRTL C COMENTARIO EN LINEA
CRTL + K , CRTL U QUITA COMENTARIO EN LINEA
SHIFT + ALT + A COMENTARIO EN BLOQUE

*/

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
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString() );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString());

/* Las dos llamadas a la funcion .toString (nombreCompleto) son similares pero va a depender
si la llamada va la clase padre donde no esta definido ciertos atributos, o en la clase hija que hace
hace uso de los atributos de la clase padre anadiendole los propios de la clase hija */