import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataFormComponent } from './data-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: []
})
export class DataFormModule { }
