import { AfterViewChecked, Component, OnInit } from '@angular/core';
declare var PR;
declare var ngwCodeCopy;
@Component({
  selector: 'app-getting-started-page',
  templateUrl: './getting-started-page.component.html',
  styleUrls: ['./getting-started-page.component.scss']
})
export class GettingStartedPageComponent implements OnInit,AfterViewChecked {

  codeSnippet = `
  //app.module.ts
  @NgModule({
    declarations: [...],
    imports: [
      ...
      NgwCoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;
  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    PR.prettyPrint();
    ngwCodeCopy.apply();
  }
}
