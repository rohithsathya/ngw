import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class BorderHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverBorder = '';
        this.hoverBorderWidth = '';
        this.hoverBorderColor = '';
        this.hoverBorderStyle = '';
        this.propertiesToSet = ['border', 'borderWidth', 'borderColor', 'borderStyle'];
        this.backupValues = {};
    }
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        this.hoverBorder ? this.helper.applyStyle(this.el, 'border', this.hoverBorder) : '';
        this.hoverBorderWidth ? this.helper.applyStyle(this.el, 'borderWidth', this.hoverBorderWidth) : '';
        this.hoverBorderColor ? this.helper.sanitizeAndApplyStyle(this.el, 'borderColor', this.hoverBorderColor) : '';
        this.hoverBorderStyle ? this.helper.applyStyle(this.el, 'borderStyle', this.hoverBorderStyle) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
BorderHoverDirective.ɵfac = function BorderHoverDirective_Factory(t) { return new (t || BorderHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
BorderHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: BorderHoverDirective, selectors: [["", "hover.border", ""], ["", "hover.border.width", ""], ["", "hover.border.color", ""], ["", "hover.border.style", ""]], hostBindings: function BorderHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function BorderHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BorderHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverBorder: ["hover.border", "hoverBorder"], hoverBorderWidth: ["hover.border.width", "hoverBorderWidth"], hoverBorderColor: ["hover.border.color", "hoverBorderColor"], hoverBorderStyle: ["hover.border.style", "hoverBorderStyle"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BorderHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.border],[hover.border.width],[hover.border.color],[hover.border.style]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { hoverBorder: [{
            type: Input,
            args: ['hover.border']
        }], hoverBorderWidth: [{
            type: Input,
            args: ['hover.border.width']
        }], hoverBorderColor: [{
            type: Input,
            args: ['hover.border.color']
        }], hoverBorderStyle: [{
            type: Input,
            args: ['hover.border.style']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyLmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL2JvcmRlci5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0UsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFSdkMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDWCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUVuRCxvQkFBZSxHQUFZLENBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEYsaUJBQVksR0FBTyxFQUFFLENBQUE7SUFFNkMsQ0FBQztJQUduRSxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQyxDQUFBLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUM7UUFDL0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUM7UUFDMUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLENBQUEsRUFBRSxDQUFDO0lBQ2pHLENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RSxDQUFDOzt3RkF6QlUsb0JBQW9CO3lEQUFwQixvQkFBb0I7MkdBQXBCLGtCQUFjLDBGQUFkLGtCQUFjOzt1RkFBZCxvQkFBb0I7Y0FIaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrRUFBK0U7YUFDMUY7eUZBR3dCLFdBQVc7a0JBQWpDLEtBQUs7bUJBQUMsY0FBYztZQUNRLGdCQUFnQjtrQkFBNUMsS0FBSzttQkFBQyxvQkFBb0I7WUFDRSxnQkFBZ0I7a0JBQTVDLEtBQUs7bUJBQUMsb0JBQW9CO1lBQ0UsZ0JBQWdCO2tCQUE1QyxLQUFLO21CQUFDLG9CQUFvQjtZQVEzQixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWTtZQVcxQixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hvdmVyLmJvcmRlcl0sW2hvdmVyLmJvcmRlci53aWR0aF0sW2hvdmVyLmJvcmRlci5jb2xvcl0sW2hvdmVyLmJvcmRlci5zdHlsZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJvcmRlckhvdmVyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ2hvdmVyLmJvcmRlcicpIGhvdmVyQm9yZGVyID0gJyc7XG4gIEBJbnB1dCgnaG92ZXIuYm9yZGVyLndpZHRoJykgaG92ZXJCb3JkZXJXaWR0aCA9ICcnO1xuICBASW5wdXQoJ2hvdmVyLmJvcmRlci5jb2xvcicpIGhvdmVyQm9yZGVyQ29sb3IgPSAnJztcbiAgQElucHV0KCdob3Zlci5ib3JkZXIuc3R5bGUnKSBob3ZlckJvcmRlclN0eWxlID0gJyc7XG5cbiAgcHJvcGVydGllc1RvU2V0OnN0cmluZ1tdID0gWydib3JkZXInLCdib3JkZXJXaWR0aCcsJ2JvcmRlckNvbG9yJywnYm9yZGVyU3R5bGUnXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlRW50ZXIoKXtcbiAgICB0aGlzLmJhY2t1cFZhbHVlcyA9IHRoaXMuaGVscGVyLmdldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQpO1xuXG4gICAgdGhpcy5ob3ZlckJvcmRlciA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYm9yZGVyJyx0aGlzLmhvdmVyQm9yZGVyKTonJztcbiAgICB0aGlzLmhvdmVyQm9yZGVyV2lkdGggPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2JvcmRlcldpZHRoJyx0aGlzLmhvdmVyQm9yZGVyV2lkdGgpOicnO1xuICAgIHRoaXMuaG92ZXJCb3JkZXJDb2xvciA/IHRoaXMuaGVscGVyLnNhbml0aXplQW5kQXBwbHlTdHlsZSh0aGlzLmVsLCdib3JkZXJDb2xvcicsdGhpcy5ob3ZlckJvcmRlckNvbG9yKTonJztcbiAgICB0aGlzLmhvdmVyQm9yZGVyU3R5bGUgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2JvcmRlclN0eWxlJyx0aGlzLmhvdmVyQm9yZGVyU3R5bGUpOicnO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpe1xuICAgIHRoaXMuaGVscGVyLnNldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQsdGhpcy5iYWNrdXBWYWx1ZXMpO1xuICB9XG5cblxufVxuIl19