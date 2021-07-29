import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class MarginHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverMargin = '';
        this.hoverMarginTop = '';
        this.hoverMarginLeft = '';
        this.hoverMarginBottom = '';
        this.hoverMarginRight = '';
        this.hoverMarginX = '';
        this.hoverMarginY = '';
        this.propertiesToSet = ['margin', 'marginTop', 'marginLeft', 'marginBottom', 'marginRight'];
        this.backupValues = {};
    }
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        if (this.hoverMarginX) {
            this.hoverMarginLeft = this.hoverMarginX;
            this.hoverMarginRight = this.hoverMarginX;
        }
        if (this.hoverMarginY) {
            this.hoverMarginTop = this.hoverMarginY;
            this.hoverMarginBottom = this.hoverMarginY;
        }
        this.hoverMargin ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverMargin) : '';
        this.hoverMarginTop ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverMarginTop) : '';
        this.hoverMarginLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverMarginLeft) : '';
        this.hoverMarginBottom ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverMarginBottom) : '';
        this.hoverMarginRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverMarginRight) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
MarginHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.margin],[hover.margin.top],[hover.margin.left],[hover.margin.bottom],[hover.margin.right],[hover.margin.x],[hover.margin.y]'
            },] }
];
MarginHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
MarginHoverDirective.propDecorators = {
    hoverMargin: [{ type: Input, args: ['hover.margin',] }],
    hoverMarginTop: [{ type: Input, args: ['hover.margin.top',] }],
    hoverMarginLeft: [{ type: Input, args: ['hover.margin.left',] }],
    hoverMarginBottom: [{ type: Input, args: ['hover.margin.bottom',] }],
    hoverMarginRight: [{ type: Input, args: ['hover.margin.right',] }],
    hoverMarginX: [{ type: Input, args: ['hover.margin.x',] }],
    hoverMarginY: [{ type: Input, args: ['hover.margin.y',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyZ2luLmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL21hcmdpbi5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLOUQsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFYdkMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTNDLG9CQUFlLEdBQVksQ0FBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUYsaUJBQVksR0FBTyxFQUFFLENBQUM7SUFFNEMsQ0FBQztJQUduRSxZQUFZO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUc3RSxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUM7WUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzNDO1FBRUQsSUFBRyxJQUFJLENBQUMsWUFBWSxFQUFDO1lBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUM1QztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDN0csSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUU3RyxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0lBQW9JO2FBQy9JOzs7WUFMbUIsVUFBVTtZQUNyQixhQUFhOzs7MEJBT25CLEtBQUssU0FBQyxjQUFjOzZCQUNwQixLQUFLLFNBQUMsa0JBQWtCOzhCQUN4QixLQUFLLFNBQUMsbUJBQW1CO2dDQUN6QixLQUFLLFNBQUMscUJBQXFCOytCQUMzQixLQUFLLFNBQUMsb0JBQW9COzJCQUMxQixLQUFLLFNBQUMsZ0JBQWdCOzJCQUN0QixLQUFLLFNBQUMsZ0JBQWdCOzJCQU90QixZQUFZLFNBQUMsWUFBWTsyQkF1QnpCLFlBQVksU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaG92ZXIubWFyZ2luXSxbaG92ZXIubWFyZ2luLnRvcF0sW2hvdmVyLm1hcmdpbi5sZWZ0XSxbaG92ZXIubWFyZ2luLmJvdHRvbV0sW2hvdmVyLm1hcmdpbi5yaWdodF0sW2hvdmVyLm1hcmdpbi54XSxbaG92ZXIubWFyZ2luLnldJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXJnaW5Ib3ZlckRpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCdob3Zlci5tYXJnaW4nKSBob3Zlck1hcmdpbiA9ICcnOyBcbiAgQElucHV0KCdob3Zlci5tYXJnaW4udG9wJykgaG92ZXJNYXJnaW5Ub3AgPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIubWFyZ2luLmxlZnQnKSBob3Zlck1hcmdpbkxlZnQgPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIubWFyZ2luLmJvdHRvbScpIGhvdmVyTWFyZ2luQm90dG9tID0gJyc7IFxuICBASW5wdXQoJ2hvdmVyLm1hcmdpbi5yaWdodCcpIGhvdmVyTWFyZ2luUmlnaHQgPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIubWFyZ2luLngnKSBob3Zlck1hcmdpblggPSAnJzsgXG4gIEBJbnB1dCgnaG92ZXIubWFyZ2luLnknKSBob3Zlck1hcmdpblkgPSAnJzsgXG5cbiAgcHJvcGVydGllc1RvU2V0OnN0cmluZ1tdID0gWydtYXJnaW4nLCdtYXJnaW5Ub3AnLCdtYXJnaW5MZWZ0JywnbWFyZ2luQm90dG9tJywnbWFyZ2luUmlnaHQnXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCl7XG4gICAgdGhpcy5iYWNrdXBWYWx1ZXMgPSB0aGlzLmhlbHBlci5nZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0KTtcblxuXG4gICAgaWYodGhpcy5ob3Zlck1hcmdpblgpe1xuICAgICAgdGhpcy5ob3Zlck1hcmdpbkxlZnQgPSB0aGlzLmhvdmVyTWFyZ2luWDtcbiAgICAgIHRoaXMuaG92ZXJNYXJnaW5SaWdodCA9IHRoaXMuaG92ZXJNYXJnaW5YO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaG92ZXJNYXJnaW5ZKXtcbiAgICAgIHRoaXMuaG92ZXJNYXJnaW5Ub3AgPSB0aGlzLmhvdmVyTWFyZ2luWTtcbiAgICAgIHRoaXMuaG92ZXJNYXJnaW5Cb3R0b20gPSB0aGlzLmhvdmVyTWFyZ2luWTtcbiAgICB9XG5cbiAgICB0aGlzLmhvdmVyTWFyZ2luID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzBdLHRoaXMuaG92ZXJNYXJnaW4pIDogJyc7XG4gICAgdGhpcy5ob3Zlck1hcmdpblRvcCA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFsxXSx0aGlzLmhvdmVyTWFyZ2luVG9wKSA6ICcnO1xuICAgIHRoaXMuaG92ZXJNYXJnaW5MZWZ0ID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzJdLHRoaXMuaG92ZXJNYXJnaW5MZWZ0KSA6ICcnO1xuICAgIHRoaXMuaG92ZXJNYXJnaW5Cb3R0b20gPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbM10sdGhpcy5ob3Zlck1hcmdpbkJvdHRvbSkgOiAnJztcbiAgICB0aGlzLmhvdmVyTWFyZ2luUmlnaHQgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbNF0sdGhpcy5ob3Zlck1hcmdpblJpZ2h0KSA6ICcnO1xuICAgIFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpe1xuICAgIHRoaXMuaGVscGVyLnNldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQsdGhpcy5iYWNrdXBWYWx1ZXMpO1xuICB9XG5cbn1cbiJdfQ==