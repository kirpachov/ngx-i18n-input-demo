import { ChangeDetectionStrategy, Component, forwardRef, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ngxI18nDefaultFormatOutput } from './functions';
import { map, Observable } from 'rxjs';
import { NgxI18nInputService } from './ngx-i18n-input.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class NgxI18nInputComponent {
    constructor() {
        this.service = inject(NgxI18nInputService);
        // readonly configs$ = this.service.configs$;
        this.configs = this.service.configs$.value;
        this.forms = new FormGroup({});
        this.formatOutput = ngxI18nDefaultFormatOutput;
        this.valueChanges = this.forms.valueChanges.pipe(map(this.formatOutput));
        /**
         * TODO when touched, emit an event
         */
        this.touchedChanges = new Observable();
        /**
         * Customize input template. Suggested but not required.
         * Usage:
         * ```html
         *  <ng-template #titleTemplate let-all>
         *   <input [formControl]="all.control">
         *  </ng-template>
         *
         *  <ngx-i18n-input [inputTemplate]="titleTemplate" formControlName="title">
         * ```
         */
        this.inputTemplate = null;
        /**
         * Customize language name template.
         * Example with both input and label templates:
         */
        this.labelTemplate = null;
        this.availableLangs$ = this.service.availableLangs$;
    }
    ngOnInit() {
        this.availableLangs$.subscribe({ next: (langs) => {
                langs.forEach((lang) => {
                    this.forms.addControl(lang, new FormControl(null));
                });
            } });
        this.service.configs$.subscribe({ next: (configs) => this.configs = configs });
    }
    writeValue(value) {
        if (value === null || value === undefined)
            value = {};
        if (typeof value !== 'object') {
            console.warn('NgxI18nInputComponent: value must be an object or null. Will reset input. got ', value);
            value = {};
        }
        this.forms.patchValue(value, { emitEvent: false });
    }
    registerOnChange(fn) {
        this.valueChanges.subscribe({
            next: (value) => fn(value)
        });
    }
    registerOnTouched(fn) {
        this.registerOnChange(fn);
    }
    setDisabledState(isDisabled) {
        console.log("disabledState");
        this.forms[isDisabled ? 'disable' : 'enable']();
    }
}
NgxI18nInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxI18nInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: NgxI18nInputComponent, selector: "ngx-i18n-input", inputs: { formatOutput: "formatOutput", inputTemplate: "inputTemplate", labelTemplate: "labelTemplate" }, outputs: { valueChanges: "valueChanges", touchedChanges: "touchedChanges" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxI18nInputComponent),
            multi: true
        }
    ], ngImport: i0, template: "<form [formGroup]=\"forms\">\n  <ng-template #defaultInputTemplate let-all>\n    <input [formControl]=\"all.control\">\n  </ng-template>\n\n  <ng-template #defaultlabelTemplate let-all>\n    <span>{{all.stringify(all.language)}}</span>\n  </ng-template>\n\n  <ng-container *ngFor=\"let lang of (availableLangs$ | async)\">\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultlabelTemplate; context: {\n      $implicit: {\n        language: lang,\n        stringify: configs.stringifyLang,\n      }\n      }\"></ng-container>\n\n    <ng-container *ngTemplateOutlet=\"inputTemplate || defaultInputTemplate; context: {\n      $implicit: {\n        language: lang,\n        control: forms.controls[lang]\n      }\n      }\"></ng-container>\n  </ng-container>\n</form>", dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-i18n-input', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => NgxI18nInputComponent),
                            multi: true
                        }
                    ], template: "<form [formGroup]=\"forms\">\n  <ng-template #defaultInputTemplate let-all>\n    <input [formControl]=\"all.control\">\n  </ng-template>\n\n  <ng-template #defaultlabelTemplate let-all>\n    <span>{{all.stringify(all.language)}}</span>\n  </ng-template>\n\n  <ng-container *ngFor=\"let lang of (availableLangs$ | async)\">\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultlabelTemplate; context: {\n      $implicit: {\n        language: lang,\n        stringify: configs.stringifyLang,\n      }\n      }\"></ng-container>\n\n    <ng-container *ngTemplateOutlet=\"inputTemplate || defaultInputTemplate; context: {\n      $implicit: {\n        language: lang,\n        control: forms.controls[lang]\n      }\n      }\"></ng-container>\n  </ng-container>\n</form>" }]
        }], propDecorators: { formatOutput: [{
                type: Input
            }], valueChanges: [{
                type: Output
            }], touchedChanges: [{
                type: Output
            }], inputTemplate: [{
                type: Input
            }], labelTemplate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWkxOG4taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vd29ya3NwYWNlL3Byb2plY3RzL25neC1pMThuLWlucHV0L3NyYy9saWIvbmd4LWkxOG4taW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vd29ya3NwYWNlL3Byb2plY3RzL25neC1pMThuLWlucHV0L3NyYy9saWIvbmd4LWkxOG4taW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFtQyxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBZS9ELE1BQU0sT0FBTyxxQkFBcUI7SUFibEM7UUFlbUIsWUFBTyxHQUF3QixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RSw2Q0FBNkM7UUFFN0MsWUFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUU3QixVQUFLLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckMsaUJBQVksR0FBOEQsMEJBQTBCLENBQUM7UUFFcEcsaUJBQVksR0FBdUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUVsSDs7V0FFRztRQUNPLG1CQUFjLEdBQXFCLElBQUksVUFBVSxFQUFRLENBQUM7UUFFcEU7Ozs7Ozs7Ozs7V0FVRztRQUNNLGtCQUFhLEdBQWdDLElBQUksQ0FBQztRQUUzRDs7O1dBR0c7UUFDTSxrQkFBYSxHQUFnQyxJQUFJLENBQUM7UUFFbEQsb0JBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztLQXNDekQ7SUFwQ0MsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQ3RELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVM7WUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRXRELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0ZBQWdGLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEcsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBZ0MsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzFCLElBQUksRUFBRSxDQUFDLEtBQTZCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDbkQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7bUhBekVVLHFCQUFxQjt1R0FBckIscUJBQXFCLGdPQVJyQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3BELEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRiwwQkNsQkgsd3dCQXdCTzs0RkRKTSxxQkFBcUI7a0JBYmpDLFNBQVM7K0JBQ0UsZ0JBQWdCLG1CQUdULHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzhCQVdRLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUksWUFBWTtzQkFBckIsTUFBTTtnQkFLRyxjQUFjO3NCQUF2QixNQUFNO2dCQWFFLGFBQWE7c0JBQXJCLEtBQUs7Z0JBTUcsYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIGluamVjdCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMYW5nIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBuZ3hJMThuRGVmYXVsdEZvcm1hdE91dHB1dCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7IG1hcCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmd4STE4bklucHV0U2VydmljZSB9IGZyb20gJy4vbmd4LWkxOG4taW5wdXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1pMThuLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1pMThuLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4STE4bklucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEkxOG5JbnB1dENvbXBvbmVudDxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZTogTmd4STE4bklucHV0U2VydmljZSA9IGluamVjdChOZ3hJMThuSW5wdXRTZXJ2aWNlKTtcbiAgLy8gcmVhZG9ubHkgY29uZmlncyQgPSB0aGlzLnNlcnZpY2UuY29uZmlncyQ7XG5cbiAgY29uZmlncyA9IHRoaXMuc2VydmljZS5jb25maWdzJC52YWx1ZTtcblxuICByZWFkb25seSBmb3JtczogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG5cbiAgQElucHV0KCkgZm9ybWF0T3V0cHV0OiAodmFsdWU6IFJlY29yZDxMYW5nLCBUIHwgbnVsbD4pID0+IFJlY29yZDxMYW5nLCBUIHwgbnVsbD4gPSBuZ3hJMThuRGVmYXVsdEZvcm1hdE91dHB1dDtcblxuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPFJlY29yZDxMYW5nLCBUIHwgbnVsbD4+ID0gdGhpcy5mb3Jtcy52YWx1ZUNoYW5nZXMucGlwZShtYXAodGhpcy5mb3JtYXRPdXRwdXQpKTtcblxuICAvKipcbiAgICogVE9ETyB3aGVuIHRvdWNoZWQsIGVtaXQgYW4gZXZlbnRcbiAgICovXG4gIEBPdXRwdXQoKSB0b3VjaGVkQ2hhbmdlczogT2JzZXJ2YWJsZTx2b2lkPiA9IG5ldyBPYnNlcnZhYmxlPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEN1c3RvbWl6ZSBpbnB1dCB0ZW1wbGF0ZS4gU3VnZ2VzdGVkIGJ1dCBub3QgcmVxdWlyZWQuXG4gICAqIFVzYWdlOlxuICAgKiBgYGBodG1sXG4gICAqICA8bmctdGVtcGxhdGUgI3RpdGxlVGVtcGxhdGUgbGV0LWFsbD5cbiAgICogICA8aW5wdXQgW2Zvcm1Db250cm9sXT1cImFsbC5jb250cm9sXCI+XG4gICAqICA8L25nLXRlbXBsYXRlPlxuICAgKlxuICAgKiAgPG5neC1pMThuLWlucHV0IFtpbnB1dFRlbXBsYXRlXT1cInRpdGxlVGVtcGxhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxuICAgKiBgYGBcbiAgICovXG4gIEBJbnB1dCgpIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHVua25vd24+IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEN1c3RvbWl6ZSBsYW5ndWFnZSBuYW1lIHRlbXBsYXRlLlxuICAgKiBFeGFtcGxlIHdpdGggYm90aCBpbnB1dCBhbmQgbGFiZWwgdGVtcGxhdGVzOlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dW5rbm93bj4gfCBudWxsID0gbnVsbDtcblxuICByZWFkb25seSBhdmFpbGFibGVMYW5ncyQgPSB0aGlzLnNlcnZpY2UuYXZhaWxhYmxlTGFuZ3MkO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXZhaWxhYmxlTGFuZ3MkLnN1YnNjcmliZSh7bmV4dDogKGxhbmdzOiBMYW5nW10pID0+IHtcbiAgICAgIGxhbmdzLmZvckVhY2goKGxhbmc6IExhbmcpID0+IHtcbiAgICAgICAgdGhpcy5mb3Jtcy5hZGRDb250cm9sKGxhbmcsIG5ldyBGb3JtQ29udHJvbChudWxsKSk7XG4gICAgICB9KTtcbiAgICB9fSk7XG5cbiAgICB0aGlzLnNlcnZpY2UuY29uZmlncyQuc3Vic2NyaWJlKHtuZXh0OiAoY29uZmlncykgPT4gdGhpcy5jb25maWdzID0gY29uZmlnc30pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB2YWx1ZSA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignTmd4STE4bklucHV0Q29tcG9uZW50OiB2YWx1ZSBtdXN0IGJlIGFuIG9iamVjdCBvciBudWxsLiBXaWxsIHJlc2V0IGlucHV0LiBnb3QgJywgdmFsdWUpO1xuICAgICAgdmFsdWUgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm1zLnBhdGNoVmFsdWUodmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAodmFsdWU6IFJlY29yZDxMYW5nLCBUIHwgbnVsbD4pID0+IGZuKHZhbHVlKVxuICAgIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJPbkNoYW5nZShmbik7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcImRpc2FibGVkU3RhdGVcIik7XG4gICAgdGhpcy5mb3Jtc1tpc0Rpc2FibGVkID8gJ2Rpc2FibGUnIDogJ2VuYWJsZSddKCk7XG4gIH1cblxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3Jtc1wiPlxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRJbnB1dFRlbXBsYXRlIGxldC1hbGw+XG4gICAgPGlucHV0IFtmb3JtQ29udHJvbF09XCJhbGwuY29udHJvbFwiPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdGxhYmVsVGVtcGxhdGUgbGV0LWFsbD5cbiAgICA8c3Bhbj57e2FsbC5zdHJpbmdpZnkoYWxsLmxhbmd1YWdlKX19PC9zcGFuPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxhbmcgb2YgKGF2YWlsYWJsZUxhbmdzJCB8IGFzeW5jKVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsYWJlbFRlbXBsYXRlIHx8IGRlZmF1bHRsYWJlbFRlbXBsYXRlOyBjb250ZXh0OiB7XG4gICAgICAkaW1wbGljaXQ6IHtcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmcsXG4gICAgICAgIHN0cmluZ2lmeTogY29uZmlncy5zdHJpbmdpZnlMYW5nLFxuICAgICAgfVxuICAgICAgfVwiPjwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImlucHV0VGVtcGxhdGUgfHwgZGVmYXVsdElucHV0VGVtcGxhdGU7IGNvbnRleHQ6IHtcbiAgICAgICRpbXBsaWNpdDoge1xuICAgICAgICBsYW5ndWFnZTogbGFuZyxcbiAgICAgICAgY29udHJvbDogZm9ybXMuY29udHJvbHNbbGFuZ11cbiAgICAgIH1cbiAgICAgIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Zvcm0+Il19