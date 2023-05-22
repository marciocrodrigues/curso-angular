import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TemplateFormModule { }
