import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilAComponent} from './perfil-a/perfil-a.component';  
import { PopupComponent } from './popup/popup.component';
export const routes: Routes = [
  // Otras rutas aquí...
  { path: 'inicio', component: InicioComponent },
  { path: 'perfA', component: PerfilAComponent },
  { path: 'popup', component: PopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

