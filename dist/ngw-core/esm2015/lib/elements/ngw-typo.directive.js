import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/helper.service";
export class NgwTypoDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.type = ''; //headline,title,subheading-2,subheading-1,caption
    }
    ngOnChanges(changes) {
        if (changes.type || changes.muted) {
            this.apply();
        }
    }
    apply() {
        let isMuted = this.muted !== undefined && this.muted.toString().toLowerCase() == 'true' ? true : false;
        if (isMuted) {
            this.el.nativeElement.classList.add(`ngw-text-muted`);
        }
        else {
            this.el.nativeElement.classList.remove(`ngw-text-muted`);
        }
        this.el.nativeElement.classList.add(`ngw-text-${this.type.toLowerCase()}`);
    }
}
NgwTypoDirective.ɵfac = function NgwTypoDirective_Factory(t) { return new (t || NgwTypoDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
NgwTypoDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgwTypoDirective, selectors: [["", "ngwTypo", ""]], inputs: { type: ["ngwTypo", "type"], muted: "muted" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwTypoDirective, [{
        type: Directive,
        args: [{
                selector: '[ngwTypo]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { type: [{
            type: Input,
            args: ['ngwTypo']
        }], muted: [{
            type: Input,
            args: ['muted']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LXR5cG8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9lbGVtZW50cy9uZ3ctdHlwby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQU14RSxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUg1QyxTQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsa0RBQWtEO0lBR2IsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBQztZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3ZHLElBQUcsT0FBTyxFQUFDO1lBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3ZEO2FBQUk7WUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0ZBdEJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FINUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3RCO3lGQUdtQixJQUFJO2tCQUFyQixLQUFLO21CQUFDLFNBQVM7WUFDQSxLQUFLO2tCQUFwQixLQUFLO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3dUeXBvXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd3VHlwb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCduZ3dUeXBvJykgdHlwZSA9ICcnOyAvL2hlYWRsaW5lLHRpdGxlLHN1YmhlYWRpbmctMixzdWJoZWFkaW5nLTEsY2FwdGlvblxuICBASW5wdXQoJ211dGVkJykgbXV0ZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpe1xuICAgIGlmKGNoYW5nZXMudHlwZSB8fCBjaGFuZ2VzLm11dGVkKXtcbiAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseSgpe1xuICAgIGxldCBpc011dGVkID0gdGhpcy5tdXRlZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMubXV0ZWQudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgICBpZihpc011dGVkKXtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBuZ3ctdGV4dC1tdXRlZGApO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYG5ndy10ZXh0LW11dGVkYCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5ndy10ZXh0LSR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxufVxuIl19