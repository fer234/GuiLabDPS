class Empleado {
    nombre:string;
    salario:number;
    calcularSalario():number{
      return this.salario-162.95;
  
    };
    constructor (ne:string, se:number){
      this.nombre=ne;
      this.salario=se;
  
    }
  
}
let Empleado1 = new Empleado("Fernando", 1000);
console.log(Empleado1.nombre + " su salario es: $" + Empleado1.calcularSalario());