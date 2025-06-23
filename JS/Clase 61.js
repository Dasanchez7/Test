// Paso Valor en JS
// Pasando informacion de tipo primitivo (number, bool, string)

function cambiarValor(parametro){
    parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);


/*
Aca directamente el paso por valor con las variables primitivas
no afectan directamente su valor debido a que se saca una copia del
valor de la variable 
*/