import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-img-card-demo',
  templateUrl: './ngw-img-card-demo.component.html',
  styleUrls: ['./ngw-img-card-demo.component.scss']
})
export class NgwImgCardDemoComponent implements OnInit {

  codeSnaps:any = {
    profileWithImg:`
    <div radius="16px" bgColor="baseFocus" width="300px" style="overflow: hidden;" margin="20px" shadow="1">
      <img src="https://picsum.photos/id/1005/400/250" height="auto" width="100%" />
      <div padding="24px">
        <h4 ellipsis>Karolann Collins</h4>
        <p ngwTypo="body-2" muted="true">Direct Interactions Liaison</p>
      </div>
    </div>
    `,
    topImg:`
    <div border="1px solid" bgColor="base" border.color="baseFocus" radius="16px" width="400px" style="overflow: hidden;" margin="20px">
      <img src="https://picsum.photos/id/1005/400/250" height="auto" width="100%" />
      <div padding="24px">
        <h6 ellipsis>PHmG123DG1233..!!!
          <div ngwBadge="" color="secondary">New</div>
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div align.x="right">
          <button ngwBtn="flat" color="secondary">More Info</button>
        </div>
      </div>
    </div>
    `,
    bottomImg:`
    <div border="1px solid" bgColor="base" border.color="baseFocus" radius="16px" width="400px" style="overflow: hidden;" margin="20px">
      <div padding="24px">
        <h6 ellipsis>Image Bottom</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div align.x="left">
          <button ngwBtn="flat" color="primary" margin.right="10px">Login</button>
          <button ngwBtn="">Register</button>
        </div>
      </div>
      <img src="https://picsum.photos/id/1005/400/250" height="auto" width="100%" />
    </div>
    `,
    centerShadow:`
    <div shadow="2" bgColor="base" radius="16px" width="400px" style="overflow: hidden;" padding="32px" margin="20px">
      <img src="https://picsum.photos/id/1005/400/250" height="auto" width="100%" radius="16px" />
      <div padding.top="24px">
        <h4 align.x="center" ellipsis>PHmG123DG1233..!!!</h4>
        <p align.x="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div align.x="center">
          <button ngwBtn="outline" color="secondary">More Info</button>
        </div>
      </div>
    </div>
    `,
    horizontalImg:`
    <div row radius="16px" border="1px solid" bgColor="base" border.color="baseFocus" style="overflow: hidden;">
      <div col="30%">
        <img src="https://picsum.photos/id/1005/400/250" height="100%" width="100%" />
      </div>
      <div col="70%" align.y="center" padding="32px">
        <div>
          <h2>Horizontal
            <div ngwBadge="" color="secondary" fontSize="60%">New</div>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div align.x="left">
            <button ngwBtn="flat" color="primary" margin.right="10px">Get Started</button>
            <button ngwBtn="">More Info</button>
          </div>
        </div>
      </div>
    </div>
    `,
    glassCard:`
    <div align="centercenter" radius="16px" padding="40px 16px" fit="cover" style="background-image:url(https://picsum.photos/id/314/1000/300);background-size: cover;">
      <div ngwGlassBg="true" height="auto" width="70%" row padding="24px" radius="12px" shadow="1">
        <div col="35%">
          <img src="https://picsum.photos/id/1005/400/250" height="100%" width="100%" radius="8px" />
        </div>
        <div col="65%" padding="24px" align.x="left">
          <div>
            <h2 textColor="primary-contrast">Glass</h2>
            <p textColor="primary-contrast">
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.
            </p>
            <button ngwGlassBg="true" ngwBtn="" color="" textColor="primaryContent">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    `,
    imageCard2:`
    <div row padding="12px" shadow="2" radius="4px" bgColor="baseFocus">
      <div col="100%">
        <img radius="4px" fit="cover" height="128px" width="100%" src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg" />
      </div>
      <div col="100%" margin.top="24px">
        <p ngwTypo="subheading-2">Title</p>
        <p ngwTypo="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div col="100%" align.x="right" margin.top="24px">
        <button ngwBtn="flat" color="warning" margin.right="8px">Cancel</button>
        <button ngwBtn="flat" color="primary">Default</button>
      </div>
    </div>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
