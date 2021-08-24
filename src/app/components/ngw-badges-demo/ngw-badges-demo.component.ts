import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-badges-demo',
  templateUrl: './ngw-badges-demo.component.html',
  styleUrls: ['./ngw-badges-demo.component.scss']
})
export class NgwBadgesDemoComponent implements OnInit {

  codeSnaps:any = {
    simpleFilled:`
    <div ngwBadge="" color="primary">Simple Badge</div>
    `,
    badgeWithIcon:`
    <div ngwBadge="" color="primary">
      Global <i class="material-icons" fontSize="inherit" ngwClickable="true">close</i>
    </div>
    `,
    outlineBadge:`
    <div ngwBadge="outline" color="primary">NEW</div>
    `,
    outlineBadgeWithICon: `
    <div ngwBadge="outline" color="primary">
      <i class="material-icons" fontSize="inherit" ngwClickable>close</i> NEW
    </div>
    `,
    badgeWithText:`
    <h3>
      This is heading 3
      <div ngwBadge="outline" color="primary">NEW</div>
    </h3>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
