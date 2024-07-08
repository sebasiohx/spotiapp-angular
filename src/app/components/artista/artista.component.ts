import { Component } from '@angular/core';
//sirve para tomar los parametros de la URL actual
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

  artista: any = {};
  loadingArtist: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ){
    this.loadingArtist = true;

    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      
    });
  }
  
  getArtista(id: string){
    this.loadingArtist = true;

    this.spotify.getArtista( id )
    .subscribe( artista => {
      console.log(artista);
      this.artista = artista
      this.loadingArtist = false;
    });
  }
}
