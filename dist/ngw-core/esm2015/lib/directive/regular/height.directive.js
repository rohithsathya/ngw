import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class HeightDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.height = '';
    }
    ngOnChanges(changes) {
        if (changes.height) {
            this.helper.applyStyle(this.el, 'height', this.height);
        }
    }
}
HeightDirective.ɵfac = function HeightDirective_Factory(t) { return new (t || HeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
HeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: HeightDirective, selectors: [["", "height", ""]], inputs: { height: "height" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeightDirective, [{
        type: Directive,
        args: [{
                selector: '[height]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { height: [{
            type: Input,
            args: ['height']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXhFLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLEVBQWEsRUFBVSxNQUFvQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUY5QyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBRXNDLENBQUM7SUFFcEUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7OzhFQVRVLGVBQWU7b0RBQWYsZUFBZTt1RkFBZixlQUFlO2NBSDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjt5RkFFa0IsTUFBTTtrQkFBdEIsS0FBSzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaGVpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgSGVpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYsIHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuICBcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpIHtcbiAgICBpZihjaGFuZ2VzLmhlaWdodCl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2hlaWdodCcsdGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==