import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilisationDuBienComponent } from './utilisation-du-bien/utilisation-du-bien.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NouveauComposantComponent,
    NouveauComposantComponent,
    UtilisationDuBienComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
