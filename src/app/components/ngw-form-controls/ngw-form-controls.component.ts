import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-form-controls',
  templateUrl: './ngw-form-controls.component.html',
  styleUrls: ['./ngw-form-controls.component.scss']
})
export class NgwFormControlsComponent implements OnInit {
  codeSnaps:any = {
    fc:`
    <div padding="8px">
      <label ngwTypo="caption">Label</label>
      <input type="text" ngwFormControl color="success" placeholder="Enter a value" />
    </div>
    `
  }

  constructor() { }

  ngOnInit(): void {
  }

}
