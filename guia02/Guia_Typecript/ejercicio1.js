"use strict";
var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    Rombo.prototype.calcularArea = function () {
        return this.diagonalHorizontal * this.diagonalVertical;
    };
    ;
    return Rombo;
}());
var numero = new Rombo(5, 4);
console.log("La respuesta es: " + numero.calcularArea());
