import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress')txtProgress:ElementRef

  @Input('nombre') leyenda:string = 'Leyenda';
  @Input() porcentaje:number=50;

  @Output() cambioPorcentaje:EventEmitter<number> = new EventEmitter();
  constructor() {
    // console.log('Leyenda: ', this.leyenda);
    // console.log('Porcentaje: ', this.porcentaje);
    
   }

  ngOnInit() {
    // console.log('NG Leyenda: ', this.leyenda);
    // console.log('NG Porcentaje: ', this.porcentaje);
  }

  onChanges( newValue:number ){
    // console.log(event);
    
    //PURO JS OBTENER EL INPUT PARA IMPEDIR QUE INGRESE VALORES NO PERMITIDOS
    // let elementHTML:any = document.getElementsByName('progreso')[0];
    
    
    
    
    if( newValue>=100){
      this.porcentaje=100;
    }else if( newValue<=0){
      this.porcentaje=0;
    }else{
      this.porcentaje = newValue;
    }
    //validar input
    // elementHTML.value =  Number(this.porcentaje);

    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioPorcentaje.emit(this.porcentaje)
    
    this.txtProgress.nativeElement.focus();
    
  }
  cambiarValor(valor:number){

    // let band;
    // if(valor<0){
    //   band = false
    // }else if(valor>0){
    //   band= true;
    // }
    // if(this.porcentaje>=100 && !band){
    //   this.porcentaje=100;
    //   this.porcentaje+=valor;  
    // }
    // if(this.porcentaje<=0 && band){
    //   this.porcentaje=0;
    //   this.porcentaje+=valor;
    // }

    if(this.porcentaje>=100 && valor>0){
      this.porcentaje=100;
      return;
    }

    if(this.porcentaje<=0 && valor<0){
      this.porcentaje=0;
      return;
    }
    this.porcentaje+=valor;

    this.cambioPorcentaje.emit( this.porcentaje )
  }
}
