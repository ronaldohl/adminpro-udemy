import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    
    this.contarTres().then(
      msj => console.log('Termino', msj)      //aqui podemos recibir el objeto o lo que venga en el resolve obj => log(obj) o no usando () =>{}
    ).catch( error => console.error('Error en la promesa',error));

   }

  ngOnInit() {
  }

  contarTres(): Promise<boolean>{
    
    let promesa:Promise<boolean> =  new Promise((resolve,reject) => {
      
      let contador = 0;

        let intervalo = setInterval(()=>{
          
          contador += 1;

          console.log('--Contador--:',contador);
          

          if(contador === 3){
            resolve(true);// EL Parametro ok es el que se recibe en el then 
            //reject('Simplemente un error') EL Parametro 'Simplemente ...' es el que se recibe en el catch
            clearInterval(intervalo);
          }
        },1000);  

    });
    
    return promesa;
    
  }

}
