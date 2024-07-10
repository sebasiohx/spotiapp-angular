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
      'Authorization': 'Bearer BQBFZOEn68Uul1BndURDhYJfp5cGZ3xry57zzEiXkeWi_WNtqmSTh6wfcNSwbrR1TK_hq1ry_oeuuGL1bVu9xAWFdCcyB7HssTirzyKCvrg-ItATYkM'
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
