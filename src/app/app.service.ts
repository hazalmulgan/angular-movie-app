import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly apikey = 'bfd1f6f3';
  readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;

  constructor(private http: HttpClient) { }

  getMovies(titleValue: any) {
    return this.http.get(`${this.api}&s=${titleValue}*`);
  }
  getMovieDetails(value: any) {
    return this.http.get(`${this.api}&i=${value}`);
  }
}