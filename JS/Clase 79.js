let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

persona.tel = "983697059"; // Agregando una propiedad mas al obj
console.log(persona);

persona.tel = "0000000"; // modificando el obj
console.log(persona);

delete persona.tel; // elimina la propieda tanto como el valor asociado
console.log(persona);
