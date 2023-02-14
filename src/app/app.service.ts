import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly apikey = 'bfd1f6f3';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&r=json`;

  constructor(private http: HttpClient) { }

  getMovies(titleValue: any, type?: any) {
    console.log('tip', type)
    return this.http.get(`${this.api}&s=${titleValue}&type=${type}`);
  }
  getMovieDetails(id: any) {
    return this.http.get(`${this.api}&i=${id}`);
  }
}