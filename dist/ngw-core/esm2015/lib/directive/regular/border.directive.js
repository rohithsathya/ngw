import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class BorderDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.border = '';
        this.borderWidth = '';
        this.borderColor = '';
        this.borderStyle = '';
    }
    ngOnChanges(changes) {
        if (changes.border) {
            this.helper.applyStyle(this.el, 'border', this.border);
        }
        if (changes.borderColor) {
            this.helper.sanitizeAndApplyStyle(this.el, 'borderColor', this.borderColor);
        }
        if (changes.borderWidth) {
            this.helper.applyStyle(this.el, 'borderWidth', this.borderWidth);
        }
        if (changes.borderStyle) {
            this.helper.applyStyle(this.el, 'borderStyle', this.borderStyle);
        }
    }
}
BorderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[border],[border.width],[border.color],[border.style]'
            },] }
];
BorderDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
BorderDirective.propDecorators = {
    border: [{ type: Input, args: ['border',] }],
    borderWidth: [{ type: Input, args: ['border.width',] }],
    borderColor: [{ type: Input, args: ['border.color',] }],
    borderStyle: [{ type: Input, args: ['border.style',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvYm9yZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxlQUFlO0lBTTFCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUw3QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ04sZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFFMEIsQ0FBQztJQUNuRSxXQUFXLENBQUMsT0FBVztRQUNyQixJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBRyxPQUFPLENBQUMsV0FBVyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBRyxPQUFPLENBQUMsV0FBVyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUcsT0FBTyxDQUFDLFdBQVcsRUFBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1REFBdUQ7YUFDbEU7OztZQUxtQixVQUFVO1lBQ3JCLGFBQWE7OztxQkFNbkIsS0FBSyxTQUFDLFFBQVE7MEJBQ2QsS0FBSyxTQUFDLGNBQWM7MEJBQ3BCLEtBQUssU0FBQyxjQUFjOzBCQUNwQixLQUFLLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JvcmRlcl0sW2JvcmRlci53aWR0aF0sW2JvcmRlci5jb2xvcl0sW2JvcmRlci5zdHlsZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJvcmRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnYm9yZGVyJykgYm9yZGVyID0gJyc7XG4gIEBJbnB1dCgnYm9yZGVyLndpZHRoJykgYm9yZGVyV2lkdGggPSAnJztcbiAgQElucHV0KCdib3JkZXIuY29sb3InKSBib3JkZXJDb2xvciA9ICcnO1xuICBASW5wdXQoJ2JvcmRlci5zdHlsZScpIGJvcmRlclN0eWxlID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5ib3JkZXIpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdib3JkZXInLHRoaXMuYm9yZGVyKTtcbiAgICB9XG4gICAgaWYoY2hhbmdlcy5ib3JkZXJDb2xvcil7XG4gICAgICB0aGlzLmhlbHBlci5zYW5pdGl6ZUFuZEFwcGx5U3R5bGUodGhpcy5lbCwnYm9yZGVyQ29sb3InLHRoaXMuYm9yZGVyQ29sb3IpO1xuICAgIH1cbiAgICBpZihjaGFuZ2VzLmJvcmRlcldpZHRoKXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYm9yZGVyV2lkdGgnLHRoaXMuYm9yZGVyV2lkdGgpO1xuICAgIH1cbiAgICBpZihjaGFuZ2VzLmJvcmRlclN0eWxlKXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYm9yZGVyU3R5bGUnLHRoaXMuYm9yZGVyU3R5bGUpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=