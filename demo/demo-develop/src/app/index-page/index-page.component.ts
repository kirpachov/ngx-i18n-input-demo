import { Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent {
  readonly routes: {url: string, title: string}[] = [{
    url: "basic",
    title: "Basic"
  },
  {
    url: "playground",
    title: "Playground"
  }
];
}
