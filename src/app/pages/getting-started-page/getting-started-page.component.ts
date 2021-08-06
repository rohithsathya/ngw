import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started-page',
  templateUrl: './getting-started-page.component.html',
  styleUrls: ['./getting-started-page.component.scss']
})
export class GettingStartedPageComponent implements OnInit {

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

}
