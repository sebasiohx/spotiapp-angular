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
      'Authorization': 'Bearer BQCsZxfodfn6zGh_Arq31nnccCpwkubu88dQDrEoP-bbb-EsPo1F3edM392a2H7j2eD7ofs5GbUOC4JEKpnnljNvjt38ZDtCKk4r0mEXvVzPjXGxSV0'
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
