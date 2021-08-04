import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class WidthDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
    }
    ngOnChanges(changes) {
        changes.width ? this.helper.applyStyle(this.el, 'width', this.width) : '';
    }
}
WidthDirective.ɵfac = function WidthDirective_Factory(t) { return new (t || WidthDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
WidthDirective.ɵdir = i0.ɵɵdefineDirective({ type: WidthDirective, selectors: [["", "width", ""]], inputs: { width: "width" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidthDirective, [{
        type: Directive,
        args: [{
                selector: '[width]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { width: [{
            type: Input,
            args: ['width']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkdGguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci93aWR0aC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQU14RSxNQUFNLE9BQU8sY0FBYztJQUl6QixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7SUFBSSxDQUFDO0lBRW5FLFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFFLENBQUM7OzRFQVJVLGNBQWM7bURBQWQsY0FBYzt1RkFBZCxjQUFjO2NBSDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsU0FBUzthQUNwQjt5RkFHaUIsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2lkdGhdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaWR0aERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIFxuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBjaGFuZ2VzLndpZHRoID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCd3aWR0aCcsdGhpcy53aWR0aCkgOiAnJztcbiAgfVxuXG59XG4iXX0=