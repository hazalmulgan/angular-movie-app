import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../utils/dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  key = 'search_history';

  movieList: any[] = [];
  formControl = new FormControl();
  value: any;
  message = '';
  isReady = true;
  type = '';
  showFilter = false;

  dialogRef: MatDialogRef<DialogComponent> | any;

  constructor(private router: Router, private appService: AppService, public dialog: MatDialog, ) { }

  ngOnInit() {
    this.showHistory();

    this.formControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe((newValue: any) => {
        this.isReady = false;
        this.value = newValue;
        this.getMovieList();
      }
      );
  }

  getMovieList() {
    this.appService.getMovies(this.value, this.type).subscribe((data: any) => {
      if (data.Response !== 'False') {
        const items = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            items.push(data[key]);
          }
        }
        this.message = `${this.value.toUpperCase()} için sonuçlar : Toplam ${data.totalResults} sonuç bulundu, ${data.Search.length} tanesi gösteriliyor.`
        this.movieList = items[0];
        this.movieList.sort((a, b) => a.Year > b.Year ? 1 : -1)
        this.isReady = true;
        this.showFilter = true;
      } else {
        this.isReady = true;
        this.movieList.length = 0;
        if (this.value === '') {
          this.message = `Lütfen arama kriteri giriniz.`;
          this.showFilter = false;
          this.type = ''
        } else {
          this.message = `${this.value} aramanıza ilişkin sonuç bulunamadı.`;
          this.showFilter = false;
          this.type = ''
        }
      }
    })
  }

  showHistory() {
    try {
      const history = JSON.parse(localStorage.getItem(this.key) as string)
      if (history.length > 0) {
        this.message = `İncelediğiniz son filmler listeleniyor.`;
        this.movieList = history;
      }
    } catch (e) {
      console.log(e)
    }
  }

  gotoDetails(data: any) {
    try {
      let history = JSON.parse(localStorage.getItem(this.key) as string)
      history.splice(0, 0, data);
      history = history.slice(0, 5);

      localStorage.setItem(this.key, JSON.stringify(history));
    } catch (e) {
      localStorage.setItem(this.key, JSON.stringify([data]));

      console.log(e)
    }

    this.router.navigate(['/detail', data.imdbID]);
  }

  onTypeChanged(event: any) {
    this.type = event.value
    this.getMovieList()
  }

  openConfirmDialog(selected: any) {
    if (selected.Title) {
      this.dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
      });

      this.dialogRef.componentInstance.isConfirm = true;
      this.dialogRef.componentInstance.title = "Filmi Sil";
      this.dialogRef.componentInstance.message = selected.Title + " adlı filmi silmek istediğinize emin misiniz?";

      this.dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          this.deleteMovie(selected);
        }
        this.dialogRef = null;
      });
    }
  }

  deleteMovie(selected: any) {
    alert(`${selected.Title} filmi silindi`)
    //elimde omdb ye ait bir delete api si bulunmadığından alert gönderdim.
  }
}