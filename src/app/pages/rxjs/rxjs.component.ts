import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators'


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 
    
  

  //Probando la funcion retry para que vuelva a ejecutarse en caso de un error
    this.subscription = this.regresaObservable()
    // .pipe(retry(2))
      //retry (2) numero de intentos 2 
     .subscribe(
    //A la hora de suscribirnos al observable recibimos 3 callbacks: El next, error, complete
      numero => console.log('Subs',numero),
      error => console.log('Error en el obs',error),
      () => console.log('El Observador termino')    
    )
    

  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('La Pagina se va a cerrar');
    
  }

  regresaObservable(): Observable<any> {

    return new Observable( observer =>{
      
      let contador = 0;

      let intervalo = setInterval( () => {
        
        contador += 1;

        //Leccion Operador Map 
        const salida = {
          valor: contador
        };
        
        observer.next(salida);

        // if(contador === 3 ){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // //Probando el error en el observable
        // if(contador === 2){
        //   // clearInterval(intervalo); Sirve para limpiar el interval volver a inicializarlo
        //   observer.error('SOS');
        // }
      }, 1000); 
//Usando el pipe ahora el obs retorna un objeto 'salida' y con el map lo retornamos solo el atributo valor
    }).pipe(
      map( (resp:any) =>resp.valor),
      filter ( (valor, index) => {
        // console.log('Filter: ',valor,' Index: ',index  );

        if((valor % 2)===1){
          //Impar
          return true;
        }else{
          //par
          return false;
        }
                    
      })
    );

  }

}
