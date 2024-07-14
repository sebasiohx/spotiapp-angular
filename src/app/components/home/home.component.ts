import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  mensajeError!: string;
  statusError!: number;


  constructor(
    private spotify: SpotifyService
  ){
    this.loading = true;

    /* this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log('Get New Releases', data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorSuscribe) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorSuscribe.error.error.message;
      }); */
    
    // Esta es la nueva forma de usar suscribe()
    this.spotify.getNewReleases()
      .subscribe({
        next: (data: any) => {
          console.log('Get New Releases', data);
          this.nuevasCanciones = data;
          this.loading = false;
        },
        error: (errorSuscribe) => {
          this.error = true;
          this.loading = false;
          console.log(errorSuscribe);
          
          this.mensajeError = errorSuscribe.error.error.message;
          this.statusError = errorSuscribe.status;
        },
      });
  }

}
