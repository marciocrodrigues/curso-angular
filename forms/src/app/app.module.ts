import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormModule } from './data-form/data-form.module';
import { SharedModule } from './shared/shared.module';
import { TemplateFormModule } from './template-form/template-form.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DataFormModule,
    TemplateFormModule
  ],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
