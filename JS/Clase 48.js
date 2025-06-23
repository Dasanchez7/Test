// Recorrido de matrices o ciclos anidados

let matriz = [[100,200,300],[400,500,600,650],[700,800,900]]; 
// tres filas y tres o 4 columnas dependiendo

//Imprime el nro de filas
//console.log(matriz.length);
// imprime el nro de columas de la fila 1 
//console.log(matriz[1].length);

for (let ren = 0; ren < matriz.length; ren++) {
    for (let col = 0; col < matriz[ren].length; col++) {
        console.log(`Fila ${ren} columna ${col} = ${matriz[ren][col]}`);
    }
}