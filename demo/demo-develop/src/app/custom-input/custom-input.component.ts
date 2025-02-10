import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  template: `

  <div style="padding: 10px;" class="shining-background">
    <input [id]="inputId" [formControl]="control">
  </div>

  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ],
  styles: [
    `@keyframes shine {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .shining-background {
      width: 100%;
      // height: 100vh;
      background: linear-gradient(270deg, #ff00ff, #ffcc00, #00ffff, #ff3300, #00ff00, #3300ff);
      background-size: 400% 400%;
      animation: shine 6s ease infinite;
    }
    `
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  readonly control = new FormControl();

  @Input() inputId: string = Math.random().toString(36).substring(2);

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }
  
}
