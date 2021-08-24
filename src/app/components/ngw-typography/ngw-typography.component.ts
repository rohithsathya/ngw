import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-typography',
  templateUrl: './ngw-typography.component.html',
  styleUrls: ['./ngw-typography.component.scss']
})
export class NgwTypographyComponent implements OnInit {

  codeSnaps:any = {
    typo:`
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
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
