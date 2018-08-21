import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { PageWindowComponent } from './page-window/page-window.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { PageShutterComponent } from './page-shutter/page-shutter.component';
import { PageDoorComponent } from './page-door/page-door.component';
import { PageContactComponent } from './page-contact/page-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWindowComponent,
    PageHomeComponent,
    NavigationTopComponent,
    PageShutterComponent,
    PageDoorComponent,
    PageContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
