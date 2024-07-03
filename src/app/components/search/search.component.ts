import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  artistas: any[] = [];

  constructor(
    private spotify: SpotifyService
  ){}

  buscar(termino: string){
    console.log(termino);

    this.spotify.getArtista(termino)
      .subscribe( data => {
        console.log(data);
        this.artistas = data;
      });
  }
}
