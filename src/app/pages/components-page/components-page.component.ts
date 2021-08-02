import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit {

  currentTabIndex:number = 0;
  codeSnippet:string = `
    <h3>PHmG123DG1233..!!!</h3>
    <button ngwBtn="" margin="10px" color="primary>Primary Button</button>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
