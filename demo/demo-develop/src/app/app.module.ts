import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { BasicPageModule } from './basic-page/basic-page.module';
import { NgxI18nInputModule } from 'dist-libs/ngx-i18n-input';
import { CustomInputModule } from './custom-input/custom-input.module';
import { RouterModule } from '@angular/router';
import { PlaygroundModule } from './playground/playground.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicPageModule,
    PlaygroundModule,
    CustomInputModule,
    RouterModule,
    NgxI18nInputModule.forRoot({
      availableLangs: ["it", "en", "de", "es"],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
