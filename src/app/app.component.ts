import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v1.2';
  constructor(private dialogRef : MatDialog){}
  openDialog(){
    this.dialogRef.open(PopupComponent,{height:"80vh",width:"80vw"});
  }

}
