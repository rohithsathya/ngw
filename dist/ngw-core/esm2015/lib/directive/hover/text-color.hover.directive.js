import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class TextColorHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['color'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.sanitizeAndApplyStyle(this.el, this.propertiesToSet[0], this.propValue);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
TextColorHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.textColor]'
            },] }
];
TextColorHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
TextColorHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.textColor',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2xvci5ob3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2RpcmVjdGl2ZS9ob3Zlci90ZXh0LWNvbG9yLmhvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUs5RCxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUpwQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLG9CQUFlLEdBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxpQkFBWSxHQUFPLEVBQUUsQ0FBQztJQUU0QyxDQUFDO0lBR25FLFlBQVk7UUFDVixJQUFHLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkY7SUFDSCxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7WUFMbUIsVUFBVTtZQUNyQixhQUFhOzs7d0JBT25CLEtBQUssU0FBQyxpQkFBaUI7MkJBTXZCLFlBQVksU0FBQyxZQUFZOzJCQVF6QixZQUFZLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hvdmVyLnRleHRDb2xvcl0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb2xvckhvdmVyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ2hvdmVyLnRleHRDb2xvcicpIHByb3BWYWx1ZSA9ICcnO1xuICBwcm9wZXJ0aWVzVG9TZXQ6c3RyaW5nW10gPSBbJ2NvbG9yJ107XG4gIGJhY2t1cFZhbHVlczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpe1xuICAgIGlmKHRoaXMucHJvcFZhbHVlKXtcbiAgICAgIHRoaXMuYmFja3VwVmFsdWVzID0gdGhpcy5oZWxwZXIuZ2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCk7XG4gICAgICB0aGlzLmhlbHBlci5zYW5pdGl6ZUFuZEFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFswXSx0aGlzLnByb3BWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpe1xuICAgIHRoaXMuaGVscGVyLnNldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQsdGhpcy5iYWNrdXBWYWx1ZXMpO1xuICB9XG5cbn1cbiJdfQ==