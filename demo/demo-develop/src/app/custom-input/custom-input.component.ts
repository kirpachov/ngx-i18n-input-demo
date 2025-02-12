import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxI18nInputContext, NGX_I18N_INPUT_CONTEXT, isNgxI18nInputContext } from "dist-libs/ngx-i18n-input";

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

  control: FormControl = new FormControl();

  @Input() inputId: string = Math.random().toString(36).substring(2);

  writeValue(obj: any): void {
    this.control.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe({ next: (v: unknown) => fn(v) });
  }

  registerOnTouched(fn: any): void {
    this.control.valueChanges.subscribe({ next: (v: unknown) => fn(v) });
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  private readonly context: NgxI18nInputContext | null = inject(NGX_I18N_INPUT_CONTEXT, { optional: true });
  ngOnInit(): void {
    // this.context.registerInput(this);

    if (this.context) {
      this.control.valueChanges.subscribe({ next: (v: unknown) => this.context?.control.setValue(v) });
      if (isNgxI18nInputContext(this.context)) {
        // this.context.control.setValue('ciao');
        // this.control = this.context.control;
      }
      // else { console.warn("invalid context", this.context); }
    }
  }

}
