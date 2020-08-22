import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cantidad : number;
  cantidad2 : number;
  cantidad3 : number;
  especial : number = 4.25;
  regular : number = 4.05;
  diesel : number = 3.96;
  venta : number;

  Gespecial(){
    if(this.cantidad>=0.5 && this.cantidad<=150){
      Math.round(this.venta=this.especial*this.cantidad)
    }

  }

  Gregular(){
    if(this.cantidad2>=0.5 && this.cantidad2<=150){
      Math.round(this.venta=this.regular*this.cantidad2)
    }
  }

  Gdiesel(){
    if(this.cantidad3>=0.5 && this.cantidad3<=150){
      Math.round(this.venta=this.diesel*this.cantidad3)
    }
  }

  limpiar(){
    this.venta = 0;
    this.cantidad = 0;
    this.cantidad2 = 0;
    this.cantidad3 = 0;
  }
}
