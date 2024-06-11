import { Component } from '@angular/core';

import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
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
  constructor(private AppComponent: AppComponent, private router: Router) {}
  
  openDialogInicio() {
    this.AppComponent.openDialog();
  }
  openSubir(){
    this.AppComponent.openSubir();
  }
  
  /*Funciones de navegación*/
  navegarPAmigos() {
    this.router.navigate(['/pamigos']);
  }
  navegarPerfilA(){
    this.router.navigate(["/perfA"]);
  }
  navegarMain(){
    this.router.navigate(["/inicio"]);
  }
  navegarLogin(){
    this.router.navigate(["/login"]);
  }
  navegarSettings(){
    this.router.navigate(["/settings"])
  }
}

/*export class CompAComponent {
 
}*/


