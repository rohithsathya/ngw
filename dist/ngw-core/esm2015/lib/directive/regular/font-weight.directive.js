import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
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
FontWeightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fontWeight]'
            },] }
];
FontWeightDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FontWeightDirective.propDecorators = {
    fontWeight: [{ type: Input, args: ['fontWeight',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC13ZWlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9mb250LXdlaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUs5RCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUZ6QyxlQUFVLEdBQUcsRUFBRSxDQUFDO0lBRTZCLENBQUM7SUFFbkUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsVUFBVSxFQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O3lCQU9uQixLQUFLLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ZvbnRXZWlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb250V2VpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2Vze1xuXG4gIEBJbnB1dCgnZm9udFdlaWdodCcpIGZvbnRXZWlnaHQgPSAnJztcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5mb250V2VpZ2h0KXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnZm9udFdlaWdodCcsdGhpcy5mb250V2VpZ2h0KTtcbiAgICB9XG4gIH1cblxufVxuIl19