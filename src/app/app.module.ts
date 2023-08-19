import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomUserCarusselComponent } from './components/random-user-carussel/random-user-carussel.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomUserCarusselComponent,
    LandingPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyC2KcrlgtmZMDBkb7XNrsDzOLmX-HBfKsA",
        authDomain: "fakebook-143fc.firebaseapp.com",
        projectId: "fakebook-143fc",
        storageBucket: "fakebook-143fc.appspot.com",
        messagingSenderId: "279753645357",
        appId: "1:279753645357:web:afd77e5f58106d063e07a4"
      }
    ),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
