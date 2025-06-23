// metodo apply

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido +' Tlf: '+ tel;
    }
}
let persona2 = {
    nombre: 'Diego',
    apellido: 'Sanchez',

}
// uso de apply
// mandar a llamar un metodo que no se encuentren definidos en otros objetos 

console.log(persona1.nombreCompleto("Lic","7213114"));

let arregloComoparametro = ["Abog","983697059"];
// Se almacenan los valores previamente en un array para poder hacer uso de apply
console.log(persona1.nombreCompleto.apply(persona2,arregloComoparametro));
// o se pueden escribir los valores directamnte del array como parametro
console.log(persona1.nombreCompleto.apply(persona2,["Ing","7886353"]));

