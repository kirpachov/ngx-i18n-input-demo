import { Component, EventEmitter, forwardRef, TrackByFunction } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-array-input',
  templateUrl: './array-input.component.html',
  styleUrls: ['./array-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArrayInputComponent),
      multi: true
    }
  ],
})
export class ArrayInputComponent implements ControlValueAccessor {

  isDisabled: boolean = false;
  array: string[] = [
    ""
  ];

  readonly onChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  trackByFn: TrackByFunction<string> = (index: number, item: string) => {
    return index;
  };

  writeValue(obj: unknown): void {
    // console.log(`writeValue`, obj);
    if (Array.isArray(obj)) {
      this.array = obj;
      return;
    }

    this.array = [""];
  }

  registerOnChange(fn: any): void {
    this.onChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onChange.subscribe(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  addAfter(index: number) {
    this.array.splice(index + 1, 0, "");
  }

  changed(index: number, value: string): void {
    this.array[index] = value;
    this.emitChanges();
  }

  removeAt(index: number) {
    this.array.splice(index, 1);
    this.emitChanges();
  }

  private emitChanges(): void {
    this.onChange.next(this.array);
  }
}
