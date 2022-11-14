import { Component, OnInit } from '@angular/core';
//NECESITAMOS CLASES RECUPERAR PARAMETROS DE RUTA
//INCLUIMOS Router PARA LA REDIRECCION POR CODIGO
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  //NECESITAMOS VARIABLES PARA CAPTURAR NUESTRO NUMERO
  //Y DIBUJAR EL DOBLE
  public numero!: number;
  public doble!: number;

  //ACTIVATEDROUTER VIENE INYECTADO DESDE EL MODULE
  //NECESITAMOS DECLARARLO IoC 
  //PARA PODER RECUPERAR LOS PARAMETROS
  constructor(private _activeRoute: ActivatedRoute
    ,private _router: Router) { }

    redirect(num: number): void {
      this._router.navigate(["/numerodoble", num]);
    }


  ngOnInit(): void {
    //EN EL INIT DEL COMPONENT ES DONDE DEBEMOS SUBSCRIBIRNOS
    //Y RECUPERAR PARAMETRO/S
    //UTILIZAMOS EL OBJETO DE LA INYECCION JUNTO A UNA PROMESA
    //LLAMADA subscribe
    this._activeRoute.params.subscribe(( parametros: Params ) => {
      //DENTRO DE Params, PODEMOS RECUPERAR CADA PARAMETRO POR 
      //SU NAME:  parametros['PARAMETER NAME']
      if (parametros['numero'] != null){
        //LOS PARAMETROS SIEMPRE SON string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    });
  }

}
