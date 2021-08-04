import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/helper.service";
export class NgwBtnDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.type = '';
        this.color = '';
    }
    ngOnChanges(changes) {
        if (changes.type || changes.color) {
            this.apply();
        }
    }
    apply() {
        this.themeColor = this.helper.sanitizeThemeColor(this.color);
        this.themeColorText = this.helper.sanitizeThemeColor(this.color) == 'default' ? 'default-contrast' : this.helper.sanitizeThemeColor(this.color);
        this.type = this.type ? this.type.toLowerCase() : 'default';
        let classList = this.el.nativeElement.classList;
        classList.add('ngw-btn');
        let textColorClass = `ngw-text-color-${this.themeColor}-contrast`;
        let themeTextColorClass = `ngw-text-color-${this.themeColorText}`;
        let bgColorClass = `ngw-bg-color-${this.themeColor}`;
        let hoverBgColorClass = `ngw-bg-hover-color-${this.themeColor}-400`;
        let borderColorClass = `ngw-border-color-${this.themeColor}-600`;
        let hoverBorderColorClass = `ngw-border-hover-color-${this.themeColor}-600`;
        let hoverLightBgColorClass = `ngw-bg-hover-color-${this.themeColor}-50`;
        if (this.type == 'outline') {
            classList.add('ngw-btn-outline');
            classList.add('ngw-text-button');
            classList.add(borderColorClass);
            classList.add(themeTextColorClass);
            classList.add(hoverLightBgColorClass);
        }
        else if (this.type == 'flat') {
            classList.add('ngw-btn-flat');
            classList.add('ngw-text-button');
            classList.add(textColorClass);
            classList.add(borderColorClass);
            classList.add(bgColorClass);
            classList.add(hoverBgColorClass);
        }
        else if (this.type == 'raised') {
            classList.add('ngw-btn-raised');
            classList.add('ngw-text-button');
            classList.add(textColorClass);
            classList.add(borderColorClass);
            classList.add(bgColorClass);
            classList.add(hoverBgColorClass);
        }
        else if (this.type == 'icon') {
            classList.add('ngw-btn-icon');
            classList.add('ngw-text-button');
            classList.add(themeTextColorClass);
            classList.add(hoverBorderColorClass);
            classList.add(hoverLightBgColorClass);
        }
        else if (this.type == 'link') {
            classList.add('ngw-btn-link');
            classList.add('ngw-text-color-primary');
        }
        else {
            classList.add('ngw-text-button');
            classList.add(themeTextColorClass);
            classList.add(hoverLightBgColorClass);
        }
    }
}
NgwBtnDirective.ɵfac = function NgwBtnDirective_Factory(t) { return new (t || NgwBtnDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
NgwBtnDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgwBtnDirective, selectors: [["", "ngwBtn", ""]], inputs: { type: ["ngwBtn", "type"], color: "color" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgwBtnDirective, [{
        type: Directive,
        args: [{
                selector: '[ngwBtn]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { type: [{
            type: Input,
            args: ['ngwBtn']
        }], color: [{
            type: Input,
            args: ['color']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LWJ0bi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2VsZW1lbnRzL25ndy1idG4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLGVBQWU7SUFRMUIsWUFBb0IsRUFBYSxFQUFVLE1BQW9CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBTjlDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBS3VDLENBQUM7SUFFcEUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUU1RCxJQUFJLFNBQVMs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LENBQUM7WUFDbkMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBRXZDO0lBRUgsQ0FBQzs7OEVBekVVLGVBQWU7b0RBQWYsZUFBZTt1RkFBZixlQUFlO2NBSDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjt5RkFHa0IsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBQ0UsS0FBSztrQkFBckIsS0FBSzttQkFBRSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd3QnRuXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd3QnRuRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ25nd0J0bicpIHR5cGUgPSAnJztcbiAgQElucHV0ICgnY29sb3InKSBjb2xvciA9ICcnO1xuXG4gIHRoZW1lQ29sb3I6YW55O1xuICB0aGVtZUNvbG9yVGV4dDphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLCBwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy50eXBlIHx8IGNoYW5nZXMuY29sb3Ipe1xuICAgICAgdGhpcy5hcHBseSgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5KCl7XG4gICAgdGhpcy50aGVtZUNvbG9yID0gdGhpcy5oZWxwZXIuc2FuaXRpemVUaGVtZUNvbG9yKHRoaXMuY29sb3IpO1xuICAgIHRoaXMudGhlbWVDb2xvclRleHQgPSB0aGlzLmhlbHBlci5zYW5pdGl6ZVRoZW1lQ29sb3IodGhpcy5jb2xvcikgPT0gJ2RlZmF1bHQnID8gJ2RlZmF1bHQtY29udHJhc3QnIDogdGhpcy5oZWxwZXIuc2FuaXRpemVUaGVtZUNvbG9yKHRoaXMuY29sb3IpO1xuICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZSA/IHRoaXMudHlwZS50b0xvd2VyQ2FzZSgpIDogJ2RlZmF1bHQnO1xuXG4gICAgbGV0IGNsYXNzTGlzdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY2xhc3NMaXN0LmFkZCgnbmd3LWJ0bicpO1xuXG4gICAgbGV0IHRleHRDb2xvckNsYXNzID0gYG5ndy10ZXh0LWNvbG9yLSR7dGhpcy50aGVtZUNvbG9yfS1jb250cmFzdGA7XG4gICAgbGV0IHRoZW1lVGV4dENvbG9yQ2xhc3MgPSBgbmd3LXRleHQtY29sb3ItJHt0aGlzLnRoZW1lQ29sb3JUZXh0fWA7XG4gICAgbGV0IGJnQ29sb3JDbGFzcyA9IGBuZ3ctYmctY29sb3ItJHt0aGlzLnRoZW1lQ29sb3J9YDtcbiAgICBsZXQgaG92ZXJCZ0NvbG9yQ2xhc3MgPSBgbmd3LWJnLWhvdmVyLWNvbG9yLSR7dGhpcy50aGVtZUNvbG9yfS00MDBgO1xuICAgIGxldCBib3JkZXJDb2xvckNsYXNzID0gYG5ndy1ib3JkZXItY29sb3ItJHt0aGlzLnRoZW1lQ29sb3J9LTYwMGA7XG4gICAgbGV0IGhvdmVyQm9yZGVyQ29sb3JDbGFzcyA9IGBuZ3ctYm9yZGVyLWhvdmVyLWNvbG9yLSR7dGhpcy50aGVtZUNvbG9yfS02MDBgO1xuICAgIGxldCBob3ZlckxpZ2h0QmdDb2xvckNsYXNzID0gYG5ndy1iZy1ob3Zlci1jb2xvci0ke3RoaXMudGhlbWVDb2xvcn0tNTBgO1xuXG4gICAgaWYodGhpcy50eXBlID09ICdvdXRsaW5lJyl7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctYnRuLW91dGxpbmUnKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy10ZXh0LWJ1dHRvbicpO1xuICAgICAgY2xhc3NMaXN0LmFkZChib3JkZXJDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQodGhlbWVUZXh0Q29sb3JDbGFzcyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKGhvdmVyTGlnaHRCZ0NvbG9yQ2xhc3MpO1xuXG4gICAgfWVsc2UgaWYodGhpcy50eXBlID09ICdmbGF0Jyl7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctYnRuLWZsYXQnKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy10ZXh0LWJ1dHRvbicpO1xuICAgICAgY2xhc3NMaXN0LmFkZCh0ZXh0Q29sb3JDbGFzcyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKGJvcmRlckNvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChiZ0NvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChob3ZlckJnQ29sb3JDbGFzcyk7XG5cbiAgICB9ZWxzZSBpZih0aGlzLnR5cGUgPT0gJ3JhaXNlZCcpe1xuICAgICAgY2xhc3NMaXN0LmFkZCgnbmd3LWJ0bi1yYWlzZWQnKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy10ZXh0LWJ1dHRvbicpO1xuICAgICAgY2xhc3NMaXN0LmFkZCh0ZXh0Q29sb3JDbGFzcyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKGJvcmRlckNvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChiZ0NvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChob3ZlckJnQ29sb3JDbGFzcyk7XG5cbiAgICB9ZWxzZSBpZih0aGlzLnR5cGUgPT0gJ2ljb24nKXtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy1idG4taWNvbicpO1xuICAgICAgY2xhc3NMaXN0LmFkZCgnbmd3LXRleHQtYnV0dG9uJyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKHRoZW1lVGV4dENvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChob3ZlckJvcmRlckNvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChob3ZlckxpZ2h0QmdDb2xvckNsYXNzKTtcblxuICAgIH1lbHNlIGlmKHRoaXMudHlwZSA9PSAnbGluaycpe1xuICAgICAgY2xhc3NMaXN0LmFkZCgnbmd3LWJ0bi1saW5rJyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctdGV4dC1jb2xvci1wcmltYXJ5Jyk7XG5cbiAgICB9ZWxzZXtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy10ZXh0LWJ1dHRvbicpO1xuICAgICAgY2xhc3NMaXN0LmFkZCh0aGVtZVRleHRDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoaG92ZXJMaWdodEJnQ29sb3JDbGFzcyk7XG5cbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=