import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    MatDialogModule,
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  styles: [
    `
    :host {
      display:flex;
      flex-direction:column;
      gap: 0% 1%;
      background-color: aliceblue;
      border-radius: 0;
      height: 100%; /* Establece la altura al 100% de la altura de la ventana */
  width: 100%; /* Establece el ancho al 100% del ancho de la ventana */
  


    }
  `,
  ],
})
export class PopupComponent {

}
