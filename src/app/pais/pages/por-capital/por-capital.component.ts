import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  

  constructor(private paisService:PaisService) { }
  termino : string = '';
  hayError : boolean = false;
  paises : Country[] = [];

  buscar(termino:string) {
    this.termino = termino;
    this.hayError = false;
    

    this.paisService.buscarCapital(this.termino)
    .subscribe( (paises) =>  {
        
        this.paises = paises;
        if(paises.length == undefined){
          this.hayError = true;
          this.paises = [];
        }
        console.log(paises);
    },(err)=>{
      this.hayError = true
    });
   }

   sugerencias( termino: string ) {
    
   }
 

}
