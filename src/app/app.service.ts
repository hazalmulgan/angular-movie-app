import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  api = 'https://www.omdbapi.com/?apikey=bfd1f6f3&r=json';

  constructor(private http: HttpClient) { }

  getMovies(search: any, type?: any) {
    return this.http.get(`${this.api}&s=${search}&type=${type}`);
  }
  getMovieDetails(imdbId: any) {
    return this.http.get(`${this.api}&i=${imdbId}`);
  }
}