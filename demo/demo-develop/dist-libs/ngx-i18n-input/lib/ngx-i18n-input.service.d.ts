import { NgxI18nInputConfig } from './types';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxI18nInputService {
    private readonly providedConfigs;
    readonly configs$: BehaviorSubject<NgxI18nInputConfig>;
    readonly availableLangs$: BehaviorSubject<string[]>;
    constructor();
    setAvailableLangs(langs: string[]): void;
    getAvailableLangs(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxI18nInputService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxI18nInputService>;
}
