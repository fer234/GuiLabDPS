class Calculadora {
    numero1:number;
    numero2:number;
    sumar():number{
      return this.numero1+this.numero2;
    };
    restar():number{
        return this.numero1-this.numero2;  
    };
    multiplicar():number{
        return this.numero1*this.numero2;  
    };
    dividir():number{
        return this.numero1/this.numero2;    
    };
    constructor (n1:number, n2:number){
      this.numero1=n1;
      this.numero2=n2;
    }
  
}

let operacion1 = new Calculadora(10, 20);
let operacion2 = new Calculadora(100, 55);
let operacion3 = new Calculadora(7, 9);
let operacion4 = new Calculadora(9, 3);

console.log("Tu suma es: " + operacion1.numero1 + " + " + operacion1.numero2 + " = " + operacion1.sumar());
console.log("Tu resta es: " + operacion1.numero1 + " - " + operacion1.numero2 + " = " + operacion2.restar());
console.log("Tu multiplicacion es: " + operacion1.numero1 + " * " + operacion1.numero2 + " = " + operacion3.multiplicar());
console.log("Tu division es: " + operacion1.numero1 + " / " + operacion1.numero2 + " = " + operacion4.dividir());