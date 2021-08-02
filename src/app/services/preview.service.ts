import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  constructor() { }
  
  //for preview
  setupNgw(configObj){
    let css = ``;
     let head = document.head || document.getElementsByTagName('head')[0];
     let style = document.createElement("style");
     head.appendChild(style);
     style.appendChild(document.createTextNode(css));
 
     let colors = configObj.colors;
     let colorClassCss = '';
     //for each key value pair, 500 is actual color, create css variable
     for(let color in colors){
       for(let colorCode in colors[color]){
         document?.documentElement?.style.setProperty(`--ngw-${color}-${colorCode}`,colors[color][colorCode]);
         colorClassCss += this.getColorCss(color,colorCode);
       }
       //add 500 as defualt color
       document?.documentElement?.style.setProperty(`--ngw-${color}`,colors[color]["500"]);
       colorClassCss += this.getColorCss(color,"");
     }
 
     style = document.createElement("style");
     head.appendChild(style);
     style.appendChild(document.createTextNode(colorClassCss));
   
   }
 
   private getColorCss(color,colorCode){
     let cssVarName = colorCode ? `--ngw-${color}-${colorCode}` : `--ngw-${color}`;
     let className = colorCode ? `${color}-${colorCode}` : `${color}`;
 
     return `
         .ngw-text-color-${className},.ngw-text-hover-color-${className}:hover{
           color:var(${cssVarName});
         }
         .ngw-bg-color-${className},.ngw-bg-hover-color-${className}:hover{
           background-color:var(${cssVarName});
         }
         .ngw-border-color-${className},.ngw-border-hover-color-${className}:hover{
           border-color:var(${cssVarName});
         }
     `;
   }
}
