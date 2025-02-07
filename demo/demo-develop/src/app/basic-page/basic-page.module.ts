import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { BasicPageComponent } from './basic-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxI18nInputModule } from 'dist-libs/ngx-i18n-input';
import { CustomInputModule } from "../custom-input/custom-input.module";

@NgModule({
  declarations: [
    BasicPageComponent,
  ],
  imports: [
    CommonModule,
    JsonPipe,
    ReactiveFormsModule,
    NgxI18nInputModule,
    FormsModule,
    CustomInputModule
],
  exports: [
    BasicPageComponent
  ]
})
export class BasicPageModule { }
