import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { PageWindowComponent } from './page-window/page-window.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageDoorComponent } from './page-door/page-door.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageShadeComponent } from './page-shade/page-shade.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationTopComponent,
    children: [
      { path: 'contact', component: PageContactComponent },
      { path: 'door', component: PageDoorComponent },
      { path: 'home', component: PageHomeComponent },
      { path: 'shade', component: PageShadeComponent },
      { path: 'window', component: PageWindowComponent },
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
