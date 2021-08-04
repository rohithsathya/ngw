import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
// @Injectable({
//   providedIn: 'root'
// })
export class HelperService {
    constructor() {
        this.themeColors = ['default', 'primary', 'secondary', 'success', 'error', 'warning'];
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
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(); };
HelperService.ɵprov = i0.ɵɵdefineInjectable({ token: HelperService, factory: HelperService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HelperService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXZELGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsS0FBSztBQUVMLE1BQU0sT0FBTyxhQUFhO0lBR3hCO1FBRkEsZ0JBQVcsR0FBRyxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUUsaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFakI7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLEtBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3RHLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFO1lBQzNDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3hELENBQUM7SUFDQTs7Ozs7TUFLRTtJQUNELFVBQVUsQ0FBQyxFQUFhLEVBQUMsWUFBbUIsRUFBQyxhQUFvQjtRQUMvRCxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxhQUFhLENBQUM7SUFDdkQsQ0FBQztJQUNIOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQUMsRUFBYSxFQUFDLFlBQW1CLEVBQUMsYUFBb0I7UUFDMUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsRUFBYSxFQUFDLEtBQWM7UUFDekMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEVBQUU7WUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEVBQWEsRUFBQyxLQUFjLEVBQUMsUUFBWTtRQUN0RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxNQUFhO1FBQy9CLElBQUksWUFBWSxDQUFDO1FBQ2pCLElBQUcsTUFBTSxJQUFHLEdBQUcsRUFBQztZQUNkLFlBQVksR0FBRyw2RkFBNkYsQ0FBQztTQUM5RzthQUFLLElBQUcsTUFBTSxJQUFHLEdBQUcsRUFBQztZQUNwQixZQUFZLEdBQUcsNkZBQTZGLENBQUM7U0FDOUc7YUFBSyxJQUFHLE1BQU0sSUFBRyxHQUFHLEVBQUM7WUFDcEIsWUFBWSxHQUFHLDZGQUE2RixDQUFDO1NBQzlHO2FBQUssSUFBRyxNQUFNLElBQUcsR0FBRyxFQUFDO1lBQ3BCLFlBQVksR0FBRyw4RkFBOEYsQ0FBQztTQUMvRzthQUFLLElBQUcsTUFBTSxJQUFHLEdBQUcsRUFBQztZQUNwQixZQUFZLEdBQUcsOEZBQThGLENBQUM7U0FDL0c7YUFBSTtZQUNILFlBQVksR0FBRyxNQUFNLENBQUE7U0FDdEI7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzswRUF0RlUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYTt1RkFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEBJbmplY3RhYmxlKHtcbi8vICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4vLyB9KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlbHBlclNlcnZpY2Uge1xuICB0aGVtZUNvbG9ycyA9IFsnZGVmYXVsdCcsJ3ByaW1hcnknLCdzZWNvbmRhcnknLCdzdWNjZXNzJywnZXJyb3InLCd3YXJuaW5nJ107XG4gIGRlZmF1bHRDb2xvciA9IHRoaXMudGhlbWVDb2xvcnNbMF07XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIGNoZWNrcyBpZiB0aGUgZ2l2ZW4gdGhlbWUgY29sb3IgaXMgdmFsaWQgdGhlbWUgY29sb3Igb3Igbm90LCBpZiBpbnZhbGlkIHJldHVybnMgZGVmYXVsdCB0aGVtZSBjb2xvclxuICAgKiBAcGFyYW0gY29sb3IgdGhlbWUgY29sb3IgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEByZXR1cm5zIHJldHVybnMgYSB2YWxpZCB0aGVtZSBjb2xvciwgaWYgaW52YWxpZCByZXR1cm5zICdkZWZhdWx0J1xuICAgKi9cbiAgc2FuaXRpemVUaGVtZUNvbG9yKGNvbG9yOnN0cmluZyk6c3RyaW5ne1xuICAgIHJldHVybiB0aGlzLnRoZW1lQ29sb3JzLmluZGV4T2YoY29sb3IudG9Mb3dlckNhc2UoKSkgPiAtMSA/IGNvbG9yLnRvTG93ZXJDYXNlKCkgOiB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgfVxuICAvKipcbiAgICogcmV0dXJucyB0aGUgY3NzIGNvbG9yIHZhcmlhYmxlIGZvciB0aGUgdGhlbWUgY29sb3IoZGVmYXVsdCxwcmltYXJ5Li4uKSBvdGhlcndpc2UgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZVxuICAgKiBAcGFyYW0gY29sb3IgY29sb3IgdG8gYmUgc2FuaXRpemVkXG4gICAqIEByZXR1cm5zIHNhbml0aXplZCBjb2xvclxuICAgKi9cbiAgc2FuaXRpemVDb2xvcihjb2xvcjpzdHJpbmcpOnN0cmluZ3tcbiAgICBsZXQgY29sb3JMQyA9IGNvbG9yID8gY29sb3IudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgIGxldCB0aGVtZUNvbG9yID0gdGhpcy50aGVtZUNvbG9ycy5maW5kKCh0Yyk9PntcbiAgICAgIHJldHVybiBjb2xvckxDLmluZGV4T2YodGMpID49MDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhlbWVDb2xvciA/IGB2YXIoLS1uZ3ctJHtjb2xvckxDfSlgIDogY29sb3JMQztcbiAgfVxuICAgLyoqXG4gICAqIEFwcGx5IHRoZSBnaXZlbiBzdHlsZSBwb3BlcnR5IHRvIGdpdmVuIGVsZW1lbnQuIFxuICAgKiBAcGFyYW0gZWwgRWxlbWVudCBmb3Igd2hpY2ggc3R5bGUgbmVlZHMgdG8gYmUgYXBwbGllZFxuICAgKiBAcGFyYW0gcHJvcGVydHlOYW1lIHN0eWxlIHBvcnBlcnR5IHRoYXQgbmVlZHMgdG8gYmUgc2V0XG4gICAqIEBwYXJhbSBwcm9wZXJ0eVZhbHVlIHN0eWxlIHZhbHVlIHRoYXQgbmVlZCB0byBiZSBzZXRcbiAgICovXG4gICAgYXBwbHlTdHlsZShlbDpFbGVtZW50UmVmLHByb3BlcnR5TmFtZTpzdHJpbmcscHJvcGVydHlWYWx1ZTpzdHJpbmcpe1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZVtwcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlWYWx1ZTtcbiAgICB9XG4gIC8qKlxuICAgKiBzYW5pdGl6ZSBhbmQgQXBwbHkgdGhlIGdpdmVuIHN0eWxlIHBvcGVydHkgdG8gZ2l2ZW4gZWxlbWVudC4gXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50IGZvciB3aGljaCBzdHlsZSBuZWVkcyB0byBiZSBhcHBsaWVkXG4gICAqIEBwYXJhbSBwcm9wZXJ0eU5hbWUgc3R5bGUgcG9ycGVydHkgdGhhdCBuZWVkcyB0byBiZSBzZXRcbiAgICogQHBhcmFtIHByb3BlcnR5VmFsdWUgc3R5bGUgdmFsdWUgdGhhdCBuZWVkIHRvIGJlIHNldFxuICAgKi9cbiAgc2FuaXRpemVBbmRBcHBseVN0eWxlKGVsOkVsZW1lbnRSZWYscHJvcGVydHlOYW1lOnN0cmluZyxwcm9wZXJ0eVZhbHVlOnN0cmluZyl7XG4gICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZVtwcm9wZXJ0eU5hbWVdID0gdGhpcy5zYW5pdGl6ZUNvbG9yKHByb3BlcnR5VmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIGFuZCByZXR1cm5zIENTUyBzdHlsZSBvYmogZm9yIGdpdmVuIGNzcyBwcm9wZXJ0aWVzIGZyb20gdGhlIGdpdmVuIEhUTUwgRWxlbWVudFxuICAgKiBAcGFyYW0gZWwgRWxlbWVudCBmcm9tIHdoaWNoIHN0eWxlcyBuZWVkcyB0byBiZSBleHRyYWN0ZWRcbiAgICogQHBhcmFtIHByb3BzIFN0eWxlIHByb3BlcnRpZXMgdG8gYmUgZXh0cmFjdGVkXG4gICAqIEByZXR1cm5zIHN0eWxlIG9iamVjdCBmb3IgZ2l2ZW4gc3R5bGUgcHJvcGVydGllc1xuICAgKi9cbiAgZ2V0U3R5bGVPYmplY3QoZWw6RWxlbWVudFJlZixwcm9wczpzdHJpbmdbXSl7XG4gICAgbGV0IHN0eWxlT2JqID0ge307XG4gICAgcHJvcHMuZm9yRWFjaCgocHJvcCxpKT0+e1xuICAgICAgc3R5bGVPYmpbcHJvcF0gPSBlbC5uYXRpdmVFbGVtZW50LnN0eWxlW3Byb3BdO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHlsZU9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRzIHRoZSBzdHlsZSBvZiB0aGUgSFRNTCBlbGVtZW50IHdpdGggZ2l2ZW4gc3R5bGVcbiAgICogQHBhcmFtIGVsIEhUTUwgZWxlbWVudCBmb3Igd2hpY2ggc3R5bGUgbmVlZHMgdG8gYmUgc2V0XG4gICAqIEBwYXJhbSBwcm9wcyBzZXQgb2YgQ1NTIHN0eWxlIHByb2VwcnRpZXNcbiAgICogQHBhcmFtIHN0eWxlT2JqIENTUyBzdHlsZXMgd2l0aCB2YWx1ZXMgdG8gYmUgc2V0XG4gICAqL1xuICBzZXRTdHlsZU9iamVjdChlbDpFbGVtZW50UmVmLHByb3BzOnN0cmluZ1tdLHN0eWxlT2JqOmFueSl7XG4gICAgcHJvcHMuZm9yRWFjaCgocHJvcCxpKT0+e1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlT2JqW3Byb3BdO1xuICAgIH0pO1xuICB9XG5cbiAgc2FuaXRpemVTaGFkb3dWYWx1ZShzaGFkb3c6c3RyaW5nKTpzdHJpbmd7XG4gICAgbGV0IHNoZG93VG9BcHBseTtcbiAgICBpZihzaGFkb3cgPT1cIjFcIil7XG4gICAgICBzaGRvd1RvQXBwbHkgPSAnMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKSc7XG4gICAgfWVsc2UgaWYoc2hhZG93ID09XCIyXCIpe1xuICAgICAgc2hkb3dUb0FwcGx5ID0gJzAgM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksIDAgMnB4IDJweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDVweCAwIHJnYigwIDAgMCAvIDEyJSknO1xuICAgIH1lbHNlIGlmKHNoYWRvdyA9PVwiM1wiKXtcbiAgICAgIHNoZG93VG9BcHBseSA9ICcwIDNweCAzcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDNweCA0cHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCA4cHggMCByZ2IoMCAwIDAgLyAxMiUpJztcbiAgICB9ZWxzZSBpZihzaGFkb3cgPT1cIjRcIil7XG4gICAgICBzaGRvd1RvQXBwbHkgPSAnMCAycHggNHB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCA0cHggNXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggMTBweCAwIHJnYigwIDAgMCAvIDEyJSknO1xuICAgIH1lbHNlIGlmKHNoYWRvdyA9PVwiNVwiKXtcbiAgICAgIHNoZG93VG9BcHBseSA9ICcwIDNweCA1cHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDVweCA4cHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAxNHB4IDAgcmdiKDAgMCAwIC8gMTIlKSc7XG4gICAgfWVsc2V7XG4gICAgICBzaGRvd1RvQXBwbHkgPSBzaGFkb3dcbiAgICB9XG4gICAgcmV0dXJuIHNoZG93VG9BcHBseTtcbiAgfVxuXG5cbn1cbiJdfQ==