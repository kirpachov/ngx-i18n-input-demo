import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxI18nInputModule } from 'dist-libs/ngx-i18n-input';
import { ArrayInputModule } from '../array-input/array-input.module';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    JsonPipe,
    ReactiveFormsModule,
    NgxI18nInputModule,
    FormsModule,
    CustomInputModule,
    ArrayInputModule,
    RouterModule,
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class PlaygroundModule { }
