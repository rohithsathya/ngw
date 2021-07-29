import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class HelperService {
    constructor() {
        this.themeColors = ['default', 'primary', 'secondary', 'sucess', 'error', 'warning'];
        this.defaultColor = this.themeColors[0];
    }
    /**
     * checks if the given theme color is valid theme color or not, if invalid returns default theme color
     * @param color theme color to be validated
     * @returns returns a valid theme color, if invalid returns 'default'
     */
    sanitizeThemeColor(color) {
        return this.themeColors.indexOf(color.toLowerCase()) > -1 ? color.toLowerCase() : this.defaultColor;
    }
    /**
     * returns the css color variable for the theme color(default,primary...) otherwise returns the same value
     * @param color color to be sanitized
     * @returns sanitized color
     */
    sanitizeColor(color) {
        let colorLC = color ? color.toLowerCase() : '';
        let themeColor = this.themeColors.find((tc) => {
            return colorLC.indexOf(tc) >= 0;
        });
        return themeColor ? `var(--ngw-${colorLC})` : colorLC;
    }
    /**
    * Apply the given style poperty to given element.
    * @param el Element for which style needs to be applied
    * @param propertyName style porperty that needs to be set
    * @param propertyValue style value that need to be set
    */
    applyStyle(el, propertyName, propertyValue) {
        el.nativeElement.style[propertyName] = propertyValue;
    }
    /**
     * sanitize and Apply the given style poperty to given element.
     * @param el Element for which style needs to be applied
     * @param propertyName style porperty that needs to be set
     * @param propertyValue style value that need to be set
     */
    sanitizeAndApplyStyle(el, propertyName, propertyValue) {
        el.nativeElement.style[propertyName] = this.sanitizeColor(propertyValue);
    }
    /**
     * Extracts and returns CSS style obj for given css properties from the given HTML Element
     * @param el Element from which styles needs to be extracted
     * @param props Style properties to be extracted
     * @returns style object for given style properties
     */
    getStyleObject(el, props) {
        let styleObj = {};
        props.forEach((prop, i) => {
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
    setStyleObject(el, props, styleObj) {
        props.forEach((prop, i) => {
            el.nativeElement.style[prop] = styleObj[prop];
        });
    }
    sanitizeShadowValue(shadow) {
        let shdowToApply;
        if (shadow == "1") {
            shdowToApply = '0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)';
        }
        else if (shadow == "2") {
            shdowToApply = '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)';
        }
        else if (shadow == "3") {
            shdowToApply = '0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%)';
        }
        else if (shadow == "4") {
            shdowToApply = '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)';
        }
        else if (shadow == "5") {
            shdowToApply = '0 3px 5px -1px rgb(0 0 0 / 20%), 0 5px 8px 0 rgb(0 0 0 / 14%), 0 1px 14px 0 rgb(0 0 0 / 12%)';
        }
        else {
            shdowToApply = shadow;
        }
        return shdowToApply;
    }
}
HelperService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HelperService_Factory() { return new HelperService(); }, token: HelperService, providedIn: "root" });
HelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
HelperService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxhQUFhO0lBR3hCO1FBRkEsZ0JBQVcsR0FBRyxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0UsaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFakI7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLEtBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3RHLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFO1lBQzNDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3hELENBQUM7SUFDQTs7Ozs7TUFLRTtJQUNELFVBQVUsQ0FBQyxFQUFhLEVBQUMsWUFBbUIsRUFBQyxhQUFvQjtRQUMvRCxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxhQUFhLENBQUM7SUFDdkQsQ0FBQztJQUNIOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQUMsRUFBYSxFQUFDLFlBQW1CLEVBQUMsYUFBb0I7UUFDMUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsRUFBYSxFQUFDLEtBQWM7UUFDekMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUU7WUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEVBQWEsRUFBQyxLQUFjLEVBQUMsUUFBWTtRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxNQUFhO1FBQy9CLElBQUksWUFBWSxDQUFDO1FBQ2pCLElBQUcsTUFBTSxJQUFHLEdBQUcsRUFBQztZQUNkLFlBQVksR0FBRyw2RkFBNkYsQ0FBQztTQUM5RzthQUFLLElBQUcsTUFBTSxJQUFHLEdBQUcsRUFBQztZQUNwQixZQUFZLEdBQUcsNkZBQTZGLENBQUM7U0FDOUc7YUFBSyxJQUFHLE1BQU0sSUFBRyxHQUFHLEVBQUM7WUFDcEIsWUFBWSxHQUFHLDZGQUE2RixDQUFDO1NBQzlHO2FBQUssSUFBRyxNQUFNLElBQUcsR0FBRyxFQUFDO1lBQ3BCLFlBQVksR0FBRyw4RkFBOEYsQ0FBQztTQUMvRzthQUFLLElBQUcsTUFBTSxJQUFHLEdBQUcsRUFBQztZQUNwQixZQUFZLEdBQUcsOEZBQThGLENBQUM7U0FDL0c7YUFBSTtZQUNILFlBQVksR0FBRyxNQUFNLENBQUE7U0FDdEI7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7O1lBekZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSGVscGVyU2VydmljZSB7XG4gIHRoZW1lQ29sb3JzID0gWydkZWZhdWx0JywncHJpbWFyeScsJ3NlY29uZGFyeScsJ3N1Y2VzcycsJ2Vycm9yJywnd2FybmluZyddO1xuICBkZWZhdWx0Q29sb3IgPSB0aGlzLnRoZW1lQ29sb3JzWzBdO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBjaGVja3MgaWYgdGhlIGdpdmVuIHRoZW1lIGNvbG9yIGlzIHZhbGlkIHRoZW1lIGNvbG9yIG9yIG5vdCwgaWYgaW52YWxpZCByZXR1cm5zIGRlZmF1bHQgdGhlbWUgY29sb3JcbiAgICogQHBhcmFtIGNvbG9yIHRoZW1lIGNvbG9yIHRvIGJlIHZhbGlkYXRlZFxuICAgKiBAcmV0dXJucyByZXR1cm5zIGEgdmFsaWQgdGhlbWUgY29sb3IsIGlmIGludmFsaWQgcmV0dXJucyAnZGVmYXVsdCdcbiAgICovXG4gIHNhbml0aXplVGhlbWVDb2xvcihjb2xvcjpzdHJpbmcpOnN0cmluZ3tcbiAgICByZXR1cm4gdGhpcy50aGVtZUNvbG9ycy5pbmRleE9mKGNvbG9yLnRvTG93ZXJDYXNlKCkpID4gLTEgPyBjb2xvci50b0xvd2VyQ2FzZSgpIDogdGhpcy5kZWZhdWx0Q29sb3I7XG4gIH1cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGNzcyBjb2xvciB2YXJpYWJsZSBmb3IgdGhlIHRoZW1lIGNvbG9yKGRlZmF1bHQscHJpbWFyeS4uLikgb3RoZXJ3aXNlIHJldHVybnMgdGhlIHNhbWUgdmFsdWVcbiAgICogQHBhcmFtIGNvbG9yIGNvbG9yIHRvIGJlIHNhbml0aXplZFxuICAgKiBAcmV0dXJucyBzYW5pdGl6ZWQgY29sb3JcbiAgICovXG4gIHNhbml0aXplQ29sb3IoY29sb3I6c3RyaW5nKTpzdHJpbmd7XG4gICAgbGV0IGNvbG9yTEMgPSBjb2xvciA/IGNvbG9yLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICBsZXQgdGhlbWVDb2xvciA9IHRoaXMudGhlbWVDb2xvcnMuZmluZCgodGMpPT57XG4gICAgICByZXR1cm4gY29sb3JMQy5pbmRleE9mKHRjKSA+PTA7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoZW1lQ29sb3IgPyBgdmFyKC0tbmd3LSR7Y29sb3JMQ30pYCA6IGNvbG9yTEM7XG4gIH1cbiAgIC8qKlxuICAgKiBBcHBseSB0aGUgZ2l2ZW4gc3R5bGUgcG9wZXJ0eSB0byBnaXZlbiBlbGVtZW50LiBcbiAgICogQHBhcmFtIGVsIEVsZW1lbnQgZm9yIHdoaWNoIHN0eWxlIG5lZWRzIHRvIGJlIGFwcGxpZWRcbiAgICogQHBhcmFtIHByb3BlcnR5TmFtZSBzdHlsZSBwb3JwZXJ0eSB0aGF0IG5lZWRzIHRvIGJlIHNldFxuICAgKiBAcGFyYW0gcHJvcGVydHlWYWx1ZSBzdHlsZSB2YWx1ZSB0aGF0IG5lZWQgdG8gYmUgc2V0XG4gICAqL1xuICAgIGFwcGx5U3R5bGUoZWw6RWxlbWVudFJlZixwcm9wZXJ0eU5hbWU6c3RyaW5nLHByb3BlcnR5VmFsdWU6c3RyaW5nKXtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWU7XG4gICAgfVxuICAvKipcbiAgICogc2FuaXRpemUgYW5kIEFwcGx5IHRoZSBnaXZlbiBzdHlsZSBwb3BlcnR5IHRvIGdpdmVuIGVsZW1lbnQuIFxuICAgKiBAcGFyYW0gZWwgRWxlbWVudCBmb3Igd2hpY2ggc3R5bGUgbmVlZHMgdG8gYmUgYXBwbGllZFxuICAgKiBAcGFyYW0gcHJvcGVydHlOYW1lIHN0eWxlIHBvcnBlcnR5IHRoYXQgbmVlZHMgdG8gYmUgc2V0XG4gICAqIEBwYXJhbSBwcm9wZXJ0eVZhbHVlIHN0eWxlIHZhbHVlIHRoYXQgbmVlZCB0byBiZSBzZXRcbiAgICovXG4gIHNhbml0aXplQW5kQXBwbHlTdHlsZShlbDpFbGVtZW50UmVmLHByb3BlcnR5TmFtZTpzdHJpbmcscHJvcGVydHlWYWx1ZTpzdHJpbmcpe1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSA9IHRoaXMuc2FuaXRpemVDb2xvcihwcm9wZXJ0eVZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBhbmQgcmV0dXJucyBDU1Mgc3R5bGUgb2JqIGZvciBnaXZlbiBjc3MgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBIVE1MIEVsZW1lbnRcbiAgICogQHBhcmFtIGVsIEVsZW1lbnQgZnJvbSB3aGljaCBzdHlsZXMgbmVlZHMgdG8gYmUgZXh0cmFjdGVkXG4gICAqIEBwYXJhbSBwcm9wcyBTdHlsZSBwcm9wZXJ0aWVzIHRvIGJlIGV4dHJhY3RlZFxuICAgKiBAcmV0dXJucyBzdHlsZSBvYmplY3QgZm9yIGdpdmVuIHN0eWxlIHByb3BlcnRpZXNcbiAgICovXG4gIGdldFN0eWxlT2JqZWN0KGVsOkVsZW1lbnRSZWYscHJvcHM6c3RyaW5nW10pe1xuICAgIGxldCBzdHlsZU9iaiA9IHt9O1xuICAgIHByb3BzLmZvckVhY2goKHByb3AsaSk9PntcbiAgICAgIHN0eWxlT2JqW3Byb3BdID0gZWwubmF0aXZlRWxlbWVudC5zdHlsZVtwcm9wXTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3R5bGVPYmo7XG4gIH1cblxuICAvKipcbiAgICogc2V0cyB0aGUgc3R5bGUgb2YgdGhlIEhUTUwgZWxlbWVudCB3aXRoIGdpdmVuIHN0eWxlXG4gICAqIEBwYXJhbSBlbCBIVE1MIGVsZW1lbnQgZm9yIHdoaWNoIHN0eWxlIG5lZWRzIHRvIGJlIHNldFxuICAgKiBAcGFyYW0gcHJvcHMgc2V0IG9mIENTUyBzdHlsZSBwcm9lcHJ0aWVzXG4gICAqIEBwYXJhbSBzdHlsZU9iaiBDU1Mgc3R5bGVzIHdpdGggdmFsdWVzIHRvIGJlIHNldFxuICAgKi9cbiAgc2V0U3R5bGVPYmplY3QoZWw6RWxlbWVudFJlZixwcm9wczpzdHJpbmdbXSxzdHlsZU9iajphbnkpe1xuICAgIHByb3BzLmZvckVhY2goKHByb3AsaSk9PntcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZU9ialtwcm9wXTtcbiAgICB9KTtcbiAgfVxuXG4gIHNhbml0aXplU2hhZG93VmFsdWUoc2hhZG93OnN0cmluZyk6c3RyaW5ne1xuICAgIGxldCBzaGRvd1RvQXBwbHk7XG4gICAgaWYoc2hhZG93ID09XCIxXCIpe1xuICAgICAgc2hkb3dUb0FwcGx5ID0gJzAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSknO1xuICAgIH1lbHNlIGlmKHNoYWRvdyA9PVwiMlwiKXtcbiAgICAgIHNoZG93VG9BcHBseSA9ICcwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAxMiUpJztcbiAgICB9ZWxzZSBpZihzaGFkb3cgPT1cIjNcIil7XG4gICAgICBzaGRvd1RvQXBwbHkgPSAnMCAzcHggM3B4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAzcHggNHB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggOHB4IDAgcmdiKDAgMCAwIC8gMTIlKSc7XG4gICAgfWVsc2UgaWYoc2hhZG93ID09XCI0XCIpe1xuICAgICAgc2hkb3dUb0FwcGx5ID0gJzAgMnB4IDRweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgNHB4IDVweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpJztcbiAgICB9ZWxzZSBpZihzaGFkb3cgPT1cIjVcIil7XG4gICAgICBzaGRvd1RvQXBwbHkgPSAnMCAzcHggNXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCA1cHggOHB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggMTRweCAwIHJnYigwIDAgMCAvIDEyJSknO1xuICAgIH1lbHNle1xuICAgICAgc2hkb3dUb0FwcGx5ID0gc2hhZG93XG4gICAgfVxuICAgIHJldHVybiBzaGRvd1RvQXBwbHk7XG4gIH1cblxufVxuIl19