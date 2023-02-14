import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MovieSearchComponent } from './movie-search.component';

describe('SearchComponent', () => {
    let component: MovieSearchComponent;
    let fixture: ComponentFixture<MovieSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, BrowserAnimationsModule],
            declarations: [MovieSearchComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create movie search component', () => {
        expect(component).toBeTruthy();
    });
});