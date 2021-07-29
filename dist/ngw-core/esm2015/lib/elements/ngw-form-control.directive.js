import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../services/helper.service';
export class NgwFormControlDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.color = '';
        this.el.nativeElement.classList.add("ngw-form-control");
    }
    ngOnChanges(changes) {
        if (changes.color) {
            this.apply();
        }
    }
    apply() {
        this.helper.themeColors.map((c) => {
            this.el.nativeElement.classList.remove(`ngw-border-color-${c}-600`); //remove any theme class that might have been added
        });
        let sanitizedColor = this.helper.sanitizeThemeColor(this.color);
        this.el.nativeElement.classList.add(`ngw-border-color-${sanitizedColor}-600`);
    }
}
NgwFormControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngwFormControl]'
            },] }
];
NgwFormControlDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
NgwFormControlDirective.propDecorators = {
    color: [{ type: Input, args: ['color',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LWZvcm0tY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2VsZW1lbnRzL25ndy1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLM0QsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFGOUMsVUFBSyxHQUFDLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLElBQUcsT0FBTyxDQUFDLEtBQUssRUFBQztZQUNmLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsbURBQW1EO1FBQzFILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxjQUFjLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsY0FBYyxNQUFNLENBQUMsQ0FBQztJQUVoRixDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7OztZQUxtQixVQUFVO1lBQ3JCLGFBQWE7OztvQkFPbkIsS0FBSyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3dGb3JtQ29udHJvbF0nXG59KVxuZXhwb3J0IGNsYXNzIE5nd0Zvcm1Db250cm9sRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ2NvbG9yJykgY29sb3I9Jyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZ3ctZm9ybS1jb250cm9sXCIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMuY29sb3Ipe1xuICAgICAgdGhpcy5hcHBseSgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5KCl7XG4gICAgdGhpcy5oZWxwZXIudGhlbWVDb2xvcnMubWFwKChjKT0+e1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYG5ndy1ib3JkZXItY29sb3ItJHtjfS02MDBgKTsgLy9yZW1vdmUgYW55IHRoZW1lIGNsYXNzIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIGFkZGVkXG4gICAgfSk7XG4gICAgbGV0IHNhbml0aXplZENvbG9yICA9IHRoaXMuaGVscGVyLnNhbml0aXplVGhlbWVDb2xvcih0aGlzLmNvbG9yKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbmd3LWJvcmRlci1jb2xvci0ke3Nhbml0aXplZENvbG9yfS02MDBgKTtcblxuICB9XG5cbn1cbiJdfQ==