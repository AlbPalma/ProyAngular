import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { SubirContenidoComponent } from './subir-contenido/subir-contenido.component';
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

  openSubir(){
    this.dialogRef.open(SubirContenidoComponent,{height:"25vh",width:"10vw"});
  }

}
