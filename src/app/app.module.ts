import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomUserCarusselComponent } from './components/random-user-carussel/random-user-carussel.component';
import { ProfilCardComponent } from './profil-card/profil-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomUserCarusselComponent,
    ProfilCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
