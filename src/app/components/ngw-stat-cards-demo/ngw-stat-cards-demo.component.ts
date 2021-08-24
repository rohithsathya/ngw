import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-stat-cards-demo',
  templateUrl: './ngw-stat-cards-demo.component.html',
  styleUrls: ['./ngw-stat-cards-demo.component.scss']
})
export class NgwStatCardsDemoComponent implements OnInit {

  codeSnaps:any = {
    singleStat:`
    <!-- you can replace "primary" with other theme colors-->
    <div width="250px" wrapper *ngIf="'primary' as theme">
        <div margin="20px" bgColor="baseFocus" padding="12px" shadow="2" radius="16px">
            <p ngwTypo="body" muted="true" margin="0px">Total Page Views</p>
            <h1 margin="0px" [textColor]="theme">89,400</h1>
            <p ngwTypo="body" muted="true">21% more than last month</p>
        </div>
    </div>
    `,
    statWithIcon:`
    <!-- you can replace "primary" with other theme colors-->
    <div *ngIf="'primary' as theme" row margin="20px" bgColor="baseFocus" padding="12px" shadow="2" radius="16px">
      <div col="fill">
        <p ngwTypo="body" muted="true" margin="0px">Total Page Views</p>
        <h1 margin="0px" [textColor]="theme">89,400</h1>
        <p ngwTypo="body" muted="true">21% more than last month</p>
      </div>
      <div align="centercenter">
        <i class="material-icons" [textColor]="theme" fontSize="30px">bolt</i>
      </div>
    </div>
    `,
    statWithAvatar:`
    <!-- you can replace "primary" with other theme colors-->
    <div *ngIf="'primary' as theme" row margin="20px" bgColor="baseFocus" padding="12px" shadow="2" radius="16px">
      <div col="fill">
        <h1 margin="0px" fontWeight="bold" [textColor]="theme">86%</h1>
        <p ngwTypo="body" muted="true" margin="0px">Tasks Completed</p>
        <button ngwBtn="link">31 Tasks Remaining</button>
      </div>
      <div align="centercenter">
        <img height="56px" width="56px" radius="8px" src="img.png">
      </div>
    </div>
    `,
    statRow:`
    <div row radius="16px" shadow="2" bgColor="baseFocus">
      <div col="33.3%" style="border-right: 1px solid var(--ngw-theme-base);" padding="20px">
        <div row padding="12px">
          <div col="fill">
            <p ngwTypo="body" muted="true" margin="0px">Total Page Views</p>
            <h1 margin="0px" textColor="primary">89,400</h1>
            <p ngwTypo="body" muted="true">21% more than last month</p>
          </div>
          <div align="centercenter">
            <i class="material-icons" textColor="secondary" fontSize="40px">bolt</i>
          </div>
        </div>
      </div>

      <div col="33.3%" style="border-right: 1px solid var(--ngw-theme-base);" padding="20px">
        <div row padding="12px">
          <div col="fill">
            <p ngwTypo="body" muted="true" margin="0px">Total Page Views</p>
            <h1 margin="0px" textColor="primary">89,400</h1>
            <p ngwTypo="body" muted="true">21% more than last month</p>
          </div>
          <div align="centercenter">
            <i class="material-icons" textColor="secondary" fontSize="40px">payments</i>
          </div>
        </div>
      </div>
      <div col="fill" padding="20px">
        <div row padding="12px">
          <div col="fill">
            <p ngwTypo="body" muted="true" margin="0px">Total Page Views</p>
            <h1 margin="0px" textColor="primary">89,400</h1>
            <p ngwTypo="body" muted="true">21% more than last month</p>
          </div>
          <div align="centercenter">
            <i class="material-icons" textColor="secondary" fontSize="40px">campaign</i>
          </div>
        </div>
      </div>
  </div>
    `,
    dashboardStatCard:`
    <div radius="4px" shadow="2" padding="24px" width="200px" bgColor="baseFocus">
      <p ngwTypo="subheading-2" margin.bottom="12px">Revenue</p>
      <p ngwTypo="headline">$56,734</p>
      <p ngwTypo="body" align.y="center" textColor="success">
        <i class="material-icons">arrow_drop_up</i> 5.77%
      </p>
      <p ngwTypo="caption" muted="true">Since last month</p>
    </div>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
