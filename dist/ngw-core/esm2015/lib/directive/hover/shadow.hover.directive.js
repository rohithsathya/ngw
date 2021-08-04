import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class ShadowHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['boxShadow'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            let shdowToApply = this.helper.sanitizeShadowValue(this.propValue);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], shdowToApply);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
ShadowHoverDirective.ɵfac = function ShadowHoverDirective_Factory(t) { return new (t || ShadowHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
ShadowHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: ShadowHoverDirective, selectors: [["", "hover.shadow", ""]], hostBindings: function ShadowHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function ShadowHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ShadowHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { propValue: ["hover.shadow", "propValue"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShadowHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.shadow]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { propValue: [{
            type: Input,
            args: ['hover.shadow']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL3NoYWRvdy5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0UsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFKdkMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxvQkFBZSxHQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsaUJBQVksR0FBTyxFQUFFLENBQUM7SUFFNEMsQ0FBQztJQUduRSxZQUFZO1FBQ1YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0UsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdFLENBQUM7O3dGQXJCVSxvQkFBb0I7eURBQXBCLG9CQUFvQjsyR0FBcEIsa0JBQWMsMEZBQWQsa0JBQWM7O3VGQUFkLG9CQUFvQjtjQUhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjt5RkFHd0IsU0FBUztrQkFBL0IsS0FBSzttQkFBQyxjQUFjO1lBT3JCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZO1lBVzFCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaG92ZXIuc2hhZG93XSdcbn0pXG5leHBvcnQgY2xhc3MgU2hhZG93SG92ZXJEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgnaG92ZXIuc2hhZG93JykgcHJvcFZhbHVlID0gJyc7XG4gIHByb3BlcnRpZXNUb1NldDpzdHJpbmdbXSA9IFsnYm94U2hhZG93J107XG4gIGJhY2t1cFZhbHVlczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpe1xuICAgIGlmKHRoaXMucHJvcFZhbHVlKXtcbiAgICAgIHRoaXMuYmFja3VwVmFsdWVzID0gdGhpcy5oZWxwZXIuZ2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCk7XG4gICAgICBcbiAgICAgIGxldCBzaGRvd1RvQXBwbHkgPSB0aGlzLmhlbHBlci5zYW5pdGl6ZVNoYWRvd1ZhbHVlKHRoaXMucHJvcFZhbHVlKTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFswXSxzaGRvd1RvQXBwbHkpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKXtcbiAgICB0aGlzLmhlbHBlci5zZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0LHRoaXMuYmFja3VwVmFsdWVzKTtcbiAgfVxuXG59XG4iXX0=