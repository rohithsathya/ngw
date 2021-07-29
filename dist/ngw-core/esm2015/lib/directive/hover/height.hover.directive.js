import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class HeightHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['height'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], this.propValue);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
HeightHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.height]'
            },] }
];
HeightHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
HeightHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.height',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVpZ2h0LmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL2hlaWdodC5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLOUQsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFKdkMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxvQkFBZSxHQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsaUJBQVksR0FBTyxFQUFFLENBQUM7SUFFNEMsQ0FBQztJQUduRSxZQUFZO1FBQ1YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7OztZQUxtQixVQUFVO1lBQ3JCLGFBQWE7Ozt3QkFPbkIsS0FBSyxTQUFDLGNBQWM7MkJBTXBCLFlBQVksU0FBQyxZQUFZOzJCQVF6QixZQUFZLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hvdmVyLmhlaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIEhlaWdodEhvdmVyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ2hvdmVyLmhlaWdodCcpIHByb3BWYWx1ZSA9ICcnO1xuICBwcm9wZXJ0aWVzVG9TZXQ6c3RyaW5nW10gPSBbJ2hlaWdodCddO1xuICBiYWNrdXBWYWx1ZXM6YW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlRW50ZXIoKXtcbiAgICBpZih0aGlzLnByb3BWYWx1ZSl7XG4gICAgICB0aGlzLmJhY2t1cFZhbHVlcyA9IHRoaXMuaGVscGVyLmdldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQpO1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzBdLHRoaXMucHJvcFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCl7XG4gICAgdGhpcy5oZWxwZXIuc2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCx0aGlzLmJhY2t1cFZhbHVlcyk7XG4gIH1cblxufVxuIl19