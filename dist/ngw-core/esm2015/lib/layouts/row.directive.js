import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/helper.service";
export class RowDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
    }
    ngAfterViewInit() {
        this.helper.applyStyle(this.el, 'display', 'flex');
        this.helper.applyStyle(this.el, 'flexDirection', 'row');
        this.helper.applyStyle(this.el, 'flexWrap', 'wrap');
    }
}
RowDirective.ɵfac = function RowDirective_Factory(t) { return new (t || RowDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
RowDirective.ɵdir = i0.ɵɵdefineDirective({ type: RowDirective, selectors: [["", "row", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RowDirective, [{
        type: Directive,
        args: [{
                selector: '[row]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvbGF5b3V0cy9yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDOzs7QUFNckUsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0IsRUFBYSxFQUFTLE1BQW9CO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO0lBQUksQ0FBQztJQUVuRSxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7d0VBUlUsWUFBWTtpREFBWixZQUFZO3VGQUFaLFlBQVk7Y0FIeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcm93XSdcbn0pXG5leHBvcnQgY2xhc3MgUm93RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnZGlzcGxheScsJ2ZsZXgnKTtcbiAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2ZsZXhEaXJlY3Rpb24nLCdyb3cnKTtcbiAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2ZsZXhXcmFwJywnd3JhcCcpO1xuICB9XG5cbn1cbiJdfQ==