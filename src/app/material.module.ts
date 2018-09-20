import { NgModule } from '@angular/core';
import { MatExpansionModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
  ],
})

export class MaterialModule { }
