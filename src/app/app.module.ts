import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp({ "projectId": "digimonapp-cd549", "appId": "1:139484235704:web:a37d13e5d7d6c85652b14d", "storageBucket": "digimonapp-cd549.appspot.com", "apiKey": "AIzaSyAaKG967-1JGOY2eLwYXu2b24bMNL1dNoI", "authDomain": "digimonapp-cd549.firebaseapp.com", "messagingSenderId": "139484235704" })), 
    provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
