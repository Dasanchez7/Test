// funciones contructores de objeto es recomendable iniciar en mayus
// los parametros de esta funcion son los atributos del objeto persona
// al hacer uso de la palabra new se crea un nuevo objeto
// la palabra this nos permite trabajar con las propiedades del objeto que se esta ejecutando en este momento
function Persona(nombre,apellido,email) {
    this.nombre = nombre; // donde = nombre es la variable que estamos recibiendo como parametro al inicio de la funcion
    // this nombre es el nombre de la propiedad del objeto
    // el nombre del parametro es igual al nombre del atributo es buena practica al crear nuestro obj
    this.apellido = apellido;
    this.email = email;
}
// con esta funcion ya se puede crear varios obj de tipo persona, con la misma estructura y caracteristicas

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
// si no se colocan argumentos, se pueden asignar valores por default, asignados previamente en la funcion contructor persona
let madre = new Persona('Leyanny', 'Anez', 'leyannya@gmail.com');

console.log(padre,madre);


// Constructor se usa para crear objetos reutilizando codigo
// de una forma mas simplificada. Es una funcion especial para objetos
// new reserva nuevo espacio en memoria del nuevo objeto
