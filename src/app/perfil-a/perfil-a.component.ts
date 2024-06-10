import { Component } from '@angular/core';

import { AppComponent } from '../app.component';
@Component({
  selector: 'app-perfil-a',
  standalone: true,
  imports: [],
  templateUrl: './perfil-a.component.html',
  styleUrl: './perfil-a.component.css',
  styles: [
    `
    :host {
      display:block;
      background-color: aliceblue;
    }
  `,
  ],
})

export class PerfilAComponent {
  constructor(private AppComponent: AppComponent) {}

  openDialogPerfil() {
    this.AppComponent.openDialog();
  }
}

/*export class CompAComponent {
  
}*/

