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
      'Authorization': 'Bearer BQAJS9UBpmi0RJ0PP7b8fTWFN_Oed-YtfvvJ48NvIchPg_fd0NaiW-lRfaf_7m2ahdZGv9dCh_zX7IR2t8uS9BcpoVzw0eTXWm0MUo4kPhLmRrQm4Ik'
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
