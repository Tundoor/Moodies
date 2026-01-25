import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePgComponent } from './home-pg/home-pg.component';
import { EntryModalComponent } from './entry-modal/entry-modal.component';
import { RegisterPgComponent } from './register-pg/register-pg.component';
import { LoginPgComponent } from './login-pg/login-pg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowEntryComponent } from './show-entry/show-entry.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomePgComponent,
    EntryModalComponent,
    RegisterPgComponent,
    LoginPgComponent,
    NavbarComponent,
      ShowEntryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
