import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class ShadowHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['boxShadow'];
        this.backupValues = {};
    }
    onMouseEnter() {
        if (this.propValue) {
            this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
            let shdowToApply = this.helper.sanitizeShadowValue(this.propValue);
            this.helper.applyStyle(this.el, this.propertiesToSet[0], shdowToApply);
        }
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
ShadowHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.shadow]'
            },] }
];
ShadowHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
ShadowHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.shadow',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL3NoYWRvdy5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLOUQsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFKdkMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxvQkFBZSxHQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsaUJBQVksR0FBTyxFQUFFLENBQUM7SUFFNEMsQ0FBQztJQUduRSxZQUFZO1FBQ1YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0UsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdFLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O3dCQU9uQixLQUFLLFNBQUMsY0FBYzsyQkFNcEIsWUFBWSxTQUFDLFlBQVk7MkJBVXpCLFlBQVksU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaG92ZXIuc2hhZG93XSdcbn0pXG5leHBvcnQgY2xhc3MgU2hhZG93SG92ZXJEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgnaG92ZXIuc2hhZG93JykgcHJvcFZhbHVlID0gJyc7XG4gIHByb3BlcnRpZXNUb1NldDpzdHJpbmdbXSA9IFsnYm94U2hhZG93J107XG4gIGJhY2t1cFZhbHVlczphbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYscHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpe1xuICAgIGlmKHRoaXMucHJvcFZhbHVlKXtcbiAgICAgIHRoaXMuYmFja3VwVmFsdWVzID0gdGhpcy5oZWxwZXIuZ2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCk7XG4gICAgICBcbiAgICAgIGxldCBzaGRvd1RvQXBwbHkgPSB0aGlzLmhlbHBlci5zYW5pdGl6ZVNoYWRvd1ZhbHVlKHRoaXMucHJvcFZhbHVlKTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFswXSxzaGRvd1RvQXBwbHkpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlTGVhdmUoKXtcbiAgICB0aGlzLmhlbHBlci5zZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0LHRoaXMuYmFja3VwVmFsdWVzKTtcbiAgfVxuXG59XG4iXX0=