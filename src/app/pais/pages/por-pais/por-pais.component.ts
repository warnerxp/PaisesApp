import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  constructor(private paisService:PaisService) { }
  termino : string = '';
  hayError : boolean = false;

  buscar() {
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
    .subscribe( (resp) =>  {
      if(resp.status == '404'){
        this.hayError = true;
      }
      console.log(resp.status);
    },(err)=>{
      
    });
   }


}
