import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class EllipsisDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.classList.add("ngw-ellipsis");
    }
}
EllipsisDirective.ɵfac = function EllipsisDirective_Factory(t) { return new (t || EllipsisDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
EllipsisDirective.ɵdir = i0.ɵɵdefineDirective({ type: EllipsisDirective, selectors: [["", "ellipsis", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EllipsisDirective, [{
        type: Directive,
        args: [{
                selector: '[ellipsis]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9lbGxpcHNpcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7O0FBS3JFLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDO0lBQ3RDLGVBQWU7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2tGQUxVLGlCQUFpQjtzREFBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlbGxpcHNpc10nXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzRGlyZWN0aXZlICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmKSB7IH1cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuZ3ctZWxsaXBzaXNcIik7XG4gIH1cblxufVxuIl19