import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class FontWeightDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fontWeight = '';
    }
    ngOnChanges(changes) {
        if (changes.fontWeight) {
            this.helper.applyStyle(this.el, 'fontWeight', this.fontWeight);
        }
    }
}
FontWeightDirective.ɵfac = function FontWeightDirective_Factory(t) { return new (t || FontWeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
FontWeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontWeightDirective, selectors: [["", "fontWeight", ""]], inputs: { fontWeight: "fontWeight" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontWeightDirective, [{
        type: Directive,
        args: [{
                selector: '[fontWeight]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { fontWeight: [{
            type: Input,
            args: ['fontWeight']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC13ZWlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9mb250LXdlaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQU14RSxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUZ6QyxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBRTZCLENBQUM7SUFFbkUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsVUFBVSxFQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7O3NGQVZVLG1CQUFtQjt3REFBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FIL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCO3lGQUdzQixVQUFVO2tCQUE5QixLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmb250V2VpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgRm9udFdlaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcblxuICBASW5wdXQoJ2ZvbnRXZWlnaHQnKSBmb250V2VpZ2h0ID0gJyc7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMuZm9udFdlaWdodCl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2ZvbnRXZWlnaHQnLHRoaXMuZm9udFdlaWdodCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==