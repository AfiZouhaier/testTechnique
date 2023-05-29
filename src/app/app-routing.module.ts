import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';
import { HomeComponent } from './home/home.component';
import { UtilisationDuBienComponent } from './utilisation-du-bien/utilisation-du-bien.component';

const routes: Routes = [
  { path: 'nouveau', component: NouveauComposantComponent },
  { path: '', component: HomeComponent },
  { path: 'UtilisationDuBien', component: UtilisationDuBienComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }