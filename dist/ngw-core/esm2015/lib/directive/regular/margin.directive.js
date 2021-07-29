import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class MarginDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.margin = '';
        this.marginTop = '';
        this.marginLeft = '';
        this.marginBottom = '';
        this.marginRight = '';
        this.marginX = '';
        this.marginY = '';
    }
    ngOnChanges(changes) {
        if (changes.margin) {
            this.helper.applyStyle(this.el, 'margin', this.margin);
        }
        if (changes.marginTop) {
            this.helper.applyStyle(this.el, 'marginTop', this.marginTop);
        }
        if (changes.marginLeft) {
            this.helper.applyStyle(this.el, 'marginLeft', this.marginLeft);
        }
        if (changes.marginBottom) {
            this.helper.applyStyle(this.el, 'marginBottom', this.marginBottom);
        }
        if (changes.marginRight) {
            this.helper.applyStyle(this.el, 'marginRight', this.marginRight);
        }
        if (changes.marginX) {
            this.helper.applyStyle(this.el, 'marginLeft', this.marginX);
            this.helper.applyStyle(this.el, 'marginRight', this.marginX);
        }
        if (changes.marginY) {
            this.helper.applyStyle(this.el, 'marginTop', this.marginY);
            this.helper.applyStyle(this.el, 'marginBottom', this.marginY);
        }
    }
}
MarginDirective.decorators = [
    { type: Directive, args: [{
                selector: '[margin],[margin.top],[margin.left],[margin.bottom],[margin.right],[margin.x],[margin.y]'
            },] }
];
MarginDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
MarginDirective.propDecorators = {
    margin: [{ type: Input, args: ['margin',] }],
    marginTop: [{ type: Input, args: ['margin.top',] }],
    marginLeft: [{ type: Input, args: ['margin.left',] }],
    marginBottom: [{ type: Input, args: ['margin.bottom',] }],
    marginRight: [{ type: Input, args: ['margin.right',] }],
    marginX: [{ type: Input, args: ['margin.x',] }],
    marginY: [{ type: Input, args: ['margin.y',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyZ2luLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvbWFyZ2luLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxlQUFlO0lBVTFCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVJ0QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFFNkIsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBVztRQUVyQixJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBRyxPQUFPLENBQUMsU0FBUyxFQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUcsT0FBTyxDQUFDLFVBQVUsRUFBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBRyxPQUFPLENBQUMsV0FBVyxFQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0Q7SUFFSCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwRkFBMEY7YUFDckc7OztZQUxtQixVQUFVO1lBQ3JCLGFBQWE7OztxQkFPbkIsS0FBSyxTQUFDLFFBQVE7d0JBQ2QsS0FBSyxTQUFDLFlBQVk7eUJBQ2xCLEtBQUssU0FBQyxhQUFhOzJCQUNuQixLQUFLLFNBQUMsZUFBZTswQkFDckIsS0FBSyxTQUFDLGNBQWM7c0JBQ3BCLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hcmdpbl0sW21hcmdpbi50b3BdLFttYXJnaW4ubGVmdF0sW21hcmdpbi5ib3R0b21dLFttYXJnaW4ucmlnaHRdLFttYXJnaW4ueF0sW21hcmdpbi55XSdcbn0pXG5leHBvcnQgY2xhc3MgTWFyZ2luRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ21hcmdpbicpICAgICAgICBtYXJnaW4gPSAnJztcbiAgQElucHV0KCdtYXJnaW4udG9wJykgICAgbWFyZ2luVG9wID0gJyc7XG4gIEBJbnB1dCgnbWFyZ2luLmxlZnQnKSAgIG1hcmdpbkxlZnQgPSAnJztcbiAgQElucHV0KCdtYXJnaW4uYm90dG9tJykgbWFyZ2luQm90dG9tID0gJyc7XG4gIEBJbnB1dCgnbWFyZ2luLnJpZ2h0JykgIG1hcmdpblJpZ2h0ID0gJyc7XG4gIEBJbnB1dCgnbWFyZ2luLngnKSAgICAgIG1hcmdpblggPSAnJztcbiAgQElucHV0KCdtYXJnaW4ueScpICAgICAgbWFyZ2luWSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG5cbiAgICBpZihjaGFuZ2VzLm1hcmdpbil7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ21hcmdpbicsdGhpcy5tYXJnaW4pO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMubWFyZ2luVG9wKXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnbWFyZ2luVG9wJyx0aGlzLm1hcmdpblRvcCk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5tYXJnaW5MZWZ0KXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnbWFyZ2luTGVmdCcsdGhpcy5tYXJnaW5MZWZ0KTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLm1hcmdpbkJvdHRvbSl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ21hcmdpbkJvdHRvbScsdGhpcy5tYXJnaW5Cb3R0b20pO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMubWFyZ2luUmlnaHQpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdtYXJnaW5SaWdodCcsdGhpcy5tYXJnaW5SaWdodCk7XG4gICAgfVxuICAgIGlmKGNoYW5nZXMubWFyZ2luWCl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ21hcmdpbkxlZnQnLHRoaXMubWFyZ2luWCk7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ21hcmdpblJpZ2h0Jyx0aGlzLm1hcmdpblgpO1xuICAgIH1cbiAgICBpZihjaGFuZ2VzLm1hcmdpblkpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdtYXJnaW5Ub3AnLHRoaXMubWFyZ2luWSk7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ21hcmdpbkJvdHRvbScsdGhpcy5tYXJnaW5ZKTtcbiAgICB9XG5cbiAgfVxufVxuIl19