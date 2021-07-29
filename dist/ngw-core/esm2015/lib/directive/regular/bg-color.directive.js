import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class BgColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.bgColor = '';
    }
    ngOnChanges(changes) {
        if (changes.bgColor) {
            this.apply();
        }
    }
    apply() {
        this.helper.sanitizeAndApplyStyle(this.el, 'backgroundColor', this.bgColor);
    }
}
BgColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bgColor]'
            },] }
];
BgColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
BgColorDirective.propDecorators = {
    bgColor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmctY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9iZy1jb2xvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLOUQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixZQUFvQixFQUFhLEVBQVUsTUFBb0I7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7UUFEdEQsWUFBTyxHQUFDLEVBQUUsQ0FBQztJQUNnRCxDQUFDO0lBQ3JFLFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLElBQUcsT0FBTyxDQUFDLE9BQU8sRUFBQztZQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7YUFDdEI7OztZQUxtQixVQUFVO1lBQ3JCLGFBQWE7OztzQkFNbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiZ0NvbG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgQmdDb2xvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGJnQ29sb3I9Jyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZiwgcHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSApIHsgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5iZ0NvbG9yKXtcbiAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICB9XG4gIH1cbiAgYXBwbHkoKXtcbiAgICB0aGlzLmhlbHBlci5zYW5pdGl6ZUFuZEFwcGx5U3R5bGUodGhpcy5lbCwnYmFja2dyb3VuZENvbG9yJyx0aGlzLmJnQ29sb3IpO1xuICB9XG5cbn1cbiJdfQ==