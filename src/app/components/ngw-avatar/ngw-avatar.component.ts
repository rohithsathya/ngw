import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-avatar',
  templateUrl: './ngw-avatar.component.html'
})
export class NgwAvatarComponent implements OnInit {

  codeSnaps:any = {
    simple:`
    <img height="40px" width="40px" radius="8px" src="img.png">
    `,
    rounded:`
    <img height="40px" width="40px" radius="50%" src="img.png">
    `,
    bordered:`
    <img height="40px" width="40px" radius="8px" padding="1px" border.style="solid" border.width="3px" border.color="primary" src="img.png">
    `,
    borderedRound:`
    <img height="40px" width="40px" radius="50%" padding="1px" border.style="solid" border.width="3px" border.color="primary" src="img.png">
    `,
    initials:`
    <div height="40px" width="40px" radius="50%" bgColor="baseFocus" align="centercenter">
      <span fontSize="24px">KJO</span>
    </div>
    `,
    group:`
    <div *ngIf="['1','2','3','4','5','6'] as users">
      <img *ngFor="let user of users.slice(0, 5)" radius="50%" height="40px" width="40px" border="3px solid" border.color="baseFocus" margin.left="-15px" src="img.png">
      <div *ngIf="users.length > 5" style="display: inline-block;">
          <div align="centercenter" bgColor="base" radius="50%" height="40px" width="40px" border="3px solid" border.color="baseFocus" margin.left="-15px">
            +{{users.length - 5}}
          </div>
      </div>
    </div>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
