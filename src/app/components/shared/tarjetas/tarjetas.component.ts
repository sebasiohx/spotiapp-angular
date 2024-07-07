import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(
    private router: Router
  ){}

  verArtista(item: any){

    let artistaId: string;

    if(item.type === 'album'){
      artistaId = item.artists[0].id;
    } else{
      artistaId = item.id;
    }

    // codigo para navegar a otro componente mediante un array de parametros
    this.router.navigate([ '/artist', artistaId ]);
  }

}
