import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/helper.service";
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
NgwFormControlDirective.ɵfac = function NgwFormControlDirective_Factory(t) { return new (t || NgwFormControlDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
NgwFormControlDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgwFormControlDirective, selectors: [["", "ngwFormControl", ""]], inputs: { color: "color" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwFormControlDirective, [{
        type: Directive,
        args: [{
                selector: '[ngwFormControl]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { color: [{
            type: Input,
            args: ['color']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LWZvcm0tY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2VsZW1lbnRzL25ndy1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFGOUMsVUFBSyxHQUFDLEVBQUUsQ0FBQztRQUd2QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLElBQUcsT0FBTyxDQUFDLEtBQUssRUFBQztZQUNmLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsbURBQW1EO1FBQzFILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxjQUFjLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsY0FBYyxNQUFNLENBQUMsQ0FBQztJQUVoRixDQUFDOzs4RkFyQlUsdUJBQXVCOzREQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjt5RkFHaUIsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd3Rm9ybUNvbnRyb2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3dGb3JtQ29udHJvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCdjb2xvcicpIGNvbG9yPScnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmd3LWZvcm0tY29udHJvbFwiKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLmNvbG9yKXtcbiAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseSgpe1xuICAgIHRoaXMuaGVscGVyLnRoZW1lQ29sb3JzLm1hcCgoYyk9PntcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGBuZ3ctYm9yZGVyLWNvbG9yLSR7Y30tNjAwYCk7IC8vcmVtb3ZlIGFueSB0aGVtZSBjbGFzcyB0aGF0IG1pZ2h0IGhhdmUgYmVlbiBhZGRlZFxuICAgIH0pO1xuICAgIGxldCBzYW5pdGl6ZWRDb2xvciAgPSB0aGlzLmhlbHBlci5zYW5pdGl6ZVRoZW1lQ29sb3IodGhpcy5jb2xvcik7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5ndy1ib3JkZXItY29sb3ItJHtzYW5pdGl6ZWRDb2xvcn0tNjAwYCk7XG5cbiAgfVxuXG59XG4iXX0=