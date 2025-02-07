import * as i0 from '@angular/core';
import { InjectionToken, inject, InjectFlags, Injectable, forwardRef, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import * as i1 from '@angular/common';
import { NgTemplateOutlet, NgIf, NgForOf, AsyncPipe, JsonPipe } from '@angular/common';

function ngxI18nDefaultFormatOutput(formValue) {
    return formValue;
}

const COUNTRY_ISO_CODES = [
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AI',
    'AL',
    'AM',
    'AO',
    'AR',
    'AS',
    'AT',
    'AU',
    'AW',
    'AX',
    'AZ',
    'BA',
    'BB',
    'BD',
    'BE',
    'BF',
    'BG',
    'BH',
    'BI',
    'BJ',
    'BL',
    'BM',
    'BN',
    'BO',
    'BQ',
    'BR',
    'BS',
    'BT',
    'BW',
    'BY',
    'BZ',
    'CA',
    'CC',
    'CD',
    'CF',
    'CG',
    'CH',
    'CI',
    'CK',
    'CL',
    'CM',
    'CN',
    'CO',
    'CR',
    'CU',
    'CV',
    'CW',
    'CX',
    'CY',
    'CZ',
    'DE',
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
    'EC',
    'EE',
    'EG',
    'EH',
    'ER',
    'ES',
    'ET',
    'FI',
    'FJ',
    'FK',
    'FM',
    'FO',
    'FR',
    'GA',
    'GB',
    'GD',
    'GE',
    'GF',
    'GG',
    'GH',
    'GI',
    'GL',
    'GM',
    'GN',
    'GP',
    'GQ',
    'GR',
    'GT',
    'GU',
    'GW',
    'GY',
    'HK',
    'HN',
    'HR',
    'HT',
    'HU',
    'ID',
    'IE',
    'IL',
    'IM',
    'IN',
    'IO',
    'IQ',
    'IR',
    'IS',
    'IT',
    'JE',
    'JM',
    'JO',
    'JP',
    'KE',
    'KG',
    'KH',
    'KI',
    'KM',
    'KN',
    'KP',
    'KR',
    'KW',
    'KY',
    'KZ',
    'LA',
    'LB',
    'LC',
    'LI',
    'LK',
    'LR',
    'LS',
    'LT',
    'LU',
    'LV',
    'LY',
    'MA',
    'MC',
    'MD',
    'ME',
    'MF',
    'MG',
    'MH',
    'MK',
    'ML',
    'MM',
    'MN',
    'MO',
    'MP',
    'MQ',
    'MR',
    'MS',
    'MT',
    'MU',
    'MV',
    'MW',
    'MX',
    'MY',
    'MZ',
    'NA',
    'NC',
    'NE',
    'NF',
    'NG',
    'NI',
    'NL',
    'NO',
    'NP',
    'NR',
    'NU',
    'NZ',
    'OM',
    'PA',
    'PE',
    'PF',
    'PG',
    'PH',
    'PK',
    'PL',
    'PM',
    'PR',
    'PS',
    'PT',
    'PW',
    'PY',
    'QA',
    'RE',
    'RO',
    'RS',
    'RU',
    'RW',
    'SA',
    'SB',
    'SC',
    'SD',
    'SE',
    'SG',
    'SH',
    'SI',
    'SJ',
    'SK',
    'SL',
    'SM',
    'SN',
    'SO',
    'SR',
    'SS',
    'ST',
    'SV',
    'SX',
    'SY',
    'SZ',
    'TA',
    'TC',
    'TD',
    'TG',
    'TH',
    'TJ',
    'TK',
    'TL',
    'TM',
    'TN',
    'TO',
    'TR',
    'TT',
    'TV',
    'TW',
    'TZ',
    'UA',
    'UG',
    'US',
    'UY',
    'UZ',
    'VA',
    'VC',
    'VE',
    'VG',
    'VI',
    'VN',
    'VU',
    'WF',
    'WS',
    'XK',
    'YE',
    'YT',
    'ZA',
    'ZM',
    'ZW'
];
/**
 * TODO: how localize country names?
 */
const LANGUAGE_DETAILS = {
    en: { i18nName: "English" },
    zh: { i18nName: "Chinese" },
    es: { i18nName: "Spanish" },
    ar: { i18nName: "Arabic" },
    hi: { i18nName: "Hindi" },
    bn: { i18nName: "Bengali" },
    pt: { i18nName: "Portuguese" },
    ru: { i18nName: "Russian" },
    ja: { i18nName: "Japanese" },
    de: { i18nName: "German" },
    fr: { i18nName: "French" },
    it: { i18nName: "Italian" },
    tr: { i18nName: "Turkish" },
    ko: { i18nName: "Korean" },
    vi: { i18nName: "Vietnamese" },
    ur: { i18nName: "Urdu" },
    fa: { i18nName: "Persian" },
    pl: { i18nName: "Polish" },
    nl: { i18nName: "Dutch" },
    th: { i18nName: "Thai" },
};

const NGX_I18N_INPUT_DEFAULT_CONFIGS = {
    availableLangs: ["en"],
    stringifyLang: (lang) => {
        console.debug("default stringifyLang", { lang });
        return LANGUAGE_DETAILS[lang]?.i18nName || lang;
    }
};
// TODO partial ??
const NGX_I18N_INPUT_CONFIG = new InjectionToken('NGX_I18N_INPUT_CONFIG');

class NgxI18nInputService {
    constructor() {
        this.providedConfigs = inject(NGX_I18N_INPUT_CONFIG, InjectFlags.Optional);
        this.configs$ = new BehaviorSubject({ ...(this.providedConfigs || NGX_I18N_INPUT_DEFAULT_CONFIGS) });
        this.availableLangs$ = new BehaviorSubject(this.configs$.value.availableLangs);
        this.configs$.subscribe((v) => {
            this.availableLangs$.next(v.availableLangs);
        });
    }
    setAvailableLangs(langs) {
        // langs = langs.filter((lang) => this.isLang(lang));
        if (langs.length === 0)
            langs = NGX_I18N_INPUT_DEFAULT_CONFIGS.availableLangs;
        const v = this.configs$.value;
        v.availableLangs = langs;
        this.configs$.next(v);
    }
    getAvailableLangs() {
        return this.availableLangs$.value;
    }
}
NgxI18nInputService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxI18nInputService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxI18nInputComponent {
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

class NgxI18nInputModule {
    static forRoot(configs) {
        console.log(`forRoot`, { self: this, configs });
        return {
            ngModule: NgxI18nInputModule,
            providers: [
                {
                    provide: NGX_I18N_INPUT_CONFIG,
                    useValue: { ...NGX_I18N_INPUT_DEFAULT_CONFIGS, ...configs }
                }
            ]
        };
    }
}
NgxI18nInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxI18nInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputModule, declarations: [NgxI18nInputComponent], imports: [NgTemplateOutlet,
        NgIf,
        ReactiveFormsModule,
        NgForOf,
        AsyncPipe,
        // DEVELOPMENT
        JsonPipe], exports: [NgxI18nInputComponent] });
NgxI18nInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputModule, imports: [ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: NgxI18nInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxI18nInputComponent
                    ],
                    imports: [
                        NgTemplateOutlet,
                        NgIf,
                        ReactiveFormsModule,
                        NgForOf,
                        AsyncPipe,
                        // DEVELOPMENT
                        JsonPipe
                    ],
                    exports: [
                        NgxI18nInputComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-i18n-input
 */
// export * from './lib/ngx-i18n-input.service';

/**
 * Generated bundle index. Do not edit.
 */

export { NgxI18nInputComponent, NgxI18nInputModule };
//# sourceMappingURL=ngx-i18n-input.mjs.map
