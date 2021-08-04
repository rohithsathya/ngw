import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class BgColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.bgColor = '';
    }
    ngOnChanges(changes) {
        if (changes.bgColor) {
            this.apply();
        }
    }
    apply() {
        this.helper.sanitizeAndApplyStyle(this.el, 'backgroundColor', this.bgColor);
    }
}
BgColorDirective.ɵfac = function BgColorDirective_Factory(t) { return new (t || BgColorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
BgColorDirective.ɵdir = i0.ɵɵdefineDirective({ type: BgColorDirective, selectors: [["", "bgColor", ""]], inputs: { bgColor: "bgColor" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BgColorDirective, [{
        type: Directive,
        args: [{
                selector: '[bgColor]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { bgColor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmctY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9iZy1jb2xvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7QUFNOUYsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixZQUFvQixFQUFhLEVBQVUsTUFBb0I7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7UUFEdEQsWUFBTyxHQUFDLEVBQUUsQ0FBQztJQUNnRCxDQUFDO0lBQ3JFLFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBQztZQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnRkFWVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBSDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjt5RkFFVSxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmdDb2xvcl0nXG59KVxuZXhwb3J0IGNsYXNzIEJnQ29sb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBiZ0NvbG9yPScnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYsIHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UgKSB7IH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMuYmdDb2xvcil7XG4gICAgICB0aGlzLmFwcGx5KCk7XG4gICAgfVxuICB9XG4gIGFwcGx5KCl7XG4gICAgdGhpcy5oZWxwZXIuc2FuaXRpemVBbmRBcHBseVN0eWxlKHRoaXMuZWwsJ2JhY2tncm91bmRDb2xvcicsdGhpcy5iZ0NvbG9yKTtcbiAgfVxuXG59XG4iXX0=