import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss']
})
export class BasicPageComponent {
  readonly form: FormGroup = new FormGroup({
    title: new FormControl(null),
    name: new FormControl(null),
    description: new FormControl(null)
  });

  translatedText1: Record<string, string> | null = null;
  translatedText2: Record<string, string> | null = null;
  translatedText3: Record<string, string> | null = null;
  translatedText4: Record<string, string> | null = null;
}
