import { NgModule } from '@angular/core';
import { MatExpansionModule, MatIconModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
  ],
})

export class MaterialModule { }
