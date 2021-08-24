import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-cards-demo',
  templateUrl: './ngw-cards-demo.component.html',
  styleUrls: ['./ngw-cards-demo.component.scss']
})
export class NgwCardsDemoComponent implements OnInit {

  codeSnaps:any = {
    basicCard:`
    <div shadow="2" padding="16px" radius="4px" bgColor="baseFocus">
      <h3 ngwTypo="headline" ellipsis>Where does it come from ?</h3>
      <p ngwTypo="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      </p>
      <div margin.top="16px">
          <button ngwBtn="" color="primary" margin.right="12px">Agree</button>
          <button ngwBtn="" color="warning">Cancel</button>
      </div>
    </div>
    `,
    thankYouCard:`
    <div row align="centercenter" radius="4px" shadow="2" padding.y="32px" width="300px" bgColor="baseFocus">
      <div col="100%" align="centercenter">
          <div height="64px" width="64px" radius="50%" bgColor="primary" align="centercenter">
              <i textColor="primaryContent" class="material-icons">done</i>
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
    profileCard:`
    <div row padding="16px" shadow="2" radius="4px" align.y="center" bgColor="baseFocus">
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
    profileCard2:`
    <div row padding="16px" shadow="2" radius="4px" width="250px" bgColor="baseFocus">
      <div col="100%" margin.top="16px">
          <p ngwTypo="subheading-2" margin.bottom="8px" align.x="center" ellipsis>Rohith Sathyanarayana</p>
          <p ngwTypo="body" muted="true" ellipsis align.x="center">SMTS</p>
      </div>
      <div col="100%" align="centercenter" margin.top="16px">
          <img shadow="1" height="48px" width="48px" radius="50%" src="img.png" />
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
    infoCard:`
    <div padding="12px" shadow="1" radius="4px" bgColor="baseFocus">
      <div align="centercenter">
          <div height="64px" width="64px" align="centercenter" shadow="1" bgColor="baseFocus" radius="50%" margin.top="-32px">
              <i class="material-icons" textColor="primary" fontSize="30px">contact_support</i>
          </div>
      </div>
      <div margin.top="24px">
          <h1 align.x="center" ngwTypo="headline" textColor="primary">Support</h1>
          <p align.x="center" ngwTypo="body">' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div margin.top="34px" align.x="center">
          <button ngwBtn="" color="primary">Contact Support</button>
      </div>
    </div>
    `,
    infoCard2:`
    <div shadow="2" radius="8px" bgColor="baseFocus" padding="64px">
      <img height="300px" width="100%" src="img.jpg" />
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
    chatCard:`
    <div shadow="2" radius="8px" bgColor="baseFocus" padding="64px">
      <div row>
        <div>
          <img height="40px" width="40px" margin.right="12px" radius="50%" fit="cover" src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" />
        </div>
        <div col="fill">
          <p ngwTypo="subheading-2" margin.bottom="4px">Jack Cooper</p>
          <p ngwTypo="body" muted="true">3 hours ago - The Frontier</p>
        </div>
      </div>
      <div margin.top="16px">
        <p ngwTypo="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
