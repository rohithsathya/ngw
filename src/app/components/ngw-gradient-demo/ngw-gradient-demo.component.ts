import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-gradient-demo',
  templateUrl: './ngw-gradient-demo.component.html',
  styleUrls: ['./ngw-gradient-demo.component.scss']
})
export class NgwGradientDemoComponent implements OnInit {

  codeSnaps:any = {
    gradient:`
    <!-- you can replace "primary" with other theme colors-->
    <div *ngIf="'primary' as theme">
        <div [gradientBgColor]="theme" align="centercenter" padding="24px" border.style="solid" border.color="{{theme}}" border.width="2px" radius="8px">
            <div>
                <div textColor="{{theme}}Content" fontSize="18px">Downloads</div>
                <div textColor="{{theme}}Content" fontSize="36px">622k</div>
            </div>
            <div [gradientBgColor]="theme" radius="9999px" margin.left="32px" padding="16px" textColor="{{theme}}Content">
                <svg height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
            </div>
        </div>
    </div>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
