import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class RadiusHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.hoverRadius = '';
        this.hoverRadiusTopLeft = '';
        this.hoverRadiusTopRight = '';
        this.hoverRadiusBottomLeft = '';
        this.hoverRadiusBottomRight = '';
        this.propertiesToSet = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'];
        this.backupValues = {};
    }
    onMouseEnter() {
        this.backupValues = this.helper.getStyleObject(this.el, this.propertiesToSet);
        this.hoverRadius ? this.helper.applyStyle(this.el, this.propertiesToSet[0], this.hoverRadius) : '';
        this.hoverRadiusTopLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[1], this.hoverRadiusTopLeft) : '';
        this.hoverRadiusTopRight ? this.helper.applyStyle(this.el, this.propertiesToSet[2], this.hoverRadiusTopRight) : '';
        this.hoverRadiusBottomLeft ? this.helper.applyStyle(this.el, this.propertiesToSet[3], this.hoverRadiusBottomLeft) : '';
        this.hoverRadiusBottomRight ? this.helper.applyStyle(this.el, this.propertiesToSet[4], this.hoverRadiusBottomRight) : '';
    }
    onMouseLeave() {
        this.helper.setStyleObject(this.el, this.propertiesToSet, this.backupValues);
    }
}
RadiusHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.radius],[hover.radius.topLeft],[hover.radius.topRight],[hover.radius.bottomLeft],[hover.radius.bottomRight]'
            },] }
];
RadiusHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
RadiusHoverDirective.propDecorators = {
    hoverRadius: [{ type: Input, args: ['hover.radius',] }],
    hoverRadiusTopLeft: [{ type: Input, args: ['hover.radius.topLeft',] }],
    hoverRadiusTopRight: [{ type: Input, args: ['hover.radius.topRight',] }],
    hoverRadiusBottomLeft: [{ type: Input, args: ['hover.radius.bottomLeft',] }],
    hoverRadiusBottomRight: [{ type: Input, args: ['hover.radius.bottomRight',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaXVzLmhvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL2hvdmVyL3JhZGl1cy5ob3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLOUQsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFUdkMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDVCx1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDdkIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMxQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFFL0Qsb0JBQWUsR0FBWSxDQUFDLGNBQWMsRUFBQyxxQkFBcUIsRUFBQyxzQkFBc0IsRUFBQyx3QkFBd0IsRUFBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzVJLGlCQUFZLEdBQU8sRUFBRSxDQUFDO0lBRTRDLENBQUM7SUFHbkUsWUFBWTtRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2pHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqSCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JILElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFekgsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdFLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9IQUFvSDthQUMvSDs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7OzBCQU9uQixLQUFLLFNBQUMsY0FBYztpQ0FDcEIsS0FBSyxTQUFDLHNCQUFzQjtrQ0FDNUIsS0FBSyxTQUFDLHVCQUF1QjtvQ0FDN0IsS0FBSyxTQUFDLHlCQUF5QjtxQ0FDL0IsS0FBSyxTQUFDLDBCQUEwQjsyQkFPaEMsWUFBWSxTQUFDLFlBQVk7MkJBWXpCLFlBQVksU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaG92ZXIucmFkaXVzXSxbaG92ZXIucmFkaXVzLnRvcExlZnRdLFtob3Zlci5yYWRpdXMudG9wUmlnaHRdLFtob3Zlci5yYWRpdXMuYm90dG9tTGVmdF0sW2hvdmVyLnJhZGl1cy5ib3R0b21SaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIFJhZGl1c0hvdmVyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ2hvdmVyLnJhZGl1cycpIGhvdmVyUmFkaXVzID0gJyc7XG4gIEBJbnB1dCgnaG92ZXIucmFkaXVzLnRvcExlZnQnKSBob3ZlclJhZGl1c1RvcExlZnQgPSAnJztcbiAgQElucHV0KCdob3Zlci5yYWRpdXMudG9wUmlnaHQnKSBob3ZlclJhZGl1c1RvcFJpZ2h0ID0gJyc7XG4gIEBJbnB1dCgnaG92ZXIucmFkaXVzLmJvdHRvbUxlZnQnKSBob3ZlclJhZGl1c0JvdHRvbUxlZnQgPSAnJztcbiAgQElucHV0KCdob3Zlci5yYWRpdXMuYm90dG9tUmlnaHQnKSBob3ZlclJhZGl1c0JvdHRvbVJpZ2h0ID0gJyc7XG5cbiAgcHJvcGVydGllc1RvU2V0OnN0cmluZ1tdID0gWydib3JkZXJSYWRpdXMnLCdib3JkZXJUb3BMZWZ0UmFkaXVzJywnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLCdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJywnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCl7XG4gICAgdGhpcy5iYWNrdXBWYWx1ZXMgPSB0aGlzLmhlbHBlci5nZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0KTtcblxuICAgIHRoaXMuaG92ZXJSYWRpdXMgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbMF0sdGhpcy5ob3ZlclJhZGl1cykgOiAnJztcbiAgICB0aGlzLmhvdmVyUmFkaXVzVG9wTGVmdCA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFsxXSx0aGlzLmhvdmVyUmFkaXVzVG9wTGVmdCkgOiAnJztcbiAgICB0aGlzLmhvdmVyUmFkaXVzVG9wUmlnaHQgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXRbMl0sdGhpcy5ob3ZlclJhZGl1c1RvcFJpZ2h0KSA6ICcnO1xuICAgIHRoaXMuaG92ZXJSYWRpdXNCb3R0b21MZWZ0ID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0WzNdLHRoaXMuaG92ZXJSYWRpdXNCb3R0b21MZWZ0KSA6ICcnO1xuICAgIHRoaXMuaG92ZXJSYWRpdXNCb3R0b21SaWdodCA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFs0XSx0aGlzLmhvdmVyUmFkaXVzQm90dG9tUmlnaHQpIDogJyc7XG4gICAgXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCl7XG4gICAgdGhpcy5oZWxwZXIuc2V0U3R5bGVPYmplY3QodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldCx0aGlzLmJhY2t1cFZhbHVlcyk7XG4gIH1cblxufVxuIl19