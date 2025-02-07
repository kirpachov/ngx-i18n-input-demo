import { OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormGroup } from '@angular/forms';
import { Lang } from './types';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxI18nInputComponent<T> implements OnInit, ControlValueAccessor {
    private readonly service;
    configs: import("./types").NgxI18nInputConfig;
    readonly forms: FormGroup;
    formatOutput: (value: Record<Lang, T | null>) => Record<Lang, T | null>;
    valueChanges: Observable<Record<Lang, T | null>>;
    /**
     * TODO when touched, emit an event
     */
    touchedChanges: Observable<void>;
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
    inputTemplate: TemplateRef<unknown> | null;
    /**
     * Customize language name template.
     * Example with both input and label templates:
     */
    labelTemplate: TemplateRef<unknown> | null;
    readonly availableLangs$: import("rxjs").BehaviorSubject<string[]>;
    ngOnInit(): void;
    writeValue(value: unknown): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxI18nInputComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxI18nInputComponent<any>, "ngx-i18n-input", never, { "formatOutput": "formatOutput"; "inputTemplate": "inputTemplate"; "labelTemplate": "labelTemplate"; }, { "valueChanges": "valueChanges"; "touchedChanges": "touchedChanges"; }, never, never, false, never>;
}
