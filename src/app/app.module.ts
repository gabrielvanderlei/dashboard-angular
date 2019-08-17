import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { SelectComponent } from './select/select.component';
import { ProductsService } from './products.service';
import { SelectGridComponent } from './select-grid/select-grid.component';
import { OptionsService } from './options.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule , 
    FlexLayoutModule,
    MaterialModule, 
    FormsModule, 
    HttpClientModule],

  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HeaderComponent, 
    ChartComponent, 
    SelectComponent, SelectGridComponent ],
    
  bootstrap:    [ AppComponent ],
  providers: [ProductsService, OptionsService]
})
export class AppModule { }
