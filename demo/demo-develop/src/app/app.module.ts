import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { BasicPageModule } from './basic-page/basic-page.module';
import { NgxI18nInputModule } from 'dist-libs/ngx-i18n-input';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicPageModule,
    NgxI18nInputModule.forRoot({
      availableLangs: ["mario", "it", "en"],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
