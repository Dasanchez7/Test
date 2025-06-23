// Paso por referencia JS
// Objetos (array) se pasan por referencia

function cambiarValor(parametro){ // var parametro (no almacena el valor de parametro sino que almacena un referencia en memoria)
    // la misma que var arreglo
    parametro[0] = 20;
}

// Llamamos a la funcion
let arreglo = [10]; // apunta a ese valor
// Aca se almacena una referencia (la ubicacion en memoria)
console.log(`Antes funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues funcion: ${arreglo[0]}`);

// Los objetos se pasan por referencia 

/*
Aca directamente el paso por referencia, se hace mencion al 
espacio en memoria que ocupa el array, por lo tanto cada vez
que se llama el array apuntan por referencia.

En resumen como cualquiera de las dos variables apuntan a la misma 
direccion de memoria del (array) u objeto, cualquiera de las dos
la puede modificar.
*/