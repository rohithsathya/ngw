import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Chroma from 'chroma-js';
import { PreviewService } from 'src/app/services/preview.service';
declare var PR;
@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss']
})
export class ThemePageComponent implements OnInit,AfterViewChecked {

  colors = {
    "default" :{
      "50":"#f0f0f0",
      "100":"#fafafa",
      "200":"#f5f5f5",
      "300":"#f0f0f0",
      "400":"#dedede",
      "500":"#ffffff",
      "600":"#979797",
      "700":"#818181",
      "800":"#606060",
      "900":"#3c3c3c",
      "contrast":"#3c3c3c"
    },
    "primary" :{
      "50":"#efe5fd",
      "100":"#d4bff9",
      "200":"#b794f6",
      "300":"#9965f4",
      "400":"#7e3ff2",
      "500":"#6002ee",
      "600":"#5300e8",
      "700":"#3d00e0",
      "800":"#1d00db",
      "900":"#0000d6",
      "contrast":"#fff"
    },
    "secondary" :{
      "50":"#ffe5ed",
      "100":"#ffbdd3",
      "200":"#ff92b6",
      "300":"#ff6598",
      "400":"#ff4080",
      "500":"#ff1869",
      "600":"#ed1466",
      "700":"#d70f61",
      "800":"#c2075e",
      "900":"#9d0058",
      "contrast":"#fff"
    },
    "success" :{
      "50":"#e7f5e7",
      "100":"#c5e5c4",
      "200":"#a0d49f",
      "300":"#7ac478",
      "400":"#5cb85c",
      "500":"#3eab3e",
      "600":"#359c35",
      "700":"#298a2b",
      "800":"#1c7a20",
      "900":"#005b0b",
      "contrast":"#fff"
    },
    "warning" :{
      "50":"#fdf2e0",
      "100":"#fadfb2",
      "200":"#f6ca81",
      "300":"#f3b44f",
      "400":"#f1a42b",
      "500":"#ef950f",
      "600":"#eb8a0c",
      "700":"#e57b08",
      "800":"#df6c06",
      "900":"#d55404",
      "contrast":"#fff"
    },
    "error" :{
      "50":"#ffebee",
      "100":"#ffcdd2",
      "200":"#ef9a9a",
      "300":"#e57373",
      "400":"#ef5350",
      "500":"#f44336",
      "600":"#e53935",
      "700":"#d32f2f",
      "800":"#c62828",
      "900":"#b71b1c",
      "contrast":"#fff"
    }
  }
  configObj = {
    "colors":this.colors
  }
  allColors = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'default'
  ];

  mainColors = ['primary',
  'secondary',
  'success',
  'warning',
  'error'
  ];

  defaultColors = ['default'];

  allColorVariations = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'contrast'
  ];

  lightColorLevels = ['400','300','200','100','50'];
  darkColorLevels = ['600','700','800','900'];
  contrastColorLevels = ['contrast'];
  whiteColorHex = '#ffffff';
  blackColorHex = '#000000';
  codeSnippet = `
  //app.module.ts
  @NgModule({
    declarations: [...],
    imports: [
      ...
      //pass the config obj json here
      NgwCoreModule.configure({{"colors":{"default":{...}}..)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;
  @ViewChild('pageContainer') pageContainer:ElementRef;
  currentIndex:number = 0;
  constructor(private previewService:PreviewService,private route: ActivatedRoute,private router: Router) { }
  ngAfterViewChecked(){
    PR.prettyPrint();
  }
  ngOnInit(): void {
    this.generateColors(); 
    this.route.queryParams.subscribe(params => {
      this.currentIndex = params['index'] ? params['index'] : 0;
    });
  }
  mainColorChange(){
    this.generateColors();
    this.previewService.setupNgw(this.configObj);
  }
  copyConfigToClipBoard(){
    let textArea = document.createElement("textarea");
    textArea.textContent = JSON.stringify(this.configObj,null,2);
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
  generateColors(){
    let percentage = 9;
    for(let i=0;i<this.mainColors.length;i++){
      let mc = this.mainColors[i];
      let lightColorFallback = this.colors[mc]['500'];
      let darkColorFallback = this.colors[mc]['500'];
      this.lightColorLevels.map((l,i)=>{
        let tintColorG = this.hexTints(this.colors[mc]['500'],percentage,i);
        lightColorFallback = tintColorG ? tintColorG : lightColorFallback;
        this.colors[mc][l] = lightColorFallback;
      });

      this.darkColorLevels.map((d,i)=>{
        let shadeColorG = this.hexShades(this.colors[mc]['500'],percentage,i) as any;
        darkColorFallback = shadeColorG ? shadeColorG : darkColorFallback;
        this.colors[mc][d] = darkColorFallback;
      });
      this.contrastColorLevels.map((c)=>{
        this.colors[mc][c] = this.getContrastYIQ(this.colors[mc]['500']);
      })
    }
    //handle default color based on dark mode
    let defaultPercentage = 2;
    this.defaultColors.map((dc)=>{
      let defaultColorFallback = this.colors[dc]['500'];
      let isDark = this.getContrastYIQ(this.colors[dc]['500']) == this.whiteColorHex ? true : false;
      if(isDark){
        //then ligthen it
        this.allColorVariations.map((l,i)=>{
          let lightColor = this.hexTints(this.colors[dc]['500'],defaultPercentage,i);
          defaultColorFallback = lightColor ? lightColor : defaultColorFallback;
          this.colors[dc][l] = defaultColorFallback;
        })
      }else{
        //then darken
        this.allColorVariations.map((l,i)=>{
          let lightColor = this.hexShades(this.colors[dc]['500'],defaultPercentage,i);
          defaultColorFallback = lightColor ? lightColor : defaultColorFallback;
          this.colors[dc][l] = defaultColorFallback;
        })
      };
      this.colors[dc]['contrast'] = this.getContrastYIQ(this.colors[dc]['500']);
    });
    //re assigning so to trigger the ngOnchange
    this.configObj = {...this.configObj};
  }

  //refrence https://24ways.org/2010/calculating-color-contrast/
  getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#",'');
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? this.blackColorHex : this.whiteColorHex;
  }

  hexTints(hex,percentage,i){
    let hue = Chroma(hex).get('hsl.h');
    let saturation = Chroma(hex).get('hsl.s');
    let luminance = Chroma(hex).get('hsl.l');
    let lighter = luminance + (percentage/100)*(i+1);
    return lighter <= 1 ? Chroma(hue,saturation,lighter,'hsl').hex('rgb') : false;
  }

  hexShades(hex,percentage,i){
    let hue = Chroma(hex).get('hsl.h');
    let saturation = Chroma(hex).get('hsl.s');
    let luminance = Chroma(hex).get('hsl.l');
    let darker = luminance - (percentage/100)*(i+1);
    return darker > 0.1 ? Chroma(hue,saturation,darker,'hsl').hex('rgb') : false;
  }

  showTabDetails(i){
    // this.pageContainer.nativeElement.scrollTop = 0;
    this.currentIndex = i;
    this.router.navigate(["/theme"],{queryParams:{'index':i}});
  }

 

}
