let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    /*
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    */
   // metodo get para acceder a informacion de nuestro objeto
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    },

    // se usa set para modificar los valores de las propiedades
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}
console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = 'en'; // se manda a llamar el metodo set 

console.log(persona.idioma); // para saber si se almaceno bien
