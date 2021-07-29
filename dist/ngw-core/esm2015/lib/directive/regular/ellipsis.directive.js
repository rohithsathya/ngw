import { Directive, ElementRef } from '@angular/core';
export class EllipsisDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.classList.add("ngw-ellipsis");
    }
}
EllipsisDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ellipsis]'
            },] }
];
EllipsisDirective.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9lbGxpcHNpcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JFLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDO0lBQ3RDLGVBQWU7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQVJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7O1lBSmtDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VsbGlwc2lzXSdcbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNEaXJlY3RpdmUgIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgfVxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5ndy1lbGxpcHNpc1wiKTtcbiAgfVxuXG59XG4iXX0=