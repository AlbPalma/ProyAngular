import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pamigos',
  standalone: true,
  imports: [],
  templateUrl: './pamigos.component.html',
  styleUrl: './pamigos.component.css',
  styles: [
    `
    :host {
      display:block;
      background-color: aliceblue;
      height:"100vh";
    }
  `,
  ],
})
export class PamigosComponent {
  constructor(private router: Router) {}

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
