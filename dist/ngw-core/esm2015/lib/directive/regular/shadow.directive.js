import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class ShadowDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.shadow = '';
    }
    ngOnChanges(changes) {
        if (changes.shadow) {
            let shdowToApply = this.helper.sanitizeShadowValue(this.shadow);
            this.helper.applyStyle(this.el, 'boxShadow', shdowToApply);
        }
    }
}
ShadowDirective.ɵfac = function ShadowDirective_Factory(t) { return new (t || ShadowDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
ShadowDirective.ɵdir = i0.ɵɵdefineDirective({ type: ShadowDirective, selectors: [["", "shadow", ""]], inputs: { shadow: "shadow" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShadowDirective, [{
        type: Directive,
        args: [{
                selector: '[shadow]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { shadow: [{
            type: Input,
            args: ['shadow']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXhFLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLEVBQWEsRUFBVSxNQUFvQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUY5QyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBRXNDLENBQUM7SUFFcEUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ2pCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pEO0lBRUgsQ0FBQzs7OEVBWFUsZUFBZTtvREFBZixlQUFlO3VGQUFmLGVBQWU7Y0FIM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCO3lGQUVrQixNQUFNO2tCQUF0QixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzaGFkb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBTaGFkb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoJ3NoYWRvdycpIHNoYWRvdyA9ICcnO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLCBwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cbiAgXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLnNoYWRvdyl7XG4gICAgIGxldCBzaGRvd1RvQXBwbHkgPSB0aGlzLmhlbHBlci5zYW5pdGl6ZVNoYWRvd1ZhbHVlKHRoaXMuc2hhZG93KTtcbiAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdib3hTaGFkb3cnLHNoZG93VG9BcHBseSk7XG4gICAgfVxuICAgXG4gIH1cblxufVxuIl19