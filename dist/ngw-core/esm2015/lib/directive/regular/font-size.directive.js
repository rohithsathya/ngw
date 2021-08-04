import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class FontSizeDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fontSize = '';
    }
    ngOnChanges(changes) {
        if (changes.fontSize) {
            this.helper.applyStyle(this.el, 'fontSize', this.fontSize);
        }
    }
}
FontSizeDirective.ɵfac = function FontSizeDirective_Factory(t) { return new (t || FontSizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
FontSizeDirective.ɵdir = i0.ɵɵdefineDirective({ type: FontSizeDirective, selectors: [["", "fontSize", ""]], inputs: { fontSize: "fontSize" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontSizeDirective, [{
        type: Directive,
        args: [{
                selector: '[fontSize]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { fontSize: [{
            type: Input,
            args: ['fontSize']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvZm9udC1zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXhFLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFBb0IsRUFBYSxFQUFTLE1BQW9CO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRjNDLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFFaUMsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBVztRQUNyQixJQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7a0ZBVlUsaUJBQWlCO3NEQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7eUZBR29CLFFBQVE7a0JBQTFCLEtBQUs7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZvbnRTaXplXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9udFNpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG5cbiAgQElucHV0KCdmb250U2l6ZScpIGZvbnRTaXplID0gJyc7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMuZm9udFNpemUpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdmb250U2l6ZScsdGhpcy5mb250U2l6ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==