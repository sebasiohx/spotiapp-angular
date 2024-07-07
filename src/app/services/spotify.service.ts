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
      'Authorization': 'Bearer BQASL5VqEHiqnB0uqDyRdgK-Wd9X0lpkQ41QDdBVAg9Ba2pSG7EPx1E-niN4ex9P16PdTFOB4g9qWvj85jKCMvhVwUJxjg3Sg93tEuUWgo4-4JOLGKQ'
    })

    return this.http.get(URL, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map( (data:any) => {
        return data['albums'].items;
      }));
  }

  getArtista(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( (data:any) => {
        return data.artists.items
      }))
  }
}
