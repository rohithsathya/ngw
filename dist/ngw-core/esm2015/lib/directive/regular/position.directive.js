import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
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
PositionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[position]'
            },] }
];
PositionDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
PositionDirective.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9wb3NpdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUs5RCxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUQzQyxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2lDLENBQUM7SUFDbkUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O3VCQU1uQixLQUFLLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Bvc2l0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgUG9zaXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb24gPSAnJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5wb3NpdGlvbil7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3Bvc2l0aW9uJyx0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxufVxuIl19