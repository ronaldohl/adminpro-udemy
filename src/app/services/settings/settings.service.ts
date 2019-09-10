import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'dafault'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    //guardado de ajustes
    // console.log("Guardando en localStorage");
    
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
      //Cargado de ajustes
      // console.log("Cargando localStorage");

      this.aplicarTema(this.ajustes.tema)
      
    }else{
      //valores por defecto
      this.aplicarTema(this.ajustes.tema);
      // console.log("No hay ajustes guardados, se cargo default");
      
    }
  }

  aplicarTema(tema:string){
    

    let url=`assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}


interface Ajustes {
  temaUrl:string;
  tema:string;
}

  