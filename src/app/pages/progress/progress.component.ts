import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  
  porcentaje1: number=80;
  porcentaje2: number=20;



  constructor() { }

  ngOnInit() {
  }

  // cambiarValor(valor:number){

  //   // let band;
  //   // if(valor<0){
  //   //   band = false
  //   // }else if(valor>0){
  //   //   band= true;
  //   // }
  //   // if(this.porcentaje>=100 && !band){
  //   //   this.porcentaje=100;
  //   //   this.porcentaje+=valor;  
  //   // }
  //   // if(this.porcentaje<=0 && band){
  //   //   this.porcentaje=0;
  //   //   this.porcentaje+=valor;
  //   // }

  //   if(this.porcentaje>=100 && valor>0){
  //     this.porcentaje=100;
  //     return;
  //   }

  //   if(this.porcentaje<=0 && valor<0){
  //     this.porcentaje=0;
  //     return;
  //   }
  //   this.porcentaje+=valor;
  // }

  // {----Funcion que recibe el evento y actualiza el valor de porcentaje----}

  // actualizar(event: number ){
  //     console.log('Evento: ', event);
  //     this.porcentaje1 = event;
      
  // }

}
