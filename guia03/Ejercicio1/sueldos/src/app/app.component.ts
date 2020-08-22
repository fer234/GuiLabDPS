import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  v1 : number;
  v2 : string = "$";
  v3 : number = 0.073;
  v4 : number = 0.11;
  v5 : number = 0.051;
  r3 : number;
  er : string;
  
  operacion(){
    if(this.v1<=0){
      this.er = "Sueldo no valido, intentalo de nuevo";
    }
    else{
    Math.round(this.r3 = this.v1 - this.v4 - this.v3 - this.v5)
    }
  }

  limpiar(){
    this.r3 = 0;
    this.er = "";
  }
}
