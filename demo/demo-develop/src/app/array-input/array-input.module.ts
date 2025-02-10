import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayInputComponent } from './array-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArrayInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ArrayInputComponent
  ]
})
export class ArrayInputModule { }
