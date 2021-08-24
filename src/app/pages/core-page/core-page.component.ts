import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var PR;
declare var ngwCodeCopy;

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss']
})
export class CorePageComponent implements OnInit,AfterViewChecked {
  coreComps: any[] = [
    {'name': 'Bg Color', 'id':'bgColor' },
    {'name': 'Border', 'id':'border' }, 
    {'name': 'Ellipsis', 'id':'ellipsis' },
    {'name':'Fit','id':'fit'},
    {'name':'Font Size','id':'fontSize'},
    {'name':'Font Weight','id':'fontWeight'},
    {'name':'Gradient Bg','id':'gBg'},
    {'name':'Height','id':'height'},
    {'name':'Margin','id':'margin'},
    {'name':'Padding','id':'padding'},
    {'name':'Position','id':'position'},
    {'name':'Radius','id':'radius'},
    {'name':'Shadow','id':'shadow'},
    {'name':'Text Color','id':'textColor'},
    {'name':'Width','id':'width'},
    {'name':'Align','id':'align'},
    {'name':'Row','id':'row'},
    {'name':'Column','id':'column'},
  ];
  currentCompIndex:number = 0;
  currentComponent:any;
  currentComp:any = this.coreComps[this.currentCompIndex];
  codeSnaps:any = {
    bgColor:`
    <div bgColor="primary"></div>
    <div bgColor="#bdb76b" hover.bgColor="green"></div>
    `,
    border:`
    <div border="2px solid black"></div>
    <div border="2px solid black" hover.border.color="primary"></div>
    `,
    ellipsis:`
    <p ellipsis="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    `,
    fit:`
    <img src="img.jpg" fit="cover" height="150px" width="150px" />
    `,
    fontSize:  `
    <p fontSize="20px">This text has size of 20px</p>
    <p fontSize="20px" hover.fontSize="30px">This text has size of 20px and will change to 30px on hover</p>
    `,
    fontWeight: `
    <p fontWeight="400">This text has weight of 400</p>
    <p fontWeight="400" hover.fontWeight="900">This text has weight of 400 and will change to 900 on hover</p>
    `,
    gBg:`
    <div height="120px" width="120px" gradientBgColor="primary"></div>
    `,
    height:`
    <div height="120px" width="120px">height = 120px</div>
    <div height="120px" hover.height="200px" width="120px">height = 120px hover = 200px</div>
    `,
    margin:`
    <div margin="30px">margin = 30px</div>
    <div margin="30px" hover.margin="50px">margin = 30px hover margin = 50px</div>
    `,
    padding:`
    <div padding="30px">padding = 30px</div>
    <div padding="30px" hover.padding="50px">padding = 30px hover padding = 50px</div>
    `,
    position:`
    <div position="absolute" bgColor="primary" style="bottom: 50px;" padding="10px">
      absolutely positioned bottom 50px
    </div>
    `,
    radius:`
    <div border="1px solid" radius="4px"> radius = 4px </div>
    <div border="1px solid" radius="4px" hover.radius="50%"> radius = 4px hover = 50% </div>
    `,
    shadow:`
    <div shadow="3"> shadow=3 </div>
    <div shadow="2" hover.shadow="5"> shadow=2 hover=5 </div>
    `,
    textColor:`
    <p textColor="primary">Primary Color Text</p>
    <p textColor="secondary" hover.textColor="teal">Secondary Color Text and will change to teal on hover</p>
    `,
    width: ` 
    <div width="120px" height="120px"> width = 120px </div>
    <div width="120px" hover.width="200px" height="120px"> width = 120px hover = 200px </div>
    `,
    align:`
    <div height="120px" width="120px" align="topcenter">
      <div>TC</div>
    </div>
    <div height="120px" width="120px" align.x="center">
      <div>C</div>
    </div>
    <div height="120px" width="120px" align.y="bottom">
      <div>B</div>
    </div>
    `,
    row:`
    <div row height="120px> Row </div>
    `,
    col: `
    <div row height="120px">
      <div col.lg="33%" col.md="50%" col.sm="100%" bgColor="primary">
          33-50-100
      </div>
      <div col.lg="33%" col.md="50%" col.sm="100%" bgColor="secondary">
          33-50-100
      </div>
      <div col.lg="fill" col.md="50%" col.sm="100%" bgColor="warning">
          fill-50-100
      </div>
    </div>
    `
  }
  codeSnippet:any[] = [];
  @ViewChild('pageContainer') pageContainer:ElementRef;
  constructor( private route: ActivatedRoute,private router: Router) { }
  ngAfterViewChecked(){
    PR.prettyPrint();
    ngwCodeCopy.apply();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentCompIndex = params['index'] ? params['index'] : 0;
      this.currentComponent = this.coreComps[this.currentCompIndex];
    });
  }
  toggleSideBar() {
    document.body.classList.toggle('sb-sidenav-toggled');
  }
  showDetails(i){
    this.pageContainer.nativeElement.scrollTop = 0;
    this.router.navigate(["/core"],{queryParams:{'index':i}});
  }

}
