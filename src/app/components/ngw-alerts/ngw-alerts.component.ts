import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-alerts',
  templateUrl: './ngw-alerts.component.html',
  styleUrls: ['./ngw-alerts.component.scss']
})
export class NgwAlertsComponent implements OnInit {

  codeSnaps:any={
    simple:`
    <!-- you can replace "primary" with other theme colors-->
    <div margin="24px" *ngIf="'primary' as theme">
        <div row bgColor="baseFocus" padding="8px" width="500px" align.y="center" radius="8px">
            <div margin="8px">
                <div height="24px" width="24px" textColor="{{theme}}Focus" radius="50%" align="centercenter">
                    <i class="material-icons">done</i>
                </div>
            </div>
            <div col="fill" margin.y="8px">
                <p ngwTypo="body-2" textColor="{{theme}}Focus" margin.bottom="0px">Lorem ipsum dolor sit amet, consectetur adip!</p>
            </div>
        </div>
    </div>
    `,
    confirm:`
    <div row bgColor="baseFocus" padding="8px" width="500px" align.y="center" radius="8px">
      <div col="fill" margin.y="8px">
          <p ngwTypo="body-2" textColor="baseContent" margin.bottom="0px" ellipsis>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div margin="8px">
          <button ngwBtn="" margin.right="12px">Cancel</button>
          <button ngwBtn="raised" color="primary">Apply</button>
      </div>

    </div>
    `,
    confirmMultiline:`
    <div row bgColor="baseFocus" padding="8px" width="500px" align.y="center" radius="8px">
      <div col="fill" margin.y="8px">
        <p ngwTypo="body-2" textColor="baseContent" margin.bottom="0px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div margin="8px">
        <button ngwBtn="" margin.right="12px">Cancel</button>
        <button ngwBtn="raised" color="primary">Apply</button>
      </div>
    </div>
    `,
    singleLineWithButton:`
    <div row bgColor="baseFocus" padding="8px" width="700px" align.y="center" radius="8px">
      <div margin="8px">
          <div height="24px" width="24px" textColor="error" radius="50%" align="centercenter">
            <i class="material-icons">error</i>
          </div>
      </div>
      <div col="fill" margin.y="8px">
          <p ngwTypo="body-2" textColor="baseContent" margin.bottom="0px">Lorem ipsum dolor sit amet, consectetur adip!</p>
      </div>
      <div margin="8px">
        <button ngwBtn=""><i class="material-icons">notifications</i> &nbsp;Set Remainder</button>
      </div>
    </div>
    `,
    multiLine:`
    <div row bgColor="baseFocus" padding="8px" width="700px" radius="8px">
      <div margin="8px" align.y="top">
        <i class="material-icons" textColor="primary">notifications</i>
      </div>
      <div col="fill" margin.y="8px" align.y="center">
        <div row>
          <p col="100%" ngwTypo="subheading-2" margin.bottom="0px" ellipsis>Lorem ipsum dolor sit amet</p>
          <p col="100%" ngwTypo="body" margin.bottom="8px">
            Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
      </div>
    </div>
    `,
    themed:`
    <!-- you can replace "primary" with other theme colors-->
    <div *ngIf="'primary' as theme" row bgColor="baseFocus" padding="8px" width="500px" align.y="center" radius="16px">
      <div margin="8px">
        <div height="40px" width="40px" bgColor="{{theme}}Focus" textColor="primary-contrast" radius="50%" align="centercenter">
          <i class="material-icons" textColor="{{theme}}Content">done</i>
        </div>
      </div>
      <div col="fill" padding="8px 8px 0px 0px">
          <p ngwTypo="subheading-2" textColor="{{theme}}" margin.bottom="8px">Primary !</p>
          <p ngwTypo="body" textColor="{{theme}}" margin.bottom="8px"> User added successfully. </p>
      </div>
    </div>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
