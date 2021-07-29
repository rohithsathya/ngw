import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  themeColors = ['default','primary','secondary','sucess','error','warning'];
  defaultColor = this.themeColors[0];
  constructor() { }

  /**
   * checks if the given theme color is valid theme color or not, if invalid returns default theme color
   * @param color theme color to be validated
   * @returns returns a valid theme color, if invalid returns 'default'
   */
  sanitizeThemeColor(color:string):string{
    return this.themeColors.indexOf(color.toLowerCase()) > -1 ? color.toLowerCase() : this.defaultColor;
  }
  /**
   * returns the css color variable for the theme color(default,primary...) otherwise returns the same value
   * @param color color to be sanitized
   * @returns sanitized color
   */
  sanitizeColor(color:string):string{
    let colorLC = color ? color.toLowerCase() : '';
    let themeColor = this.themeColors.find((tc)=>{
      return colorLC.indexOf(tc) >=0;
    });
    return themeColor ? `var(--ngw-${colorLC})` : colorLC;
  }
   /**
   * Apply the given style poperty to given element. 
   * @param el Element for which style needs to be applied
   * @param propertyName style porperty that needs to be set
   * @param propertyValue style value that need to be set
   */
    applyStyle(el:ElementRef,propertyName:string,propertyValue:string){
      el.nativeElement.style[propertyName] = propertyValue;
    }
  /**
   * sanitize and Apply the given style poperty to given element. 
   * @param el Element for which style needs to be applied
   * @param propertyName style porperty that needs to be set
   * @param propertyValue style value that need to be set
   */
  sanitizeAndApplyStyle(el:ElementRef,propertyName:string,propertyValue:string){
    el.nativeElement.style[propertyName] = this.sanitizeColor(propertyValue);
  }

  /**
   * Extracts and returns CSS style obj for given css properties from the given HTML Element
   * @param el Element from which styles needs to be extracted
   * @param props Style properties to be extracted
   * @returns style object for given style properties
   */
  getStyleObject(el:ElementRef,props:string[]){
    let styleObj = {};
    props.forEach((prop,i)=>{
      styleObj[prop] = el.nativeElement.style[prop];
    });
    return styleObj;
  }

  /**
   * sets the style of the HTML element with given style
   * @param el HTML element for which style needs to be set
   * @param props set of CSS style proeprties
   * @param styleObj CSS styles with values to be set
   */
  setStyleObject(el:ElementRef,props:string[],styleObj:any){
    props.forEach((prop,i)=>{
      el.nativeElement.style[prop] = styleObj[prop];
    });
  }

  sanitizeShadowValue(shadow:string):string{
    let shdowToApply;
    if(shadow =="1"){
      shdowToApply = '0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)';
    }else if(shadow =="2"){
      shdowToApply = '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)';
    }else if(shadow =="3"){
      shdowToApply = '0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%)';
    }else if(shadow =="4"){
      shdowToApply = '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)';
    }else if(shadow =="5"){
      shdowToApply = '0 3px 5px -1px rgb(0 0 0 / 20%), 0 5px 8px 0 rgb(0 0 0 / 14%), 0 1px 14px 0 rgb(0 0 0 / 12%)';
    }else{
      shdowToApply = shadow
    }
    return shdowToApply;
  }

}
