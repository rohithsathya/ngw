import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class MarginHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverMargin = '';
        this.hoverMarginTop = '';
        this.hoverMarginLeft = '';
        this.hoverMarginBottom = '';
        this.hoverMarginRight = '';
        this.hoverMarginX = '';
        this.hoverMarginY = '';
        this.propertiesToSet = ['margin', 'marginTop', 'marginLeft', 'marginBottom', 'marginRight'];
        this.backupValues = {};
    }
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        if (this.hoverMarginX) {
            this.hoverMarginLeft = this.hoverMarginX;
            this.hoverMarginRight = this.hoverMarginX;
        }
        if (this.hoverMarginY) {
            this.hoverMarginTop = this.hoverMarginY;
            this.hoverMarginBottom = this.hoverMarginY;
        }
        this.hoverMargin ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverMargin) : '';
        this.hoverMarginTop ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverMarginTop) : '';
        this.hoverMarginLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverMarginLeft) : '';
        this.hoverMarginBottom ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverMarginBottom) : '';
        this.hoverMarginRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverMarginRight) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
MarginHoverDirective.ɵfac = function MarginHoverDirective_Factory(t) { return new (t || MarginHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
MarginHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: MarginHoverDirective, selectors: [["", "hover.margin", ""], ["", "hover.margin.top", ""], ["", "hover.margin.left", ""], ["", "hover.margin.bottom", ""], ["", "hover.margin.right", ""], ["", "hover.margin.x", ""], ["", "hover.margin.y", ""]], hostBindings: function MarginHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function MarginHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MarginHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverMargin: ["hover.margin", "hoverMargin"], hoverMarginTop: ["hover.margin.top", "hoverMarginTop"], hoverMarginLeft: ["hover.margin.left", "hoverMarginLeft"], hoverMarginBottom: ["hover.margin.bottom", "hoverMarginBottom"], hoverMarginRight: ["hover.margin.right", "hoverMarginRight"], hoverMarginX: ["hover.margin.x", "hoverMarginX"], hoverMarginY: ["hover.margin.y", "hoverMarginY"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarginHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.margin],[hover.margin.top],[hover.margin.left],[hover.margin.bottom],[hover.margin.right],[hover.margin.x],[hover.margin.y]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { hoverMargin: [{
            type: Input,
            args: ['hover.margin']
        }], hoverMarginTop: [{
            type: Input,
            args: ['hover.margin.top']
        }], hoverMarginLeft: [{
            type: Input,
            args: ['hover.margin.left']
        }], hoverMarginBottom: [{
            type: Input,
            args: ['hover.margin.bottom']
        }], hoverMarginRight: [{
            type: Input,
            args: ['hover.margin.right']
        }], hoverMarginX: [{
            type: Input,
            args: ['hover.margin.x']
        }], hoverMarginY: [{
            type: Input,
            args: ['hover.margin.y']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyZ2luLmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL21hcmdpbi5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0UsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFYdkMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTNDLG9CQUFlLEdBQVksQ0FBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUYsaUJBQVksR0FBTyxFQUFFLENBQUM7SUFFNEMsQ0FBQztJQUduRSxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUc3RSxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzNDO1FBRUQsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0csSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUU3RyxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7d0ZBekNVLG9CQUFvQjt5REFBcEIsb0JBQW9COzJHQUFwQixrQkFBYywwRkFBZCxrQkFBYzs7dUZBQWQsb0JBQW9CO2NBSGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0lBQW9JO2FBQy9JO3lGQUd3QixXQUFXO2tCQUFqQyxLQUFLO21CQUFDLGNBQWM7WUFDTSxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQUNHLGVBQWU7a0JBQTFDLEtBQUs7bUJBQUMsbUJBQW1CO1lBQ0ksaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQUNDLGdCQUFnQjtrQkFBNUMsS0FBSzttQkFBQyxvQkFBb0I7WUFDRixZQUFZO2tCQUFwQyxLQUFLO21CQUFDLGdCQUFnQjtZQUNFLFlBQVk7a0JBQXBDLEtBQUs7bUJBQUMsZ0JBQWdCO1lBUXZCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZO1lBd0IxQixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hvdmVyLm1hcmdpbl0sW2hvdmVyLm1hcmdpbi50b3BdLFtob3Zlci5tYXJnaW4ubGVmdF0sW2hvdmVyLm1hcmdpbi5ib3R0b21dLFtob3Zlci5tYXJnaW4ucmlnaHRdLFtob3Zlci5tYXJnaW4ueF0sW2hvdmVyLm1hcmdpbi55XSdcbn0pXG5leHBvcnQgY2xhc3MgTWFyZ2luSG92ZXJEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgnaG92ZXIubWFyZ2luJykgaG92ZXJNYXJnaW4gPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIubWFyZ2luLnRvcCcpIGhvdmVyTWFyZ2luVG9wID0gJyc7IFxuICBASW5wdXQoJ2hvdmVyLm1hcmdpbi5sZWZ0JykgaG92ZXJNYXJnaW5MZWZ0ID0gJyc7IFxuICBASW5wdXQoJ2hvdmVyLm1hcmdpbi5ib3R0b20nKSBob3Zlck1hcmdpbkJvdHRvbSA9ICcnOyBcbiAgQElucHV0KCdob3Zlci5tYXJnaW4ucmlnaHQnKSBob3Zlck1hcmdpblJpZ2h0ID0gJyc7IFxuICBASW5wdXQoJ2hvdmVyLm1hcmdpbi54JykgaG92ZXJNYXJnaW5YID0gJyc7IFxuICBASW5wdXQoJ2hvdmVyLm1hcmdpbi55JykgaG92ZXJNYXJnaW5ZID0gJyc7IFxuXG4gIHByb3BlcnRpZXNUb1NldDpzdHJpbmdbXSA9IFsnbWFyZ2luJywnbWFyZ2luVG9wJywnbWFyZ2luTGVmdCcsJ21hcmdpbkJvdHRvbScsJ21hcmdpblJpZ2h0J107XG4gIGJhY2t1cFZhbHVlczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpe1xuICAgIHRoaXMuYmFja3VwVmFsdWVzID0gdGhpcy5oZWxwZXIuZ2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCk7XG5cblxuICAgIGlmKHRoaXMuaG92ZXJNYXJnaW5YKXtcbiAgICAgIHRoaXMuaG92ZXJNYXJnaW5MZWZ0ID0gdGhpcy5ob3Zlck1hcmdpblg7XG4gICAgICB0aGlzLmhvdmVyTWFyZ2luUmlnaHQgPSB0aGlzLmhvdmVyTWFyZ2luWDtcbiAgICB9XG5cbiAgICBpZih0aGlzLmhvdmVyTWFyZ2luWSl7XG4gICAgICB0aGlzLmhvdmVyTWFyZ2luVG9wID0gdGhpcy5ob3Zlck1hcmdpblk7XG4gICAgICB0aGlzLmhvdmVyTWFyZ2luQm90dG9tID0gdGhpcy5ob3Zlck1hcmdpblk7XG4gICAgfVxuXG4gICAgdGhpcy5ob3Zlck1hcmdpbiA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFswXSx0aGlzLmhvdmVyTWFyZ2luKSA6ICcnO1xuICAgIHRoaXMuaG92ZXJNYXJnaW5Ub3AgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbMV0sdGhpcy5ob3Zlck1hcmdpblRvcCkgOiAnJztcbiAgICB0aGlzLmhvdmVyTWFyZ2luTGVmdCA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFsyXSx0aGlzLmhvdmVyTWFyZ2luTGVmdCkgOiAnJztcbiAgICB0aGlzLmhvdmVyTWFyZ2luQm90dG9tID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzNdLHRoaXMuaG92ZXJNYXJnaW5Cb3R0b20pIDogJyc7XG4gICAgdGhpcy5ob3Zlck1hcmdpblJpZ2h0ID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzRdLHRoaXMuaG92ZXJNYXJnaW5SaWdodCkgOiAnJztcbiAgICBcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKXtcbiAgICB0aGlzLmhlbHBlci5zZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0LHRoaXMuYmFja3VwVmFsdWVzKTtcbiAgfVxuXG59XG4iXX0=