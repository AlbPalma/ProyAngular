import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilAComponent} from './perfil-a/perfil-a.component';  

export const routes: Routes = [
  // Otras rutas aquí...
  { path: 'inicio', component: InicioComponent },
  { path: 'perfA', component: PerfilAComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

