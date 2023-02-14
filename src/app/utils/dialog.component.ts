import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public isConfirm: boolean = false;

  public title: string | undefined
  public message: string | undefined;

  public error: string | undefined;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
  }

}
