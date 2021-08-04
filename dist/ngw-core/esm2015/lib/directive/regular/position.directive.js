import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class PositionDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.position = '';
    }
    ngOnChanges(changes) {
        if (changes.position) {
            this.helper.applyStyle(this.el, 'position', this.position);
        }
    }
}
PositionDirective.ɵfac = function PositionDirective_Factory(t) { return new (t || PositionDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
PositionDirective.ɵdir = i0.ɵɵdefineDirective({ type: PositionDirective, selectors: [["", "position", ""]], inputs: { position: "position" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PositionDirective, [{
        type: Directive,
        args: [{
                selector: '[position]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { position: [{
            type: Input,
            args: ['position']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9wb3NpdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQU14RSxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUQzQyxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2lDLENBQUM7SUFDbkUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7O2tGQVBVLGlCQUFpQjtzREFBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCO3lGQUVvQixRQUFRO2tCQUExQixLQUFLO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twb3NpdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uID0gJyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMucG9zaXRpb24pe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdwb3NpdGlvbicsdGhpcy5wb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==