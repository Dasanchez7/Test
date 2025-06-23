// sumar los 5 primeros numeros 
let maximo = 5;
let acumsuma = 0;
let contador = 1;

/*
while(contador <= maximo) {
    acumsuma+=contador;
    console.log(`${acumsuma}`);
    contador++;
    
}
*/

do {
    acumsuma+=contador;
    console.log(`${acumsuma}`);
    contador++;
} while (contador <= maximo);

