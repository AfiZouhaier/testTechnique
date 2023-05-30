import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';
import { HomeComponent } from './home/home.component';
import { UtilisationDuBienComponent } from './utilisation-du-bien/utilisation-du-bien.component';
import { OptionsComponent } from './options/options.component';
import { SINISTRALITEComponent } from './sinistralite/sinistralite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nouveau', component: NouveauComposantComponent },
  { path: 'UtilisationDuBien', component: UtilisationDuBienComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'sinistralite', component: SINISTRALITEComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }