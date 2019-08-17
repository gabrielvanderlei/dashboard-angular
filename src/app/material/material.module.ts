import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatGridListModule
  ],

  exports: [
    MatToolbarModule,
    MatSelectModule,
    MatGridListModule
  ],

  declarations: []
})
export class MaterialModule { }