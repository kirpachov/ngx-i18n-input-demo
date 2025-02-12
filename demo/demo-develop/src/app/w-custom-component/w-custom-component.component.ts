import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGX_I18N_INPUT_CONFIG, NgxI18nInputModule } from 'dist-libs/ngx-i18n-input';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-w-custom-component',
  standalone: true,
  imports: [
    CommonModule,
    NgxI18nInputModule,
    FormsModule,
  ],
  templateUrl: './w-custom-component.component.html',
  styleUrls: ['./w-custom-component.component.scss'],
  providers: [
    {
      provide: NGX_I18N_INPUT_CONFIG,
      useValue: {
        defaultInputComponent: CustomInputComponent,
        availableLangs: ['en', 'it', "es", "de"],
      },
    }
  ]
})
export class WCustomComponentComponent {
  model: any;
}
