import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCFM-W9UXcOz2QgUokYkDNixvqOgpPbbpw",
  authDomain: "amber-inferno-700.firebaseapp.com",
  databaseURL: "https://amber-inferno-700.firebaseio.com",
  storageBucket: "amber-inferno-700.appspot.com",
  messagingSenderId: "880766025543"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
