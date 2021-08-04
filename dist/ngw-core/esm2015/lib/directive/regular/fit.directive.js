import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class FitDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fit = ''; //valid options : contain,cover,fill,none,scale-down
    }
    ngOnChanges(changes) {
        if (changes.fit) {
            this.helper.applyStyle(this.el, 'objectFit', this.fit);
        }
    }
}
FitDirective.ɵfac = function FitDirective_Factory(t) { return new (t || FitDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
FitDirective.ɵdir = i0.ɵɵdefineDirective({ type: FitDirective, selectors: [["", "fit", ""]], inputs: { fit: "fit" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FitDirective, [{
        type: Directive,
        args: [{
                selector: '[fit]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { fit: [{
            type: Input,
            args: ['fit']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvZml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXhFLE1BQU0sT0FBTyxZQUFZO0lBRXZCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQURoRCxRQUFHLEdBQUcsRUFBRSxDQUFBLENBQUMsb0RBQW9EO0lBQ1QsQ0FBQztJQUNuRSxXQUFXLENBQUMsT0FBVztRQUNyQixJQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzt3RUFQVSxZQUFZO2lEQUFaLFlBQVk7dUZBQVosWUFBWTtjQUh4QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87YUFDbEI7eUZBRWUsR0FBRztrQkFBaEIsS0FBSzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZml0XSdcbn0pXG5leHBvcnQgY2xhc3MgRml0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdmaXQnKSBmaXQgPSAnJyAvL3ZhbGlkIG9wdGlvbnMgOiBjb250YWluLGNvdmVyLGZpbGwsbm9uZSxzY2FsZS1kb3duXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMuZml0KXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnb2JqZWN0Rml0Jyx0aGlzLmZpdCk7XG4gICAgfVxuICB9XG59XG4iXX0=