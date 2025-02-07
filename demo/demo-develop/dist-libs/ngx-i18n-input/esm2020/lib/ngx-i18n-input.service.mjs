import { inject, Injectable, InjectFlags } from '@angular/core';
import { NGX_I18N_INPUT_CONFIG, NGX_I18N_INPUT_DEFAULT_CONFIGS } from './types';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxI18nInputService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWkxOG4taW5wdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3dvcmtzcGFjZS9wcm9qZWN0cy9uZ3gtaTE4bi1pbnB1dC9zcmMvbGliL25neC1pMThuLWlucHV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSw4QkFBOEIsRUFBc0IsTUFBTSxTQUFTLENBQUM7QUFDcEcsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFNbkQsTUFBTSxPQUFPLG1CQUFtQjtJQVE5QjtRQVBpQixvQkFBZSxHQUE4QixNQUFNLENBQUMscUJBQXFCLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pHLGFBQVEsR0FBd0MsSUFBSSxlQUFlLENBQzFFLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksOEJBQThCLENBQUMsRUFBQyxDQUM5RCxDQUFDO1FBRU8sb0JBQWUsR0FBOEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFHNUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFxQixFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWU7UUFDL0IscURBQXFEO1FBRXJELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsS0FBSyxHQUFHLDhCQUE4QixDQUFDLGNBQWMsQ0FBQztRQUU5RSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDOztpSEExQlUsbUJBQW1CO3FIQUFuQixtQkFBbUIsY0FGbEIsTUFBTTs0RkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RGbGFncyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdYX0kxOE5fSU5QVVRfQ09ORklHLCBOR1hfSTE4Tl9JTlBVVF9ERUZBVUxUX0NPTkZJR1MsIE5neEkxOG5JbnB1dENvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDT1VOVFJZX0lTT19DT0RFUyB9IGZyb20gJy4vY291bnRyeS1pc28tY29kZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEkxOG5JbnB1dFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVkQ29uZmlnczogTmd4STE4bklucHV0Q29uZmlnIHwgbnVsbCA9IGluamVjdChOR1hfSTE4Tl9JTlBVVF9DT05GSUcsIEluamVjdEZsYWdzLk9wdGlvbmFsKTtcbiAgcmVhZG9ubHkgY29uZmlncyQ6IEJlaGF2aW9yU3ViamVjdDxOZ3hJMThuSW5wdXRDb25maWc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICB7Li4uKHRoaXMucHJvdmlkZWRDb25maWdzIHx8IE5HWF9JMThOX0lOUFVUX0RFRkFVTFRfQ09ORklHUyl9XG4gICk7XG5cbiAgcmVhZG9ubHkgYXZhaWxhYmxlTGFuZ3MkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLmNvbmZpZ3MkLnZhbHVlLmF2YWlsYWJsZUxhbmdzKTtcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuY29uZmlncyQuc3Vic2NyaWJlKCh2OiBOZ3hJMThuSW5wdXRDb25maWcpID0+IHtcbiAgICAgIHRoaXMuYXZhaWxhYmxlTGFuZ3MkLm5leHQodi5hdmFpbGFibGVMYW5ncyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRBdmFpbGFibGVMYW5ncyhsYW5nczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAvLyBsYW5ncyA9IGxhbmdzLmZpbHRlcigobGFuZykgPT4gdGhpcy5pc0xhbmcobGFuZykpO1xuXG4gICAgaWYgKGxhbmdzLmxlbmd0aCA9PT0gMCkgbGFuZ3MgPSBOR1hfSTE4Tl9JTlBVVF9ERUZBVUxUX0NPTkZJR1MuYXZhaWxhYmxlTGFuZ3M7XG5cbiAgICBjb25zdCB2ID0gdGhpcy5jb25maWdzJC52YWx1ZTtcbiAgICB2LmF2YWlsYWJsZUxhbmdzID0gbGFuZ3M7XG4gICAgdGhpcy5jb25maWdzJC5uZXh0KHYpO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlTGFuZ3MoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUxhbmdzJC52YWx1ZTtcbiAgfVxuXG4gIC8vIGlzTGFuZyhsYW5nOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIHR5cGVvZiBsYW5nID09PSBcInN0cmluZ1wiICYmXG4gIC8vICAgICBsYW5nLmxlbmd0aCA+IDAgJiZcbiAgLy8gICAgIChbLi4uQ09VTlRSWV9JU09fQ09ERVNdIGFzIHN0cmluZ1tdKS5pbmNsdWRlcyhsYW5nLnRvVXBwZXJDYXNlKCkpXG4gIC8vICAgKTtcbiAgLy8gfVxuICBcbn1cbiJdfQ==