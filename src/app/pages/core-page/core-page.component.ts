import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss']
})
export class CorePageComponent implements OnInit {

  coreComps: any[] = [
    { 'name': 'Bg Color', 'desc': 'ngForOf directive is generally used in the shorthand 1' },
    { 'name': 'Border', 'desc': 'ngForOf directive is generally used in the shorthand 2' }, 
    { 'name': 'Ellipsis', 'desc': 'ngForOf directive is generally used in the shorthand 3' },
    {'name':'Fit','desc':'ngForOf directive is generally used in the shorthand 4'},
    {'name':'Font Size','desc':'ngForOf directive is generally used in the shorthand 5'},
    {'name':'Font Weight','desc':'ngForOf directive is generally used in the shorthand 6'},
    {'name':'Gradient Bg','desc':'ngForOf directive is generally used in the shorthand 7'},
    {'name':'Height','desc':'ngForOf directive is generally used in the shorthand 8'},
    {'name':'Margin','desc':'ngForOf directive is generally used in the shorthand 9'},
    {'name':'Padding','desc':'ngForOf directive is generally used in the shorthand 10'},
    {'name':'Position','desc':''},
    {'name':'Radius','desc':''},
    {'name':'Shadow','desc':''},
    {'name':'Text Color','desc':''},
    {'name':'Width','desc':''}
  ];
  currentCompIndex:number = 0;
  currentComp:any = this.coreComps[this.currentCompIndex];

  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    document.body.classList.toggle('sb-sidenav-toggled');
  }
  showDetails(comp,i){
    console.log("PHmG123DG1233...!!!");
    console.log(comp,i);
    this.currentCompIndex = i;
    this.currentComp = this.coreComps[i];

  }

}
