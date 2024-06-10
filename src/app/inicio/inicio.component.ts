import { Component } from '@angular/core';

import { AppComponent } from '../app.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  styles: [
    `
    :host {
      display:block;
      background-color: aliceblue;
    }
  `,
  ],
})
export class InicioComponent {
  constructor(private AppComponent: AppComponent) {}

  openDialogInicio() {
    this.AppComponent.openDialog();
  }
}

/*export class CompAComponent {
 
}*/


