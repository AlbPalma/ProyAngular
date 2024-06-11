import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilAComponent} from './perfil-a/perfil-a.component';  
import { PopupComponent } from './popup/popup.component';
import { PamigosComponent } from './pamigos/pamigos.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SettingsComponent } from './settings/settings.component';
export const routes: Routes = [
  // Otras rutas aquí...
  { path: 'inicio', component: InicioComponent },
  { path: 'perfA', component: PerfilAComponent },
  { path: 'popup', component: PopupComponent },
  {path: "pamigos",component: PamigosComponent},
  {path: "login",component: LoginComponent},
  {path: "fpassword",component: ForgotPasswordComponent},
  {path: "settings",component: SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

