import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class BgColorHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverBgColor = '';
        this.propertiesToSet = ['backgroundColor'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.hoverBgColor) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.sanitizeAndApplyStyle(this.el, 'backgroundColor', this.hoverBgColor);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
BgColorHoverDirective.ɵfac = function BgColorHoverDirective_Factory(t) { return new (t || BgColorHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
BgColorHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: BgColorHoverDirective, selectors: [["", "hover.bgColor", ""]], hostBindings: function BgColorHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function BgColorHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BgColorHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverBgColor: ["hover.bgColor", "hoverBgColor"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BgColorHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.bgColor]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { hoverBgColor: [{
            type: Input,
            args: ['hover.bgColor']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmctY29sb3IuaG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvaG92ZXIvYmctY29sb3IuaG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNFLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsWUFBb0IsRUFBYSxFQUFTLE1BQW9CO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBSnRDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzFDLG9CQUFlLEdBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9DLGlCQUFZLEdBQU8sRUFBRSxDQUFDO0lBRTRDLENBQUM7SUFHbkUsWUFBWTtRQUNWLElBQUcsSUFBSSxDQUFDLFlBQVksRUFBQztZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxpQkFBaUIsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7MEZBbkJVLHFCQUFxQjswREFBckIscUJBQXFCOzRHQUFyQixrQkFBYywyRkFBZCxrQkFBYzs7dUZBQWQscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCO3lGQUd5QixZQUFZO2tCQUFuQyxLQUFLO21CQUFDLGVBQWU7WUFPdEIsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVk7WUFTMUIsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tob3Zlci5iZ0NvbG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgQmdDb2xvckhvdmVyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ2hvdmVyLmJnQ29sb3InKSBob3ZlckJnQ29sb3IgPSAnJztcbiAgcHJvcGVydGllc1RvU2V0OnN0cmluZ1tdID0gWydiYWNrZ3JvdW5kQ29sb3InXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCl7XG4gICAgaWYodGhpcy5ob3ZlckJnQ29sb3Ipe1xuICAgICAgdGhpcy5iYWNrdXBWYWx1ZXMgPSB0aGlzLmhlbHBlci5nZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0KTtcbiAgICAgIHRoaXMuaGVscGVyLnNhbml0aXplQW5kQXBwbHlTdHlsZSh0aGlzLmVsLCdiYWNrZ3JvdW5kQ29sb3InLHRoaXMuaG92ZXJCZ0NvbG9yKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCl7XG4gICAgdGhpcy5oZWxwZXIuc2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCx0aGlzLmJhY2t1cFZhbHVlcyk7XG4gIH1cblxufVxuIl19