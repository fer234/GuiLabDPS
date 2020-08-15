class Rombo {
    diagonalVertical:number;
    diagonalHorizontal:number;
    calcularArea():number{
      return this.diagonalHorizontal*this.diagonalVertical;
  
    };
    constructor (diagonalVertical:number, diagonalHorizontal:number){
      this.diagonalVertical=diagonalVertical;
      this.diagonalHorizontal=diagonalHorizontal;
  
    }
  
}
let numero = new Rombo(5, 4);
console.log("La respuesta es: " + numero.calcularArea());