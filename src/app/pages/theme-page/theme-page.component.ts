import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgwThemeConfig, NgwThemeService } from 'ngw-core';
import { ThemeData } from 'src/app/data/theme.data';
declare var PR;
@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss']
})
export class ThemePageComponent implements OnInit,AfterViewChecked {

  codeSnippet = `
  //app.module.ts
  //create a variable to hold theme json
  //copy the generated json and paste it here
  let myTheme:NgwThemeConfig = {
    colors:{
      "base":"#3d4451",
      "baseFocus":"#2a2e37",
      ...
    }
  }
  @NgModule({
    declarations: [...],
    imports: [
      ...
      //pass the config json here
      NgwCoreModule.configure(myTheme)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;
  @ViewChild('pageContainer') pageContainer:ElementRef;
  currentIndex:number = 0;
 
  selectedThemeIndex:number =0;

allThemeNames:string[] = ThemeData.getAllThemeNames();
currentTheme:NgwThemeConfig;

//private previewService:PreviewService,private route: ActivatedRoute,
  constructor(private router: Router,private themeService:NgwThemeService) { }
  ngAfterViewChecked(){
    PR.prettyPrint();
  }
  ngOnInit(): void {
    this.selectedThemeIndex = parseInt(ThemeData.getCurrentThemeIndex() as any);
    this.themeChangeEvent();
  }
  themeChangeEvent(){
    ThemeData.setCurrentThemeIndex(this.selectedThemeIndex);
    this.currentTheme = ThemeData.getCurrentThemeObj();
    this.themeService.applyTheme(this.currentTheme);
  }
  resetColors(){
    this.themeChangeEvent();
  }
  applyAndPreview(){
    this.themeService.applyTheme(this.currentTheme);
    this.showTabDetails(1);
  }
  copyConfigToClipBoard(){
    let textArea = document.createElement("textarea");
    textArea.textContent = JSON.stringify(this.currentTheme,null,2);
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.select();
    try{
      document.execCommand("copy");
      alert("Config object copied to clipboard");
    }catch(e){
      console.warn("Copy to Clipboard failed",e);
      return false;

    }finally{
      document.body.removeChild(textArea);
    }
  }
  showTabDetails(i){
    // this.pageContainer.nativeElement.scrollTop = 0;
    this.currentIndex = i;
    this.router.navigate(["/theme"],{queryParams:{'index':i}});
  }
  

 

}
