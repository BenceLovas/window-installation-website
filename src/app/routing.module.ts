import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { PageWindowComponent } from './page-window/page-window.component';
import { PageHomeComponent } from './page-home/page-home.component';
import {PageShutterComponent} from './page-shutter/page-shutter.component';
import {PageDoorComponent} from './page-door/page-door.component';
import {PageContactComponent} from './page-contact/page-contact.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationTopComponent,
    children: [
      { path: 'home', component: PageHomeComponent },
      { path: 'window', component: PageWindowComponent },
      { path: 'shutter', component: PageShutterComponent },
      { path: 'door', component: PageDoorComponent },
      { path: 'contact', component: PageContactComponent },
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
