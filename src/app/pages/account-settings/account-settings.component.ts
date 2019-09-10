import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
    // @Inject(DOCUMENT) private _document
     public _ajustes: SettingsService 
    ) { 
  
  }

  ngOnInit() {
    this.cargarCheck();
  }
  cambiarColor(tema:string, link:any){
    
    // this.aplicarCheck(link);

    // let url=`assets/css/colors/${tema}.css`;
    // this._document.getElementById('tema').setAttribute('href', url );

    //Llamando all servicio para guardar los ajustes en la interface y despues en el localstorage
    // this._ajustes.ajustes.tema = tema;
    // this._ajustes.ajustes.temaUrl = url;
    // this._ajustes.guardarAjustes();

    this.aplicarCheck(link);

    this._ajustes.aplicarTema(tema);
    
  }

  aplicarCheck(link:any){
    
    let selectores:any = document.getElementsByClassName('selector');

    for(let ref of selectores){
        ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  cargarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
     
    let tema = this._ajustes.ajustes.tema;

    for(let ref of selectores){
    if(ref.getAttribute('data-theme') === tema){
      ref.classList.add('working');
      break;
    }
  }


  }

}
