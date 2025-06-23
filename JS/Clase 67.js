// funciones recursivas

function funcionRecursiva(numero){
    // clase base
    if(numero==1){
        console.log(numero);
    
    }
    else{
        console.log(numero);
        funcionRecursiva(numero-1);
    }
}

// llamamos a la funcion
funcionRecursiva(100);