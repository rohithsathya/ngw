import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var PR;
declare var ngwCodeCopy;

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit,AfterViewChecked {

  currentTabIndex:number = 0;
  
  coreComps: any[] = [
    { 'name': 'Avatar', 'id': 'avatar' },
    { 'name': 'Alerts', 'id': 'alert' },
    { 'name': 'Button', 'id': 'button' },
    { 'name': 'Badge', 'id': 'badge' },
    { 'name': 'Cards', 'id': 'card' },
    { 'name': 'Form', 'id': 'form' },
    { 'name': 'Gradient Cards', 'id': 'gc' },
    { 'name': 'Image Cards', 'id': 'imageCard' },
    { 'name': 'Info Cards', 'id': 'infoCard' },
    { 'name': 'Stat Cards', 'id': 'stat' },
    { 'name': 'Typography', 'id': 'typo' },
  ];
  currentCompIndex:number = 0;
  currentComponent:any;
  currentComp:any = this.coreComps[this.currentCompIndex];
  profiles = ['1','2','3','4','5','6'];
  @ViewChild('pageContainer') pageContainer:ElementRef;

  constructor(private route: ActivatedRoute,private router: Router) { }
  ngAfterViewChecked(){
    PR.prettyPrint();
    ngwCodeCopy.apply();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentCompIndex = params['index'] ? params['index'] : 0;
      this.currentTabIndex = 0; //reset tab also
      this.currentComponent = this.coreComps[this.currentCompIndex];

    });
  }
  toggleSideBar() {
    document.body.classList.toggle('sb-sidenav-toggled');
  }

  showDetails(i){
    this.pageContainer.nativeElement.scrollTop = 0;
    this.router.navigate(["/components"],{queryParams:{'index':i}});
  }

 
  

}
