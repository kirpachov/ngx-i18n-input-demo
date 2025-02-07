import { NgModule } from '@angular/core';
import { NgxI18nInputComponent } from './ngx-i18n-input.component';
import { AsyncPipe, JsonPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NGX_I18N_INPUT_CONFIG, NGX_I18N_INPUT_DEFAULT_CONFIGS } from './types';
import * as i0 from "@angular/core";
export class NgxI18nInputModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWkxOG4taW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vd29ya3NwYWNlL3Byb2plY3RzL25neC1pMThuLWlucHV0L3NyYy9saWIvbmd4LWkxOG4taW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsOEJBQThCLEVBQXNCLE1BQU0sU0FBUyxDQUFDOztBQXNCcEcsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQW9DO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsRUFBQyxHQUFHLDhCQUE4QixFQUFFLEdBQUcsT0FBTyxFQUFDO2lCQUMxRDthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7O2dIQVpVLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQWhCM0IscUJBQXFCLGFBR3JCLGdCQUFnQjtRQUNoQixJQUFJO1FBQ0osbUJBQW1CO1FBQ25CLE9BQU87UUFDUCxTQUFTO1FBRVQsY0FBYztRQUNkLFFBQVEsYUFHUixxQkFBcUI7aUhBR1osa0JBQWtCLFlBWDNCLG1CQUFtQjs0RkFXVixrQkFBa0I7a0JBbEI5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLElBQUk7d0JBQ0osbUJBQW1CO3dCQUNuQixPQUFPO3dCQUNQLFNBQVM7d0JBRVQsY0FBYzt3QkFDZCxRQUFRO3FCQUNUO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEkxOG5JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbmd4LWkxOG4taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFzeW5jUGlwZSwgSnNvblBpcGUsIE5nRm9yT2YsIE5nSWYsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5HWF9JMThOX0lOUFVUX0NPTkZJRywgTkdYX0kxOE5fSU5QVVRfREVGQVVMVF9DT05GSUdTLCBOZ3hJMThuSW5wdXRDb25maWcgfSBmcm9tICcuL3R5cGVzJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neEkxOG5JbnB1dENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmdUZW1wbGF0ZU91dGxldCxcbiAgICBOZ0lmLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmdGb3JPZixcbiAgICBBc3luY1BpcGUsXG5cbiAgICAvLyBERVZFTE9QTUVOVFxuICAgIEpzb25QaXBlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3hJMThuSW5wdXRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJMThuSW5wdXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWdzOiBQYXJ0aWFsPE5neEkxOG5JbnB1dENvbmZpZz4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neEkxOG5JbnB1dE1vZHVsZT4ge1xuICAgIGNvbnNvbGUubG9nKGBmb3JSb290YCwgeyBzZWxmOiB0aGlzLCBjb25maWdzIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4STE4bklucHV0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOR1hfSTE4Tl9JTlBVVF9DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IHsuLi5OR1hfSTE4Tl9JTlBVVF9ERUZBVUxUX0NPTkZJR1MsIC4uLmNvbmZpZ3N9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==