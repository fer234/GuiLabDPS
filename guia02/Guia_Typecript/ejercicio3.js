"use strict";
var Empleado = /** @class */ (function () {
    function Empleado(ne, se) {
        this.nombre = ne;
        this.salario = se;
    }
    Empleado.prototype.calcularSalario = function () {
        return this.salario - 162.95;
    };
    ;
    return Empleado;
}());
var Empleado1 = new Empleado("Fernando", 1000);
console.log(Empleado1.nombre + " su salario es: $" + Empleado1.calcularSalario());
