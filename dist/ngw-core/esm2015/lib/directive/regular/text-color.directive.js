import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class TextColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.textColor = '';
    }
    ngOnChanges(changes) {
        changes.textColor ? this.helper.sanitizeAndApplyStyle(this.el, 'color', this.textColor) : '';
    }
}
TextColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[textColor]'
            },] }
];
TextColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
TextColorDirective.propDecorators = {
    textColor: [{ type: Input, args: ['textColor',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2xvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2RpcmVjdGl2ZS9yZWd1bGFyL3RleHQtY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLOUQsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUFvQixFQUFhLEVBQVUsTUFBb0I7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7UUFGM0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVnQyxDQUFDO0lBRXBFLFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0YsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7WUFMbUIsVUFBVTtZQUNyQixhQUFhOzs7d0JBTW5CLEtBQUssU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGV4dENvbG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCd0ZXh0Q29sb3InKSB0ZXh0Q29sb3IgPSAnJztcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZiwgcHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGNoYW5nZXMudGV4dENvbG9yID8gdGhpcy5oZWxwZXIuc2FuaXRpemVBbmRBcHBseVN0eWxlKHRoaXMuZWwsJ2NvbG9yJyx0aGlzLnRleHRDb2xvcikgOiAnJztcbiAgfVxuXG59XG4iXX0=