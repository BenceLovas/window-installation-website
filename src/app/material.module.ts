import { NgModule } from '@angular/core';
import { MatExpansionModule, MatIconModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
  ],
})

export class MaterialModule { }
