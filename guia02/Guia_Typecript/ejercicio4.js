"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.numero1 = n1;
        this.numero2 = n2;
    }
    Calculadora.prototype.sumar = function () {
        return this.numero1 + this.numero2;
    };
    ;
    Calculadora.prototype.restar = function () {
        return this.numero1 - this.numero2;
    };
    ;
    Calculadora.prototype.multiplicar = function () {
        return this.numero1 * this.numero2;
    };
    ;
    Calculadora.prototype.dividir = function () {
        return this.numero1 / this.numero2;
    };
    ;
    return Calculadora;
}());
var operacion1 = new Calculadora(10, 20);
var operacion2 = new Calculadora(100, 55);
var operacion3 = new Calculadora(7, 9);
var operacion4 = new Calculadora(9, 3);
console.log("Tu suma es: " + operacion1.numero1 + " + " + operacion1.numero2 + " = " + operacion1.sumar());
console.log("Tu resta es: " + operacion1.numero1 + " - " + operacion1.numero2 + " = " + operacion2.restar());
console.log("Tu multiplicacion es: " + operacion1.numero1 + " * " + operacion1.numero2 + " = " + operacion3.multiplicar());
console.log("Tu division es: " + operacion1.numero1 + " / " + operacion1.numero2 + " = " + operacion4.dividir());
