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

  constructor(
    private spotify: SpotifyService
  ){
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log('Get New Releases', data);
        this.nuevasCanciones = data;
        this.loading = false;
      });
  }

}
