import { InjectionToken } from "@angular/core";
export type Lang = string;
export type Langs = Lang[];
export interface NgxI18nInputConfig {
    availableLangs: Langs;
    stringifyLang: (lang: string) => string;
}
export declare const NGX_I18N_INPUT_DEFAULT_CONFIGS: NgxI18nInputConfig;
export declare const NGX_I18N_INPUT_CONFIG: InjectionToken<NgxI18nInputConfig>;
