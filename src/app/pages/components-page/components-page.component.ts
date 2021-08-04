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
  coreComps: any[] = [
    { 'name': 'Button', 'desc': 'ngForOf directive is generally used in the shorthand 1' },
    { 'name': 'Form', 'desc': 'ngForOf directive is generally used in the shorthand 2' }, 
    { 'name': 'Typography', 'desc': 'ngForOf directive is generally used in the shorthand 3' },
    {'name':'Align','desc':'ngForOf directive is generally used in the shorthand 4'},
    {'name':'Row','desc':'ngForOf directive is generally used in the shorthand 5'},
    {'name':'Column','desc':'ngForOf directive is generally used in the shorthand 6'},
    {'name':'Alerts','desc':'ngForOf directive is generally used in the shorthand 7'},
    {'name':'Cards','desc':'ngForOf directive is generally used in the shorthand 8'}
  ];
  currentCompIndex:number = 0;
  currentComp:any = this.coreComps[this.currentCompIndex];
  constructor() { }

  ngOnInit(): void {
  }
  showDetails(comp,i){
    this.currentCompIndex = i;
    this.currentComp = this.coreComps[i];

  }
  toggleSideBar() {
    document.body.classList.toggle('sb-sidenav-toggled');
  }

}
