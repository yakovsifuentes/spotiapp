import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAdGuY-cjg8qLKJlJqj2RsBD7S4IkX1z_oC4-iabM0WyyY68NKl0M-P4eEmRTgbJPy4XQmFNSDHTR2p99M'
    });

     this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
     .subscribe( params => {
       console.log(params);
     });
   }
}