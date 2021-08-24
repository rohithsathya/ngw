import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-info-card-demo',
  templateUrl: './ngw-info-card-demo.component.html',
  styleUrls: ['./ngw-info-card-demo.component.scss']
})
export class NgwInfoCardDemoComponent implements OnInit {

  codeSnaps:any = {
    infoCard1:`
    <!-- you can replace "primary" with other theme colors-->
    <div *ngIf="'primary' as theme">
      <div padding="32px" [bgColor]="theme" radius="16px" shadow="3" width="300px" margin="20px">
        <p textColor="{{theme}}Content"> Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
        <div align.x="right">
          <button ngwBtn="flat" [color]="theme">More Info <i class="material-icons">east</i> </button>
        </div>
      </div>
    </div>
    `,
    infoCard2:`
    <!-- you can replace "primary" with other theme colors-->
    <div *ngIf="'primary' as theme">
      <div padding="32px" [bgColor]="theme" radius="16px" shadow="3" width="300px" margin="20px">
        <p align.x="center" textColor="{{theme}}Content"> Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
        <div align.x="center">
          <button ngwBtn="flat" [color]="theme" margin.right="5px">Agree </button>
          <button ngwBtn="flat" [color]="theme">Cancel</button>
        </div>
      </div>
    </div>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
