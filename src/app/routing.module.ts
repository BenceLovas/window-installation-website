import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { PageWindowComponent } from './page-window/page-window.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageDoorComponent } from './page-door/page-door.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageShadeComponent } from './page-shade/page-shade.component';
import { OvloTwoComponent } from './page-window/ovlo-two/ovlo-two.component';
import { GealanTwoComponent } from './page-window/gealan-two/gealan-two.component';
import { Decco71TwoComponent } from './page-window/decco71-two/decco71-two.component';
import { EncoreThreeComponent } from './page-window/encore-three/encore-three.component';
import { PrimeThreeComponent } from './page-window/prime-three/prime-three.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationTopComponent,
    children: [
      { path: 'contact', component: PageContactComponent },
      { path: 'door', component: PageDoorComponent },
      { path: 'home', component: PageHomeComponent },
      { path: 'shade', component: PageShadeComponent },
      { path: 'window', component: PageWindowComponent,
        children: [
          { path: 'ovlo-2', component: OvloTwoComponent },
          { path: 'gealan-2', component: GealanTwoComponent },
          { path: 'decco71-2', component: Decco71TwoComponent },
          { path: 'encore-3', component: EncoreThreeComponent },
          { path: 'prime-3', component: PrimeThreeComponent },
        ]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class RoutingModule { }
