import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log('Spotify services listo!');
  }

  getQuery(query: string){
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA39cFcNLk96sTI_5XZ2GULKwdSpd8NRSy2-L5x0XwkBYjm_F5xhCWS-KEeIygSCy_YSNZ-x-QeLZUJw9f96WnhA0-KOky1_Gn4byLSK9sXGcg1dhw'
    })

    return this.http.get(URL, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( (data:any) => {
        return data['albums'].items;
      }));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( (data:any) => {
        return data.artists.items
      }))
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`)
      /* .pipe( map( (data:any) => {
        return data.artists.items
      })) */
  }
}
