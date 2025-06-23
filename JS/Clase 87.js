let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let persona2 = {
    nombre: 'diego',
    apellido: 'sanchez',
    
}

// uso de call 
// para usar el metodo de nombrCompleto con los datos de persona2

console.log(persona1.nombreCompleto.call(persona2));