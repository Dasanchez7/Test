// Cadenas y funciones en JS
// cadenas inmutables en JS (no se puede modificar su valor)

function cambiarValor(parametro){
    parametro = 'Adios';
}

/*
var parametro y argumento son dos cosas totalmente distintas
y la variable dentro de la funcion no afecta en nada a la variable
global argumento, por lo tanto las cadenas actuan como primitivo.

Lo que se modifica durante la llamada de la funcion, muere
al terminar esta misma. No son referencias de memoria ni apuntan
a nada

*/
// Llamamos a la funcion
let argumento = 'Hola';
console.log(`Antes funcion: ${argumento}`);
cambiarValor(argumento);
console.log(`Despues funcion: ${argumento}`);