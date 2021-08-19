import { NgwThemeConfig } from "ngw-core";

export class ThemeData{
    private static currentThemeIndexKey:string = 'currentThemeIndex';
    private static lightTheme:NgwThemeConfig = {
        colors:{
          "primary":"#570df8",
          "primaryFocus":"#4406cb",
          "primaryContent":"#ffffff",
      
          "secondary":"#f000b8",
          "secondaryFocus":"#bd0091",
          "secondaryContent":"#ffffff",
      
          "default":"#3d4451",
          "defaultFocus":"#2a2e37",
          "defaultContent":"#ffffff",
      
          //"b1":"#ffffff", //base
          //"b2":"#f9fafb",//baseFocus
          //"b3":"#d1d5db", //no match yet
          //"bc":"#1f2937",//baseContent
      
          "base":"#ffffff",
          "baseFocus":"#f9fafb",
          "baseContent":"#1f2937",
      
          "success":"#87d039",
          "successFocus":"#68a527",
          "successContent":"#ffffff",
      
          "warning":"#e2d562",
          "warningFocus":"#e6e62b",
          "warningContent":"#ffffff",
      
          "error":"#ff6f6f",
          "errorFocus":"#ff3c3c",
          "errorContent":"#ffffff"
        }
      };
      private static darkTheme:NgwThemeConfig = {
        colors:{
          "primary":"#793ef9",
          "primaryFocus":"#570df8",
          "primaryContent":"#ffffff",
      
          "secondary":"#f000b8",
          "secondaryFocus":"#bd0091",
          "secondaryContent":"#ffffff",
      
          // "default":"#2a2e37",
          // "defaultFocus":"#16181d",
          // "defaultContent":"#ffffff",
      
          "default":"#2a2e37",
          "defaultFocus":"#16181d",
          "defaultContent":"#ffffff",
      
          "base":"#3d4451",
          "baseFocus":"#2a2e37",
          "baseContent":"#ebecf0",
      
          "success":"#87d039",
          "successFocus":"#68a527",
          "successContent":"#ffffff",
      
          "warning":"#e2d562",
          "warningFocus":"#e6e62b",
          "warningContent":"#ffffff",
      
          "error":"#ff6f6f",
          "errorFocus":"#ff3c3c",
          "errorContent":"#ffffff"
        }
      };
    static allThemes:NgwThemeConfig[] = [ThemeData.darkTheme,ThemeData.lightTheme];
    static getAllThemeNames(){
        return ['Dark','Light'];
    }
    static setCurrentThemeIndex(index:number){
        localStorage.setItem(ThemeData.currentThemeIndexKey,`${index}`);
    }  
    static getCurrentThemeIndex(){
        return localStorage.getItem(ThemeData.currentThemeIndexKey) ? localStorage.getItem(ThemeData.currentThemeIndexKey) : 0;
    } 
    static getCurrentThemeObj(){
        let index =  ThemeData.getCurrentThemeIndex();
        let themeObj = ThemeData.allThemes[index] ? ThemeData.allThemes[index] : ThemeData.allThemes[0]
        return JSON.parse(JSON.stringify(themeObj));
    }  
}