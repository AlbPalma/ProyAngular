import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
  styles: [
    `
    :host {
      display:block;
      background-color: aliceblue;
    }
  `,
  ],
})
export class SettingsComponent {
  constructor( private router: Router) {}
  
 
  
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
