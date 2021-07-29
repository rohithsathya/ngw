import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class WidthHoverDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.propValue = '';
        this.propertiesToSet = ['width'];
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
WidthHoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[hover.width]'
            },] }
];
WidthHoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
WidthHoverDirective.propDecorators = {
    propValue: [{ type: Input, args: ['hover.width',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkdGguaG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvaG92ZXIvd2lkdGguaG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsWUFBb0IsRUFBYSxFQUFTLE1BQW9CO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBSnhDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckMsb0JBQWUsR0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLGlCQUFZLEdBQU8sRUFBRSxDQUFDO0lBRTRDLENBQUM7SUFHbkUsWUFBWTtRQUNWLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O3dCQU9uQixLQUFLLFNBQUMsYUFBYTsyQkFNbkIsWUFBWSxTQUFDLFlBQVk7MkJBUXpCLFlBQVksU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaG92ZXIud2lkdGhdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaWR0aEhvdmVyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ2hvdmVyLndpZHRoJykgcHJvcFZhbHVlID0gJyc7XG4gIHByb3BlcnRpZXNUb1NldDpzdHJpbmdbXSA9IFsnd2lkdGgnXTtcbiAgYmFja3VwVmFsdWVzOmFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCl7XG4gICAgaWYodGhpcy5wcm9wVmFsdWUpe1xuICAgICAgdGhpcy5iYWNrdXBWYWx1ZXMgPSB0aGlzLmhlbHBlci5nZXRTdHlsZU9iamVjdCh0aGlzLmVsLHRoaXMucHJvcGVydGllc1RvU2V0KTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCx0aGlzLnByb3BlcnRpZXNUb1NldFswXSx0aGlzLnByb3BWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpe1xuICAgIHRoaXMuaGVscGVyLnNldFN0eWxlT2JqZWN0KHRoaXMuZWwsdGhpcy5wcm9wZXJ0aWVzVG9TZXQsdGhpcy5iYWNrdXBWYWx1ZXMpO1xuICB9XG5cbn1cbiJdfQ==