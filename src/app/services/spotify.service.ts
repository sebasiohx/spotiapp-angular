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
      'Authorization': 'Bearer BQCh0fJ95LFrflNB6maPgJ5o_qOBI8NPB2K8VSsOIzkjqaXzbg9HHDEns_elJarQ9PhalXN1cSC-pumx9ptt6Ov6IFN92VjRxdfzyaSLCB29Rg0ropI'
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

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks`)
      .pipe( map( (data:any) => {
        return data.tracks
      }))
  }
}
