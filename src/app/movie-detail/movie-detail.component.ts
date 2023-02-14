import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  imdbID: any;
  data: any;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.imdbID = params.get('imdbID');
      this.getMoveDetail();
    });
  }

  getMoveDetail() {
    this.appService.getMovieDetails(this.imdbID).subscribe((data: any) => {
      this.data = data;
    })
  }

}