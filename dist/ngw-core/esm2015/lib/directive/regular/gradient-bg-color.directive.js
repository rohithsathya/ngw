import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class GradientBgColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.gradientBgColor = '';
    }
    ngOnChanges(changes) {
        if (changes.gradientBgColor) {
            this.gradientBgColor = this.helper.sanitizeThemeColor(this.gradientBgColor);
            let biValue = `linear-gradient(to right, var(--ngw-${this.gradientBgColor}-600),var(--ngw-${this.gradientBgColor}-500),var(--ngw-${this.gradientBgColor}-400,rgba(91,33,182,0)))`;
            this.helper.applyStyle(this.el, 'backgroundImage', biValue);
        }
    }
}
GradientBgColorDirective.ɵfac = function GradientBgColorDirective_Factory(t) { return new (t || GradientBgColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
GradientBgColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: GradientBgColorDirective, selectors: [["", "gradientBgColor", ""]], inputs: { gradientBgColor: "gradientBgColor" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GradientBgColorDirective, [{
        type: Directive,
        args: [{
                selector: '[gradientBgColor]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { gradientBgColor: [{
            type: Input,
            args: ['gradientBgColor']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGllbnQtYmctY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9ncmFkaWVudC1iZy1jb2xvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQU14RSxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUZwQyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQUVtQixDQUFDO0lBRW5FLFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLElBQUcsT0FBTyxDQUFDLGVBQWUsRUFBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVFLElBQUksT0FBTyxHQUFHLHVDQUF1QyxJQUFJLENBQUMsZUFBZSxtQkFBbUIsSUFBSSxDQUFDLGVBQWUsbUJBQW1CLElBQUksQ0FBQyxlQUFlLDBCQUEwQixDQUFDO1lBQ2xMLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOztnR0FaVSx3QkFBd0I7NkRBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCO3lGQUcyQixlQUFlO2tCQUF4QyxLQUFLO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dyYWRpZW50QmdDb2xvcl0nXG59KVxuZXhwb3J0IGNsYXNzIEdyYWRpZW50QmdDb2xvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCdncmFkaWVudEJnQ29sb3InKSBncmFkaWVudEJnQ29sb3IgPSAnJztcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5ncmFkaWVudEJnQ29sb3Ipe1xuICAgICAgdGhpcy5ncmFkaWVudEJnQ29sb3IgPSB0aGlzLmhlbHBlci5zYW5pdGl6ZVRoZW1lQ29sb3IodGhpcy5ncmFkaWVudEJnQ29sb3IpO1xuICAgICAgbGV0IGJpVmFsdWUgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1uZ3ctJHt0aGlzLmdyYWRpZW50QmdDb2xvcn0tNjAwKSx2YXIoLS1uZ3ctJHt0aGlzLmdyYWRpZW50QmdDb2xvcn0tNTAwKSx2YXIoLS1uZ3ctJHt0aGlzLmdyYWRpZW50QmdDb2xvcn0tNDAwLHJnYmEoOTEsMzMsMTgyLDApKSlgO1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdiYWNrZ3JvdW5kSW1hZ2UnLGJpVmFsdWUpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=