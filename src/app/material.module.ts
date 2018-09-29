import { NgModule } from '@angular/core';
import {MatExpansionModule, MatIconModule, MatSidenavModule, MatTabsModule, MatTooltipModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
  ],
})

export class MaterialModule { }
