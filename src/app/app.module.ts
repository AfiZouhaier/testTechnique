import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';
import { AppRoutingModule } from './app-routing.module';
import { UtilisationDuBienComponent } from './utilisation-du-bien/utilisation-du-bien.component';
import { OptionsComponent } from './options/options.component';
import { SINISTRALITEComponent } from './sinistralite/sinistralite.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NouveauComposantComponent,
    NouveauComposantComponent,
    UtilisationDuBienComponent,
    OptionsComponent,
    SINISTRALITEComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
