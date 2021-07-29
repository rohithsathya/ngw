import { ElementRef } from '@angular/core';
export declare class HelperService {
    themeColors: string[];
    defaultColor: string;
    constructor();
    /**
     * checks if the given theme color is valid theme color or not, if invalid returns default theme color
     * @param color theme color to be validated
     * @returns returns a valid theme color, if invalid returns 'default'
     */
    sanitizeThemeColor(color: string): string;
    /**
     * returns the css color variable for the theme color(default,primary...) otherwise returns the same value
     * @param color color to be sanitized
     * @returns sanitized color
     */
    sanitizeColor(color: string): string;
    /**
    * Apply the given style poperty to given element.
    * @param el Element for which style needs to be applied
    * @param propertyName style porperty that needs to be set
    * @param propertyValue style value that need to be set
    */
    applyStyle(el: ElementRef, propertyName: string, propertyValue: string): void;
    /**
     * sanitize and Apply the given style poperty to given element.
     * @param el Element for which style needs to be applied
     * @param propertyName style porperty that needs to be set
     * @param propertyValue style value that need to be set
     */
    sanitizeAndApplyStyle(el: ElementRef, propertyName: string, propertyValue: string): void;
    /**
     * Extracts and returns CSS style obj for given css properties from the given HTML Element
     * @param el Element from which styles needs to be extracted
     * @param props Style properties to be extracted
     * @returns style object for given style properties
     */
    getStyleObject(el: ElementRef, props: string[]): {};
    /**
     * sets the style of the HTML element with given style
     * @param el HTML element for which style needs to be set
     * @param props set of CSS style proeprties
     * @param styleObj CSS styles with values to be set
     */
    setStyleObject(el: ElementRef, props: string[], styleObj: any): void;
    sanitizeShadowValue(shadow: string): string;
}
