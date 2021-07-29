import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class RadiusDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.radius = '';
        this.radiusTopLeft = '';
        this.radiusTopRight = '';
        this.radiusBottomLeft = '';
        this.radiusBottomRight = '';
    }
    ngOnChanges(changes) {
        changes.radius ? this.helper.applyStyle(this.el, 'borderRadius', this.radius) : '';
        changes.radiusTopLeft ? this.helper.applyStyle(this.el, 'borderTopLeftRadius', this.radiusTopLeft) : '';
        changes.radiusTopRight ? this.helper.applyStyle(this.el, 'borderTopRightRadius', this.radiusTopRight) : '';
        changes.radiusBottomLeft ? this.helper.applyStyle(this.el, 'borderBottomLeftRadius', this.radiusBottomLeft) : '';
        changes.radiusBottomRight ? this.helper.applyStyle(this.el, 'borderBottomRightRadius', this.radiusBottomRight) : '';
    }
}
RadiusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[radius],[radius.topLeft],[radius.topRadius],[radius.bottomLeft],[radius.bottomRight]'
            },] }
];
RadiusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
RadiusDirective.propDecorators = {
    radius: [{ type: Input, args: ['radius',] }],
    radiusTopLeft: [{ type: Input, args: ['radius.topLeft',] }],
    radiusTopRight: [{ type: Input, args: ['radius.topRight',] }],
    radiusBottomLeft: [{ type: Input, args: ['radius.bottomLeft',] }],
    radiusBottomRight: [{ type: Input, args: ['radius.bottomRight',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaXVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvcmFkaXVzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVA3QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ0osa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUdjLENBQUM7SUFFbkUsV0FBVyxDQUFDLE9BQVc7UUFFckIsT0FBTyxDQUFDLE1BQU0sQ0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUYsT0FBTyxDQUFDLGFBQWEsQ0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxxQkFBcUIsRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxRyxPQUFPLENBQUMsY0FBYyxDQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLHNCQUFzQixFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyx3QkFBd0IsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hILE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyx5QkFBeUIsRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBR3BILENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVGQUF1RjthQUNsRzs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O3FCQU1uQixLQUFLLFNBQUMsUUFBUTs0QkFDZCxLQUFLLFNBQUMsZ0JBQWdCOzZCQUN0QixLQUFLLFNBQUMsaUJBQWlCOytCQUN2QixLQUFLLFNBQUMsbUJBQW1CO2dDQUN6QixLQUFLLFNBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmFkaXVzXSxbcmFkaXVzLnRvcExlZnRdLFtyYWRpdXMudG9wUmFkaXVzXSxbcmFkaXVzLmJvdHRvbUxlZnRdLFtyYWRpdXMuYm90dG9tUmlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSYWRpdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoJ3JhZGl1cycpIHJhZGl1cyA9ICcnO1xuICBASW5wdXQoJ3JhZGl1cy50b3BMZWZ0JykgcmFkaXVzVG9wTGVmdCA9ICcnO1xuICBASW5wdXQoJ3JhZGl1cy50b3BSaWdodCcpIHJhZGl1c1RvcFJpZ2h0ID0gJyc7XG4gIEBJbnB1dCgncmFkaXVzLmJvdHRvbUxlZnQnKSByYWRpdXNCb3R0b21MZWZ0ID0gJyc7XG4gIEBJbnB1dCgncmFkaXVzLmJvdHRvbVJpZ2h0JykgcmFkaXVzQm90dG9tUmlnaHQgPSAnJztcbiAgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuICBcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuXG4gICAgY2hhbmdlcy5yYWRpdXMgICAgICAgICAgICA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYm9yZGVyUmFkaXVzJyx0aGlzLnJhZGl1cykgOiAnJztcbiAgICBjaGFuZ2VzLnJhZGl1c1RvcExlZnQgICAgID8gdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdib3JkZXJUb3BMZWZ0UmFkaXVzJyx0aGlzLnJhZGl1c1RvcExlZnQpIDogJyc7XG4gICAgY2hhbmdlcy5yYWRpdXNUb3BSaWdodCAgICA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLHRoaXMucmFkaXVzVG9wUmlnaHQpIDogJyc7XG4gICAgY2hhbmdlcy5yYWRpdXNCb3R0b21MZWZ0ICA/IHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsdGhpcy5yYWRpdXNCb3R0b21MZWZ0KSA6ICcnO1xuICAgIGNoYW5nZXMucmFkaXVzQm90dG9tUmlnaHQgPyB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyx0aGlzLnJhZGl1c0JvdHRvbVJpZ2h0KSA6ICcnO1xuXG5cbiAgfVxuXG5cbn1cbiJdfQ==