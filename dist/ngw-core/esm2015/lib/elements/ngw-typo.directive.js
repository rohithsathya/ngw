import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../services/helper.service';
export class NgwTypoDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.type = ''; //headline,title,subheading-2,subheading-1,caption
    }
    ngOnChanges(changes) {
        if (changes.type || changes.muted) {
            this.apply();
        }
    }
    apply() {
        let isMuted = this.muted !== undefined && this.muted.toString().toLowerCase() == 'true' ? true : false;
        if (isMuted) {
            this.el.nativeElement.classList.add(`ngw-text-muted`);
        }
        else {
            this.el.nativeElement.classList.remove(`ngw-text-muted`);
        }
        this.el.nativeElement.classList.add(`ngw-text-${this.type.toLowerCase()}`);
    }
}
NgwTypoDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngwTypo]'
            },] }
];
NgwTypoDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
NgwTypoDirective.propDecorators = {
    type: [{ type: Input, args: ['ngwTypo',] }],
    muted: [{ type: Input, args: ['muted',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LXR5cG8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9lbGVtZW50cy9uZ3ctdHlwby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUszRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUg1QyxTQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsa0RBQWtEO0lBR2IsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBQztZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3ZHLElBQUcsT0FBTyxFQUFDO1lBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3ZEO2FBQUk7WUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O21CQU9uQixLQUFLLFNBQUMsU0FBUztvQkFDZixLQUFLLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nd1R5cG9dJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3dUeXBvRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ25nd1R5cG8nKSB0eXBlID0gJyc7IC8vaGVhZGxpbmUsdGl0bGUsc3ViaGVhZGluZy0yLHN1YmhlYWRpbmctMSxjYXB0aW9uXG4gIEBJbnB1dCgnbXV0ZWQnKSBtdXRlZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyl7XG4gICAgaWYoY2hhbmdlcy50eXBlIHx8IGNoYW5nZXMubXV0ZWQpe1xuICAgICAgdGhpcy5hcHBseSgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5KCl7XG4gICAgbGV0IGlzTXV0ZWQgPSB0aGlzLm11dGVkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5tdXRlZC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmKGlzTXV0ZWQpe1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5ndy10ZXh0LW11dGVkYCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgbmd3LXRleHQtbXV0ZWRgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbmd3LXRleHQtJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcbiAgfVxuXG59XG4iXX0=