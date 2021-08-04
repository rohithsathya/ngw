import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class PaddingHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverpadding = '';
        this.hoverpaddingTop = '';
        this.hoverpaddingLeft = '';
        this.hoverpaddingBottom = '';
        this.hoverpaddingRight = '';
        this.hoverpaddingX = '';
        this.hoverpaddingY = '';
        this.propertiesToSet = ['padding', 'paddingTop', 'paddingLeft', 'paddingBottom', 'paddingRight'];
        this.backupValues = {};
    }
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        if (this.hoverpaddingX) {
            this.hoverpaddingLeft = this.hoverpaddingX;
            this.hoverpaddingRight = this.hoverpaddingX;
        }
        if (this.hoverpaddingY) {
            this.hoverpaddingTop = this.hoverpaddingY;
            this.hoverpaddingBottom = this.hoverpaddingY;
        }
        this.hoverpadding ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverpadding) : '';
        this.hoverpaddingTop ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverpaddingTop) : '';
        this.hoverpaddingLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverpaddingLeft) : '';
        this.hoverpaddingBottom ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverpaddingBottom) : '';
        this.hoverpaddingRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverpaddingRight) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
PaddingHoverDirective.ɵfac = function PaddingHoverDirective_Factory(t) { return new (t || PaddingHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
PaddingHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: PaddingHoverDirective, selectors: [["", "hover.padding", ""], ["", "hover.padding.top", ""], ["", "hover.padding.left", ""], ["", "hover.padding.bottom", ""], ["", "hover.padding.right", ""], ["", "hover.padding.x", ""], ["", "hover.padding.y", ""]], hostBindings: function PaddingHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function PaddingHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function PaddingHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { hoverpadding: ["hover.padding", "hoverpadding"], hoverpaddingTop: ["hover.padding.top", "hoverpaddingTop"], hoverpaddingLeft: ["hover.padding.left", "hoverpaddingLeft"], hoverpaddingBottom: ["hover.padding.bottom", "hoverpaddingBottom"], hoverpaddingRight: ["hover.padding.right", "hoverpaddingRight"], hoverpaddingX: ["hover.padding.x", "hoverpaddingX"], hoverpaddingY: ["hover.padding.y", "hoverpaddingY"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaddingHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.padding],[hover.padding.top],[hover.padding.left],[hover.padding.bottom],[hover.padding.right],[hover.padding.x],[hover.padding.y]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { hoverpadding: [{
            type: Input,
            args: ['hover.padding']
        }], hoverpaddingTop: [{
            type: Input,
            args: ['hover.padding.top']
        }], hoverpaddingLeft: [{
            type: Input,
            args: ['hover.padding.left']
        }], hoverpaddingBottom: [{
            type: Input,
            args: ['hover.padding.bottom']
        }], hoverpaddingRight: [{
            type: Input,
            args: ['hover.padding.right']
        }], hoverpaddingX: [{
            type: Input,
            args: ['hover.padding.x']
        }], hoverpaddingY: [{
            type: Input,
            args: ['hover.padding.y']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5ob3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2RpcmVjdGl2ZS9ob3Zlci9wYWRkaW5nLmhvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zRSxNQUFNLE9BQU8scUJBQXFCO0lBYWhDLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVh0QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRTdDLG9CQUFlLEdBQVksQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsY0FBYyxDQUFDLENBQUM7UUFDakcsaUJBQVksR0FBTyxFQUFFLENBQUM7SUFFNEMsQ0FBQztJQUduRSxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUc3RSxJQUFHLElBQUksQ0FBQyxhQUFhLEVBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0M7UUFFRCxJQUFHLElBQUksQ0FBQyxhQUFhLEVBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25HLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0csSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUUvRyxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7MEZBekNVLHFCQUFxQjswREFBckIscUJBQXFCOzRHQUFyQixrQkFBYywyRkFBZCxrQkFBYzs7dUZBQWQscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMklBQTJJO2FBQ3RKO3lGQUd5QixZQUFZO2tCQUFuQyxLQUFLO21CQUFDLGVBQWU7WUFDTSxlQUFlO2tCQUExQyxLQUFLO21CQUFDLG1CQUFtQjtZQUNHLGdCQUFnQjtrQkFBNUMsS0FBSzttQkFBQyxvQkFBb0I7WUFDSSxrQkFBa0I7a0JBQWhELEtBQUs7bUJBQUMsc0JBQXNCO1lBQ0MsaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQUNGLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBQ0UsYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFReEIsWUFBWTtrQkFEWCxZQUFZO21CQUFDLFlBQVk7WUF3QjFCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaG92ZXIucGFkZGluZ10sW2hvdmVyLnBhZGRpbmcudG9wXSxbaG92ZXIucGFkZGluZy5sZWZ0XSxbaG92ZXIucGFkZGluZy5ib3R0b21dLFtob3Zlci5wYWRkaW5nLnJpZ2h0XSxbaG92ZXIucGFkZGluZy54XSxbaG92ZXIucGFkZGluZy55XSdcbn0pXG5leHBvcnQgY2xhc3MgUGFkZGluZ0hvdmVyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ2hvdmVyLnBhZGRpbmcnKSBob3ZlcnBhZGRpbmcgPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIucGFkZGluZy50b3AnKSBob3ZlcnBhZGRpbmdUb3AgPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIucGFkZGluZy5sZWZ0JykgaG92ZXJwYWRkaW5nTGVmdCA9ICcnOyBcbiAgQElucHV0KCdob3Zlci5wYWRkaW5nLmJvdHRvbScpIGhvdmVycGFkZGluZ0JvdHRvbSA9ICcnOyBcbiAgQElucHV0KCdob3Zlci5wYWRkaW5nLnJpZ2h0JykgaG92ZXJwYWRkaW5nUmlnaHQgPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIucGFkZGluZy54JykgaG92ZXJwYWRkaW5nWCA9ICcnOyBcbiAgQElucHV0KCdob3Zlci5wYWRkaW5nLnknKSBob3ZlcnBhZGRpbmdZID0gJyc7IFxuXG4gIHByb3BlcnRpZXNUb1NldDpzdHJpbmdbXSA9IFsncGFkZGluZycsJ3BhZGRpbmdUb3AnLCdwYWRkaW5nTGVmdCcsJ3BhZGRpbmdCb3R0b20nLCdwYWRkaW5nUmlnaHQnXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCl7XG4gICAgdGhpcy5iYWNrdXBWYWx1ZXMgPSB0aGlzLmhlbHBlci5nZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0KTtcblxuXG4gICAgaWYodGhpcy5ob3ZlcnBhZGRpbmdYKXtcbiAgICAgIHRoaXMuaG92ZXJwYWRkaW5nTGVmdCA9IHRoaXMuaG92ZXJwYWRkaW5nWDtcbiAgICAgIHRoaXMuaG92ZXJwYWRkaW5nUmlnaHQgPSB0aGlzLmhvdmVycGFkZGluZ1g7XG4gICAgfVxuXG4gICAgaWYodGhpcy5ob3ZlcnBhZGRpbmdZKXtcbiAgICAgIHRoaXMuaG92ZXJwYWRkaW5nVG9wID0gdGhpcy5ob3ZlcnBhZGRpbmdZO1xuICAgICAgdGhpcy5ob3ZlcnBhZGRpbmdCb3R0b20gPSB0aGlzLmhvdmVycGFkZGluZ1k7XG4gICAgfVxuXG4gICAgdGhpcy5ob3ZlcnBhZGRpbmcgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbMF0sdGhpcy5ob3ZlcnBhZGRpbmcpIDogJyc7XG4gICAgdGhpcy5ob3ZlcnBhZGRpbmdUb3AgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbMV0sdGhpcy5ob3ZlcnBhZGRpbmdUb3ApIDogJyc7XG4gICAgdGhpcy5ob3ZlcnBhZGRpbmdMZWZ0ID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzJdLHRoaXMuaG92ZXJwYWRkaW5nTGVmdCkgOiAnJztcbiAgICB0aGlzLmhvdmVycGFkZGluZ0JvdHRvbSA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFszXSx0aGlzLmhvdmVycGFkZGluZ0JvdHRvbSkgOiAnJztcbiAgICB0aGlzLmhvdmVycGFkZGluZ1JpZ2h0ID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzRdLHRoaXMuaG92ZXJwYWRkaW5nUmlnaHQpIDogJyc7XG4gICAgXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCl7XG4gICAgdGhpcy5oZWxwZXIuc2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCx0aGlzLmJhY2t1cFZhbHVlcyk7XG4gIH1cblxufVxuIl19