import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPgComponent } from './login-pg/login-pg.component';
import { RegisterPgComponent } from './register-pg/register-pg.component';
import { HomePgComponent } from './home-pg/home-pg.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
   { path: '', component: LandingPageComponent, title: 'Moodies' },
   { path: 'login', component: LoginPgComponent, title: 'Login' },
   { path: 'register', component: RegisterPgComponent, title: 'Register'},
   { path: 'home', component: HomePgComponent, title: 'Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
