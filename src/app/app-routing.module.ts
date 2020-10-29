import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreatwallofchinaComponent } from './greatwallofchina/greatwallofchina.component';
import { ChichenItzaComponent } from './chichen-itza/chichen-itza.component';
import { TheRomanColosseumComponent } from './the-roman-colosseum/the-roman-colosseum.component';
import { MachuPicchuComponent } from './machu-picchu/machu-picchu.component';
import { PetraComponent } from './petra/petra.component';
import { ChristtheRedeemerStatueComponent } from './christthe-redeemer-statue/christthe-redeemer-statue.component';

const routes: Routes = [
  { path: 'greatwallofchina', component: GreatwallofchinaComponent },
  { path: 'chichenitza', component: ChichenItzaComponent },
  { path: 'theromancolosseum', component: TheRomanColosseumComponent },
  { path: 'machupicchu', component: MachuPicchuComponent },
  { path: 'petra', component: PetraComponent },

  {
    path: 'christtheredeemerstatue',
    component: ChristtheRedeemerStatueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
