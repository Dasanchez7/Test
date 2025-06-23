let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido +' Tlf: '+ tel;
        // titulo y tel no usan this porque son variables propias de esta funcion
    }
}
let persona2 = {
    nombre: 'Diego',
    apellido: 'Sanchez',
    
}

// uso de call 
// es para usar el metodos que no se encuentren definidos en otros objetos 

console.log(persona1.nombreCompleto.call(persona2, 'Ing','983697059'));
// pasando argumentos a la llamada de call para concatenarlos a la salida
console.log(persona1.nombreCompleto("Abog","984214343"))