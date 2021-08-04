import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class FontSizeHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverFontSize = '';
        this.propertiesToSet = ['fontSize'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.hoverFontSize) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverFontSize);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
FontSizeHoverDirective.ɵfac = function FontSizeHoverDirective_Factory(t) { return new (t || FontSizeHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
FontSizeHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontSizeHoverDirective, selectors: [["", "hover.fontSize", ""]], hostBindings: function FontSizeHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function FontSizeHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FontSizeHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverFontSize: ["hover.fontSize", "hoverFontSize"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontSizeHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.fontSize]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { hoverFontSize: [{
            type: Input,
            args: ['hover.fontSize']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplLmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL2ZvbnQtc2l6ZS5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0UsTUFBTSxPQUFPLHNCQUFzQjtJQU9qQyxZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFKckMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDNUMsb0JBQWUsR0FBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLGlCQUFZLEdBQU8sRUFBRSxDQUFDO0lBRTRDLENBQUM7SUFHbkUsWUFBWTtRQUNWLElBQUcsSUFBSSxDQUFDLGFBQWEsRUFBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7NEZBcEJVLHNCQUFzQjsyREFBdEIsc0JBQXNCOzZHQUF0QixrQkFBYyw0RkFBZCxrQkFBYzs7dUZBQWQsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCO3lGQUkwQixhQUFhO2tCQUFyQyxLQUFLO21CQUFDLGdCQUFnQjtZQU92QixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWTtZQVMxQixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hvdmVyLmZvbnRTaXplXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9udFNpemVIb3ZlckRpcmVjdGl2ZSB7XG5cbiAgXG4gIEBJbnB1dCgnaG92ZXIuZm9udFNpemUnKSBob3ZlckZvbnRTaXplID0gJyc7XG4gIHByb3BlcnRpZXNUb1NldDpzdHJpbmdbXSA9IFsnZm9udFNpemUnXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCl7XG4gICAgaWYodGhpcy5ob3ZlckZvbnRTaXplKXtcbiAgICAgIHRoaXMuYmFja3VwVmFsdWVzID0gdGhpcy5oZWxwZXIuZ2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCk7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbMF0sdGhpcy5ob3ZlckZvbnRTaXplKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCl7XG4gICAgdGhpcy5oZWxwZXIuc2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCx0aGlzLmJhY2t1cFZhbHVlcyk7XG4gIH1cblxuXG59XG4iXX0=