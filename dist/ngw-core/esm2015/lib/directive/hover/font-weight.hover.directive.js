import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class FontWeightHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['fontWeight'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
FontWeightHoverDirective.ɵfac = function FontWeightHoverDirective_Factory(t) { return new (t || FontWeightHoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
FontWeightHoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontWeightHoverDirective, selectors: [["", "hover.fontWeight", ""]], hostBindings: function FontWeightHoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function FontWeightHoverDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function FontWeightHoverDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { propValue: ["hover.fontWeight", "propValue"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontWeightHoverDirective, [{
        type: Directive,
        args: [{
                selector: '[hover.fontWeight]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { propValue: [{
            type: Input,
            args: ['hover.fontWeight']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC13ZWlnaHQuaG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvaG92ZXIvZm9udC13ZWlnaHQuaG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNFLE1BQU0sT0FBTyx3QkFBd0I7SUFNbkMsWUFBb0IsRUFBYSxFQUFTLE1BQW9CO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBSm5DLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDMUMsb0JBQWUsR0FBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLGlCQUFZLEdBQU8sRUFBRSxDQUFDO0lBRTRDLENBQUM7SUFHbkUsWUFBWTtRQUNWLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0dBbkJVLHdCQUF3Qjs2REFBeEIsd0JBQXdCOytHQUF4QixrQkFBYyw4RkFBZCxrQkFBYzs7dUZBQWQsd0JBQXdCO2NBSHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9CO3lGQUc0QixTQUFTO2tCQUFuQyxLQUFLO21CQUFDLGtCQUFrQjtZQU96QixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWTtZQVMxQixZQUFZO2tCQURYLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hvdmVyLmZvbnRXZWlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb250V2VpZ2h0SG92ZXJEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgnaG92ZXIuZm9udFdlaWdodCcpIHByb3BWYWx1ZSA9ICcnO1xuICBwcm9wZXJ0aWVzVG9TZXQ6c3RyaW5nW10gPSBbJ2ZvbnRXZWlnaHQnXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCl7XG4gICAgaWYodGhpcy5wcm9wVmFsdWUpe1xuICAgICAgdGhpcy5iYWNrdXBWYWx1ZXMgPSB0aGlzLmhlbHBlci5nZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0KTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFswXSx0aGlzLnByb3BWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpe1xuICAgIHRoaXMuaGVscGVyLnNldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQsdGhpcy5iYWNrdXBWYWx1ZXMpO1xuICB9XG5cbn1cbiJdfQ==