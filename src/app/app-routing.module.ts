import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauComposantComponent } from './nouveau-composant/nouveau-composant.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'nouveau', component: NouveauComposantComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }