import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { BasicPageComponent } from './basic-page/basic-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'basic',
    component: BasicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
