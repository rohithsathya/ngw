import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var PR;

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss']
})
export class CorePageComponent implements OnInit,AfterViewChecked {
  coreComps: any[] = [
    {'name': 'Bg Color', 'desc': 'ngForOf directive is generally used in the shorthand 1' },
    {'name': 'Border', 'desc': 'ngForOf directive is generally used in the shorthand 2' }, 
    {'name': 'Ellipsis', 'desc': 'ngForOf directive is generally used in the shorthand 3' },
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
    {'name':'Width','desc':''},
    {'name':'Align','desc':'ngForOf directive is generally used in the shorthand 4'},
    {'name':'Row','desc':'ngForOf directive is generally used in the shorthand 5'},
    {'name':'Column','desc':'ngForOf directive is generally used in the shorthand 6'},
  ];
  currentCompIndex:number = 0;
  currentComp:any = this.coreComps[this.currentCompIndex];
  codeSnippet:any[] = [
    `
    <div bgColor="primary-400"></div>
    <div  bgColor="secondary-400" hover.bgColor="green"></div>
    `,
    `
    <div height="120px" width="120px" border="2px solid black" margin="30px"></div>
    <div height="120px" width="120px" border="2px solid black" hover.border.color="primary" margin="30px"></div>
    `,
    `
    <p ellipsis="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,

    `
    <img src="https://www.w3schools.com/css/paris.jpg" fit="cover" height="150px" width="150px" />
    `,

    `
    <p fontSize="20px">This text has size of 20px</p>
    <p fontSize="20px" hover.fontSize="30px">This text has size of 20px and will change to 30px on hover</p>
    `,

    `
    <p fontWeight="400">This text has weight of 400</p>
    <p fontWeight="400" hover.fontWeight="900">This text has weight of 400 and will change to 900 on hover</p>

    `,

    `
    <div height="120px" width="120px" gradientBgColor="primary" margin="30px"></div>
    
    `,

    `
    <div height="120px" width="120px" border="1px solid" margin="30px">
      height = 120px
    </div>
    <div height="120px" hover.height="200px" width="120px" border="1px solid" margin="30px">
      height = 120px hover = 200px
    </div>

    `,
    `
    <div height="120px" border="1px solid" margin="30px">
      margin = 30px
    </div>

    <div height="120px" border="1px solid" margin="30px" hover.margin="50px">
      margin = 30px hover margin = 50px
    </div>

    `,
    `
    <div height="120px" border="1px solid" padding="30px">
      padding = 30px
    </div>
    
    <div height="120px" border="1px solid" margin="30px" hover.padding="50px">
      padding = 30px hover padding = 50px
    </div>

    `,
    `
    <div col="100%" position="absolute" bgColor="primary-300" style="bottom: 50px;" padding="10px">
      absolutely positioned <br/> bottom 50px
     </div>
    `,
    `
    <div height="120px" width="120px" border="1px solid" margin="30px" radius="4px">
      radius = 4px
    </div>
    <div height="220px" hover.radius="50%" width="220px" border="1px solid" margin="30px" radius="4px">
       radius = 4px hover = 50%
    </div>
    `,
    `
    <div height="120px" width="120px" bgColor="white" margin="30px" shadow="2" padding="5px">shadow=2</div>
    <div height="120px" width="120px" bgColor="white" margin="30px" shadow="2" hover.shadow="5" padding="5px">shadow=2 hover=5</div>

    `,
    `
    <p fontSize="20px" textColor="primary">Primary Color Text</p>
    <p fontSize="20px" textColor="secondary" hover.textColor="teal">Secondary Color Text and will change to teal on hover</p>

    `,
    ` 
    <div height="120px" width="120px" border="1px solid" margin="30px">
      width = 120px
    </div>
    <div height="120px" hover.width="200px" width="120px" border="1px solid" margin="30px">
      width = 120px hover = 200px
    </div>
    `,
    `
    <div height="120px" width="120px" border="1px solid" margin="30px" align="topcenter">
      <div height="30px" width="30px" bgColor="pink">TC</div>
    </div>
    <div height="120px" width="120px" border="1px solid" margin="30px" align.x="center">
      <div height="30px" width="30px" bgColor="pink">C</div>
    </div>
    <div height="120px" width="120px" border="1px solid" margin="30px" align.y="bottom">
      <div height="30px" width="30px" bgColor="pink">B</div>
    </div>
    `,
    `
    <div row height="120px>
      Row
    </div>
    `,
    `
    <div height="120px" row border="1px solid" margin="30px" padding="5px">
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
  ];
  constructor( private route: ActivatedRoute,private router: Router) { }
  ngAfterViewChecked(){
    PR.prettyPrint();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentCompIndex = params['index'] ? params['index'] : 0;
    });

  }
  toggleSideBar() {
    document.body.classList.toggle('sb-sidenav-toggled');
  }
  showDetails(i){
    this.router.navigate(["/core"],{queryParams:{'index':i}});
  }

}
