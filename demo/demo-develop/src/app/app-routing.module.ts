import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'basic',
    component: BasicPageComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: `w-custom-component`,
    loadComponent: () => import('./w-custom-component/w-custom-component.component').then(m => m.WCustomComponentComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
