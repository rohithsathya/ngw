import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var PR;

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit,AfterViewChecked {

  currentTabIndex:number = 0;
  codeSnippet:string[] = [
    `
      <button ngwBtn="" color="">Default Button</button>
      <button ngwBtn="" color="primary">Primary Button</button>
      <button ngwBtn="" color="secondary">Secondary Button</button>
      <button ngwBtn="" color="success">Success Button</button>
      <button ngwBtn="" color="warning">Warning Button</button>
      <button ngwBtn="" color="error">Error Button</button>
  `,
  `
  <button ngwBtn="outline" color="">Outline Button</button>
  <button ngwBtn="outline" color="primary">Primary Button</button>
  <button ngwBtn="outline" color="secondary">Secondary Button</button>
  <button ngwBtn="outline" color="success">Success Button</button>
  <button ngwBtn="outline" color="warning">Warning Button</button>
  <button ngwBtn="outline" color="error">Error Button</button>
  `,
  `
  <button ngwBtn="outline"  radius="9999px" color="" >Outline Rounded Button</button>
  <button ngwBtn="outline"  radius="9999px" color="primary">Primary Button</button>
  <button ngwBtn="outline"  radius="9999px" color="secondary">Secondary Button</button>
  <button ngwBtn="outline"  radius="9999px" color="success">Success Button</button>
  <button ngwBtn="outline"  radius="9999px" color="warning">Warning Button</button>
  <button ngwBtn="outline"  radius="9999px" color="error">Error Button</button>
  `,

  `
  <button ngwBtn="flat"  color="">Flat Button</button>
  <button ngwBtn="flat"  color="primary">Primary Button</button>
  <button ngwBtn="flat"  color="secondary">Secondary Button</button>
  <button ngwBtn="flat"  color="success">Success Button</button>
  <button ngwBtn="flat"  color="warning">Warning Button</button>
  <button ngwBtn="flat"  color="error">Error Button</button>
  `,
  `
  <button ngwBtn="flat" radius="9999px" color="">Flat Rounded Button</button>
  <button ngwBtn="flat" radius="9999px" color="primary">Primary Button</button>
  <button ngwBtn="flat" radius="9999px" color="secondary">Secondary Button</button>
  <button ngwBtn="flat" radius="9999px" color="success">Success Button</button>
  <button ngwBtn="flat" radius="9999px" color="warning">Warning Button</button>
  <button ngwBtn="flat" radius="9999px" color="error">Error Button</button>
  `,
  `
  <button ngwBtn="raised" color="">Raised Button</button>
  <button ngwBtn="raised" color="primary">Primary Button</button>
  <button ngwBtn="raised" color="secondary">Secondary Button</button>
  <button ngwBtn="raised" color="success">Success Button</button>
  <button ngwBtn="raised" color="warning">Warning Button</button>
  <button ngwBtn="raised" color="error">Error Button</button>
  `,

  `
  <button ngwBtn="icon" color=""><i class="material-icons">work</i></button>
  <button ngwBtn="icon" color="primary"><i class="material-icons">logout</i></button>
  <button ngwBtn="icon" color="secondary"><i class="material-icons">pending_actions</i></button>
  <button ngwBtn="icon" color="success"><i class="material-icons">article</i></button>
  <button ngwBtn="icon" color="warning"><i class="material-icons">favorite_border</i></button>
  <button ngwBtn="icon" color="error"><i class="material-icons">bug_report</i></button>
  `,
  `
  <button ngwBtn="flat" margin="10px" color=""><i class="material-icons">bug_report</i> Message</button>
  <button ngwBtn="flat" margin="10px" radius="9999px" color="primary"><i class="material-icons">home</i> Home</button>
  <button ngwBtn="outline" margin="10px" color="secondary"><i class="material-icons">favorite</i> Likes</button>
  <button ngwBtn="outline" margin="10px" color="success" radius="9999px"><i class="material-icons">west</i> Back</button>
  <button ngwBtn="" margin="10px" radius="9999px" color="warning">Proceed<i class="material-icons">east</i></button>
  <button ngwBtn="flat" margin="10px" color="error"><i class="material-icons">edit_calendar</i> &nbsp;Edit</button>
  `,
  `
 
  <form>
  <div padding="8px">
      <label ngwTypo="caption">Default State</label>
      <input type="text" ngwFormControl placeholder="Enter a value" />
  </div>

  <div padding="8px">
      <label ngwTypo="caption">Success State</label>
      <input type="text" ngwFormControl color="success" placeholder="Enter a value" />
  </div>

  <div padding="8px">
      <label ngwTypo="caption">Warning State</label>
      <input type="text" ngwFormControl color="warning" placeholder="Enter a value" />
  </div>

  <div padding="8px">
      <label ngwTypo="caption">Error State</label>
      <input type="text" ngwFormControl color="error" placeholder="Enter a value" />
  </div>
</form>
  `,
  `
  <p ngwTypo="display-4">display-4</p>
  <p ngwTypo="display-3">display-3</p>
  <p ngwTypo="display-2">display-2</p>
  <p ngwTypo="display-1">display-1</p>
  <p ngwTypo="headline">headline</p>
  <p ngwTypo="title">title</p>
  <p ngwTypo="subheading-2">subheading-2</p>
  <p ngwTypo="subheading-1">subheading-1</p>
  <p ngwTypo="body-2">body-2</p>
  <p ngwTypo="body-1">body-1</p>
  <p ngwTypo="body">body</p>
  <p ngwTypo="caption">caption</p>
  <p ngwTypo="button">button</p>
  `,
  `
  <div row bgColor="primary-100" padding="8px" width="500px" align.y="center" radius="4px">
    <div margin="8px">
        <div height="40px" width="40px" bgColor="primary-300" textColor="primary-contrast" radius="50%" align="centercenter">
            <i class="material-icons">done</i>
        </div>
    </div>
    <div col="fill" padding="8px 8px 0px 0px">
        <p ngwTypo="subheading-2" textColor="primary-700" margin.bottom="8px">Primary !</p>
        <p ngwTypo="body" textColor="primary-700" margin.bottom="8px"> User added successfully. </p>
    </div>
</div>
  `,
  `
  <div row bgColor="secondary-100" padding="8px" width="500px" align.y="center" radius="4px">
    <div margin="8px">
        <div height="40px" width="40px" bgColor="secondary-300" textColor="secondary-contrast" radius="50%" align="centercenter">
            <i class="material-icons">done</i>
        </div>
    </div>
    <div col="fill" padding="8px 8px 0px 0px">
        <p ngwTypo="subheading-2" textColor="secondary-700" margin.bottom="8px">Secondary !</p>
        <p ngwTypo="body" textColor="secondary-700" margin.bottom="8px"> User added successfully. </p>
    </div>
</div>
  `,
  `
  <div row bgColor="success-100" padding="8px" width="500px" align.y="center" radius="4px">
    <div margin="8px">
        <div height="40px" width="40px" bgColor="success-300" textColor="success-contrast" radius="50%" align="centercenter">
            <i class="material-icons">done</i>
        </div>
    </div>
    <div col="fill" padding="8px 8px 0px 0px">
        <p ngwTypo="subheading-2" textColor="success-700" margin.bottom="8px">Success !</p>
        <p ngwTypo="body" textColor="success-700" margin.bottom="8px"> User added successfully. </p>
    </div>
  </div>
  `,
  `
  <div row bgColor="warning-100" padding="8px" width="500px" align.y="center" radius="4px">
  <div margin="8px">
      <div height="40px" width="40px" bgColor="warning-300" textColor="warning-contrast" radius="50%" align="centercenter">
          <i class="material-icons">done</i>
      </div>
  </div>
  <div col="fill" padding="8px 8px 0px 0px">
      <p ngwTypo="subheading-2" textColor="warning-700" margin.bottom="8px">Warning !</p>
      <p ngwTypo="body" textColor="warning-700" margin.bottom="8px"> User added successfully. </p>
  </div>
</div>
  `,
  `
  <div row bgColor="error-100" padding="8px" width="500px" align.y="center" radius="4px">
  <div margin="8px">
      <div height="40px" width="40px" bgColor="error-300" textColor="error-contrast" radius="50%" align="centercenter">
          <i class="material-icons">done</i>
      </div>
  </div>
  <div col="fill" padding="8px 8px 0px 0px">
      <p ngwTypo="subheading-2" textColor="error-700" margin.bottom="8px">Error !</p>
      <p ngwTypo="body" textColor="error-700" margin.bottom="8px"> User added successfully. </p>
  </div>
</div>
  `,
  `
  <div shadow="2" padding="16px" radius="4px" bgColor="white">
    <h3 ngwTypo="headline" ellipsis>Title</h3>
    <p ngwTypo="body">Description.</p>
    <div margin.top="16px">
        <button ngwBtn="" color="primary" margin.right="12px">Agree</button>
        <button ngwBtn="" color="warning">Cancel</button>
    </div>
  </div>
  `,
  `
  <div radius="4px" shadow="2" padding="24px" width="200px" bgColor="white">
    <p ngwTypo="subheading-2" margin.bottom="12px">Revenue</p>
    <p ngwTypo="headline">$56,734</p>
    <p ngwTypo="body" align.y="center" textColor="success">
        <i class="material-icons">arrow_drop_up</i> 5.77%
    </p>
    <p ngwTypo="caption" muted="true">Since last month</p>
  </div>
  `,
  `
  <div row align="centercenter" radius="4px" shadow="2" padding.y="32px" width="300px" bgColor="white">
    <div col="100%" align="centercenter">
        <div height="64px" width="64px" radius="50%" bgColor="primary-400" align="centercenter">
            <i textColor="white" class="material-icons">done</i>
        </div>
    </div>
    <div col="100%">
        <p ngwTypo="subheading-2" margin.top="20px" textColor="primary" ellipsis>Thanks you,</p>
        <p ngwTypo="body" margin.top="4px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div col="100%" margin.top="24px">
        <button ngwBtn="raised" color="secondary">Continue</button>
    </div>
  </div>
  `,
  `
  <div row padding="16px" shadow="2" radius="4px" align.y="center" bgColor="white">
    <div col="fill">
        <div row>
            <div margin.right="16px">
                <img height="48px" width="48px" shadow="1" radius="50%" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
            </div>
            <div col="fill" padding.top="4px">
                <h1 ngwTypo="subheading-2" margin.bottom="4px">RSAT</h1>
                <p ngwTypo="body" muted="true">Developer at Google</p>
            </div>
        </div>
    </div>
    <div>
        <button ngwBtn="flat" color="primary" radius="9999px">Follow</button>
    </div>
  </div>
  `,
  `
  <div row padding="16px" shadow="2" radius="4px" width="250px" bgColor="white">
  <div col="100%" margin.top="16px">
      <p ngwTypo="subheading-2" margin.bottom="8px" align.x="center" ellipsis>Rohith Sathyanarayana</p>
      <p ngwTypo="body" muted="true" ellipsis align.x="center">SMTS</p>
  </div>

  <div col="100%" align="centercenter" margin.top="16px">
      <img shadow="1" height="48px" width="48px" radius="50%" src="..." />
  </div>

  <div col="100%" margin.top="24px">
      <div row align="centercenter">
          <div col="33%">
              <p ngwTypo="button" margin.bottom="4px">20</p>
              <p ngwTypo="caption" muted="true">Posts</p>
          </div>
          <div col="33%">
              <p ngwTypo="button" margin.bottom="4px">99k</p>
              <p ngwTypo="caption" muted="true">Likes</p>
          </div>
          <div col="fill">
              <p ngwTypo="button" margin.bottom="4px">530</p>
              <p ngwTypo="caption" muted="true">Shares</p>
          </div>
      </div>
  </div>

  <div col="100%" margin.top="24px">
      <button ngwBtn="flat" color="primary" width="100%">Follow</button>
  </div>


</div>
  `,
  `
  <div row padding="12px" shadow="2" radius="4px" bgColor="white">
    <div col="100%">
        <img radius="4px" fit="cover" height="128px" width="100%" src="..." />
    </div>
    <div col="100%" margin.top="24px">
        <p ngwTypo="subheading-2">Title</p>
        <p ngwTypo="body">Description</p>
    </div>
    <div col="100%" align.x="right" margin.top="24px">
        <button ngwBtn="flat" color="warning" margin.right="8px">Cancel</button>
        <button ngwBtn="flat" color="primary">Default</button>
    </div>
  </div>
  `,
  `
  <div padding="12px" shadow="1" radius="4px" bgColor="white">
  <div align="centercenter">
      <div height="64px" width="64px" align="centercenter" shadow="1" bgColor="default" radius="50%" margin.top="-32px">
          <i class="material-icons" textColor="primary" fontSize="30px">contact_support</i>
      </div>
  </div>
  <div margin.top="24px">
      <h1 align.x="center" ngwTypo="headline" textColor="primary">Support</h1>
      <p align.x="center" ngwTypo="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div margin.top="34px" align.x="center">
      <button ngwBtn="" color="primary">Contact Support</button>
  </div>
</div>
  `,
  `
  <div width="400px" shadow="2" radius="8px" bgColor="white" padding="64px">
    <img height="300px" width="100%" src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" />
    <div margin.top="32px">
        <h1 align.x="center" ngwTypo="headline">Customer Support</h1>
        <p align.x="center" ngwTypo="body" muted="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div align.x="center">
          <button margin.top="24px" ngwBtn="raised" radius="9999px" color="primary"> 
              Get Started
          </button>
        </div>
    </div>
  </div>
  `,
  `
  <div shadow="2" radius="8px" bgColor="white" padding="64px">
    <div row>
        <div>
            <img height="40px" width="40px" margin.right="12px" radius="50%" fit="cover" src="..." />
        </div>
        <div col="fill">
            <p ngwTypo="subheading-2" margin.bottom="4px">Jack Cooper</p>
            <p ngwTypo="body" muted="true">3 hours ago - The Frontier</p>
        </div>
    </div>
    <div margin.top="16px">
        <p ngwTypo="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
    <div margin.top="24px" align.x="right">
        <button ngwBtn="" color="primary" margin.right="16px">
            <i class="material-icons" margin.right="4px">duo</i> Like
        </button>
        <button ngwBtn="" color="primary">
            <i class="material-icons" margin.right="4px">chat</i> 64 Comments
        </button>
    </div>
  </div>
  `,
  `
  <div gradientBgColor="primary" align="centercenter" padding="24px" border.style="solid" border.color="primary" border.width="2px" radius="8px">
    <div>
        <div textColor="primary-contrast" fontSize="18px">Downloads</div>
        <div textColor="primary-contrast" fontSize="36px">622k</div>
    </div>
    <div gradientBgColor="primary" radius="9999px" margin.left="32px" padding="16px" textColor="primary-contrast">
        <svg height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
    </div>
  </div>
  `,
  `
  <div gradientBgColor="secondary" align="centercenter" padding="24px" border.style="solid" border.color="secondary" border.width="2px" radius="8px">
  <div>
      <div textColor="secondary-contrast" fontSize="18px">Downloads</div>
      <div textColor="secondary-contrast" fontSize="36px">622k</div>
  </div>
  <div gradientBgColor="secondary" radius="9999px" margin.left="32px" padding="16px" textColor="secondary-contrast">
      <svg height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
  </div>
</div>
  `,
`
<div gradientBgColor="success" align="centercenter" padding="24px" border.style="solid" border.color="success" border.width="2px" radius="8px">
  <div>
      <div textColor="success-contrast" fontSize="18px">Downloads</div>
      <div textColor="success-contrast" fontSize="36px">622k</div>
  </div>
  <div gradientBgColor="success" radius="9999px" margin.left="32px" padding="16px" textColor="success-contrast">
      <svg height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
  </div>
</div>
`,
`
<div gradientBgColor="warning" align="centercenter" padding="24px" border.style="solid" border.color="warning" border.width="2px" radius="8px">
  <div>
      <div textColor="warning-contrast" fontSize="18px">Downloads</div>
      <div textColor="warning-contrast" fontSize="36px">622k</div>
  </div>
  <div gradientBgColor="warning" radius="9999px" margin.left="32px" padding="16px" textColor="warning-contrast">
      <svg height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
  </div>
</div>
`,
`
<div gradientBgColor="error" align="centercenter" padding="24px" border.style="solid" border.color="error" border.width="2px" radius="8px">
  <div>
      <div textColor="error-contrast" fontSize="18px">Downloads</div>
      <div textColor="error-contrast" fontSize="36px">622k</div>
  </div>
  <div gradientBgColor="error" radius="9999px" margin.left="32px" padding="16px" textColor="error-contrast">
      <svg height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
  </div>
</div>
`




];
  coreComps: any[] = [
    {'name': 'Button', 'desc': '' },
    {'name': 'Form', 'desc': '' }, 
    {'name': 'Typography', 'desc': '' },
    {'name':'Alerts','desc':''},
    {'name':'Cards','desc':''},
    {'name':'Gradient Cards','desc':''}
  ];
  currentCompIndex:number = 0;
  currentComp:any = this.coreComps[this.currentCompIndex];
  profiles = ['1','2','3','4','5','6'];
  @ViewChild('pageContainer') pageContainer:ElementRef;

  constructor(private route: ActivatedRoute,private router: Router) { }
  ngAfterViewChecked(){
    PR.prettyPrint();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentCompIndex = params['index'] ? params['index'] : 0;
      this.currentTabIndex = 0; //reset tab also
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
