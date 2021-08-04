import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class TextColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.textColor = '';
    }
    ngOnChanges(changes) {
        changes.textColor ? this.helper.sanitizeAndApplyStyle(this.el, 'color', this.textColor) : '';
    }
}
TextColorDirective.ɵfac = function TextColorDirective_Factory(t) { return new (t || TextColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
TextColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: TextColorDirective, selectors: [["", "textColor", ""]], inputs: { textColor: "textColor" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextColorDirective, [{
        type: Directive,
        args: [{
                selector: '[textColor]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { textColor: [{
            type: Input,
            args: ['textColor']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2xvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2RpcmVjdGl2ZS9yZWd1bGFyL3RleHQtY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUFvQixFQUFhLEVBQVUsTUFBb0I7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7UUFGM0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVnQyxDQUFDO0lBRXBFLFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0YsQ0FBQzs7b0ZBUFUsa0JBQWtCO3VEQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7eUZBRXFCLFNBQVM7a0JBQTVCLEtBQUs7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RleHRDb2xvcl0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb2xvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgndGV4dENvbG9yJykgdGV4dENvbG9yID0gJyc7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYsIHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBjaGFuZ2VzLnRleHRDb2xvciA/IHRoaXMuaGVscGVyLnNhbml0aXplQW5kQXBwbHlTdHlsZSh0aGlzLmVsLCdjb2xvcicsdGhpcy50ZXh0Q29sb3IpIDogJyc7XG4gIH1cblxufVxuIl19