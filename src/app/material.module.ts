import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
  ],
})

export class MaterialModule { }
