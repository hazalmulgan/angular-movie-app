import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  public isConfirm = false;

  public title: string | undefined
  public message: string | undefined;

  public error: string | undefined;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }}
