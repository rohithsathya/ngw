import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class RadiusHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverRadius = '';
        this.hoverRadiusTopLeft = '';
        this.hoverRadiusTopRight = '';
        this.hoverRadiusBottomLeft = '';
        this.hoverRadiusBottomRight = '';
        this.propertiesToSet = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'];
        this.backupValues = {};
    }
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        this.hoverRadius ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverRadius) : '';
        this.hoverRadiusTopLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverRadiusTopLeft) : '';
        this.hoverRadiusTopRight ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverRadiusTopRight) : '';
        this.hoverRadiusBottomLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverRadiusBottomLeft) : '';
        this.hoverRadiusBottomRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverRadiusBottomRight) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
RadiusHoverDirective.ɵfac = function RadiusHoverDirective_Factory(t) { return new (t || RadiusHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
RadiusHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: RadiusHoverDirective, selectors: [["", "hover.radius", ""], ["", "hover.radius.topLeft", ""], ["", "hover.radius.topRight", ""], ["", "hover.radius.bottomLeft", ""], ["", "hover.radius.bottomRight", ""]], hostBindings: function RadiusHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function RadiusHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function RadiusHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverRadius: ["hover.radius", "hoverRadius"], hoverRadiusTopLeft: ["hover.radius.topLeft", "hoverRadiusTopLeft"], hoverRadiusTopRight: ["hover.radius.topRight", "hoverRadiusTopRight"], hoverRadiusBottomLeft: ["hover.radius.bottomLeft", "hoverRadiusBottomLeft"], hoverRadiusBottomRight: ["hover.radius.bottomRight", "hoverRadiusBottomRight"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadiusHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.radius],[hover.radius.topLeft],[hover.radius.topRight],[hover.radius.bottomLeft],[hover.radius.bottomRight]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { hoverRadius: [{
            type: Input,
            args: ['hover.radius']
        }], hoverRadiusTopLeft: [{
            type: Input,
            args: ['hover.radius.topLeft']
        }], hoverRadiusTopRight: [{
            type: Input,
            args: ['hover.radius.topRight']
        }], hoverRadiusBottomLeft: [{
            type: Input,
            args: ['hover.radius.bottomLeft']
        }], hoverRadiusBottomRight: [{
            type: Input,
            args: ['hover.radius.bottomRight']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaXVzLmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL3JhZGl1cy5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0UsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFUdkMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDVCx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDdkIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMxQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFFL0Qsb0JBQWUsR0FBWSxDQUFDLGNBQWMsRUFBQyxxQkFBcUIsRUFBQyxzQkFBc0IsRUFBQyx3QkFBd0IsRUFBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzVJLGlCQUFZLEdBQU8sRUFBRSxDQUFDO0lBRTRDLENBQUM7SUFHbkUsWUFBWTtRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqSCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFekgsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdFLENBQUM7O3dGQTVCVSxvQkFBb0I7eURBQXBCLG9CQUFvQjsyR0FBcEIsa0JBQWMsMEZBQWQsa0JBQWM7O3VGQUFkLG9CQUFvQjtjQUhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9IQUFvSDthQUMvSDt5RkFHd0IsV0FBVztrQkFBakMsS0FBSzttQkFBQyxjQUFjO1lBQ1Usa0JBQWtCO2tCQUFoRCxLQUFLO21CQUFDLHNCQUFzQjtZQUNHLG1CQUFtQjtrQkFBbEQsS0FBSzttQkFBQyx1QkFBdUI7WUFDSSxxQkFBcUI7a0JBQXRELEtBQUs7bUJBQUMseUJBQXlCO1lBQ0csc0JBQXNCO2tCQUF4RCxLQUFLO21CQUFDLDBCQUEwQjtZQVFqQyxZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWTtZQWExQixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hvdmVyLnJhZGl1c10sW2hvdmVyLnJhZGl1cy50b3BMZWZ0XSxbaG92ZXIucmFkaXVzLnRvcFJpZ2h0XSxbaG92ZXIucmFkaXVzLmJvdHRvbUxlZnRdLFtob3Zlci5yYWRpdXMuYm90dG9tUmlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSYWRpdXNIb3ZlckRpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCdob3Zlci5yYWRpdXMnKSBob3ZlclJhZGl1cyA9ICcnO1xuICBASW5wdXQoJ2hvdmVyLnJhZGl1cy50b3BMZWZ0JykgaG92ZXJSYWRpdXNUb3BMZWZ0ID0gJyc7XG4gIEBJbnB1dCgnaG92ZXIucmFkaXVzLnRvcFJpZ2h0JykgaG92ZXJSYWRpdXNUb3BSaWdodCA9ICcnO1xuICBASW5wdXQoJ2hvdmVyLnJhZGl1cy5ib3R0b21MZWZ0JykgaG92ZXJSYWRpdXNCb3R0b21MZWZ0ID0gJyc7XG4gIEBJbnB1dCgnaG92ZXIucmFkaXVzLmJvdHRvbVJpZ2h0JykgaG92ZXJSYWRpdXNCb3R0b21SaWdodCA9ICcnO1xuXG4gIHByb3BlcnRpZXNUb1NldDpzdHJpbmdbXSA9IFsnYm9yZGVyUmFkaXVzJywnYm9yZGVyVG9wTGVmdFJhZGl1cycsJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJywnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJ107XG4gIGJhY2t1cFZhbHVlczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpe1xuICAgIHRoaXMuYmFja3VwVmFsdWVzID0gdGhpcy5oZWxwZXIuZ2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCk7XG5cbiAgICB0aGlzLmhvdmVyUmFkaXVzID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzBdLHRoaXMuaG92ZXJSYWRpdXMpIDogJyc7XG4gICAgdGhpcy5ob3ZlclJhZGl1c1RvcExlZnQgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbMV0sdGhpcy5ob3ZlclJhZGl1c1RvcExlZnQpIDogJyc7XG4gICAgdGhpcy5ob3ZlclJhZGl1c1RvcFJpZ2h0ID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzJdLHRoaXMuaG92ZXJSYWRpdXNUb3BSaWdodCkgOiAnJztcbiAgICB0aGlzLmhvdmVyUmFkaXVzQm90dG9tTGVmdCA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFszXSx0aGlzLmhvdmVyUmFkaXVzQm90dG9tTGVmdCkgOiAnJztcbiAgICB0aGlzLmhvdmVyUmFkaXVzQm90dG9tUmlnaHQgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbNF0sdGhpcy5ob3ZlclJhZGl1c0JvdHRvbVJpZ2h0KSA6ICcnO1xuICAgIFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpe1xuICAgIHRoaXMuaGVscGVyLnNldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQsdGhpcy5iYWNrdXBWYWx1ZXMpO1xuICB9XG5cbn1cbiJdfQ==