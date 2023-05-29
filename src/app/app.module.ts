import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NouveauComposantComponent,
    NouveauComposantComponent
  ],
    imports: [
        BrowserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
