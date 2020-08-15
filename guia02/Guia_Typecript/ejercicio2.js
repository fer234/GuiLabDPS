"use strict";
function heroe(datos) {
    return "Yo soy " + datos.nombre + " y mis poderes son: " + datos.poderes;
}
var h = { nombre: "Peter parket", poderes: ["trepar", " super fuerza", "agilidad", " y hacer telas de araña"] };
console.log(heroe(h));
