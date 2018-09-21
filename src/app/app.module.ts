import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { PageWindowComponent } from './page-window/page-window.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { PageDoorComponent } from './page-door/page-door.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageShadeComponent } from './page-shade/page-shade.component';
import { GealanTwoComponent } from './page-window/gealan-two/gealan-two.component';
import { OvloTwoComponent } from './page-window/ovlo-two/ovlo-two.component';
import { Decco71TwoComponent } from './page-window/decco71-two/decco71-two.component';
import { EncoreThreeComponent } from './page-window/encore-three/encore-three.component';
import { PrimeThreeComponent } from './page-window/prime-three/prime-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWindowComponent,
    PageHomeComponent,
    NavigationTopComponent,
    PageDoorComponent,
    PageContactComponent,
    PageShadeComponent,
    GealanTwoComponent,
    OvloTwoComponent,
    Decco71TwoComponent,
    EncoreThreeComponent,
    PrimeThreeComponent,
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
