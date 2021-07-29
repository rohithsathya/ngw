import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class ShadowDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.shadow = '';
    }
    ngOnChanges(changes) {
        if (changes.shadow) {
            let shdowToApply = this.helper.sanitizeShadowValue(this.shadow);
            this.helper.applyStyle(this.el, 'boxShadow', shdowToApply);
        }
    }
}
ShadowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[shadow]'
            },] }
];
ShadowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
ShadowDirective.propDecorators = {
    shadow: [{ type: Input, args: ['shadow',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLEVBQWEsRUFBVSxNQUFvQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUY5QyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBRXNDLENBQUM7SUFFcEUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ2pCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pEO0lBRUgsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7WUFMbUIsVUFBVTtZQUNyQixhQUFhOzs7cUJBTW5CLEtBQUssU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2hhZG93XSdcbn0pXG5leHBvcnQgY2xhc3MgU2hhZG93RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdzaGFkb3cnKSBzaGFkb3cgPSAnJztcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZiwgcHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG4gIFxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5zaGFkb3cpe1xuICAgICBsZXQgc2hkb3dUb0FwcGx5ID0gdGhpcy5oZWxwZXIuc2FuaXRpemVTaGFkb3dWYWx1ZSh0aGlzLnNoYWRvdyk7XG4gICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYm94U2hhZG93JyxzaGRvd1RvQXBwbHkpO1xuICAgIH1cbiAgIFxuICB9XG5cbn1cbiJdfQ==