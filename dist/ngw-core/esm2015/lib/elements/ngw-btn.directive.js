import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../services/helper.service';
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
NgwBtnDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngwBtn]'
            },] }
];
NgwBtnDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
NgwBtnDirective.propDecorators = {
    type: [{ type: Input, args: ['ngwBtn',] }],
    color: [{ type: Input, args: ['color',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd3LWJ0bi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2VsZW1lbnRzL25ndy1idG4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLM0QsTUFBTSxPQUFPLGVBQWU7SUFRMUIsWUFBb0IsRUFBYSxFQUFVLE1BQW9CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBTjlDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBS3VDLENBQUM7SUFFcEUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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QWlCLENBQUMsQ0FBQztZQUNqQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBRXZDO0lBRUgsQ0FBQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O21CQU9uQixLQUFLLFNBQUMsUUFBUTtvQkFDZCxLQUFLLFNBQUUsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nd0J0bl0nXG59KVxuZXhwb3J0IGNsYXNzIE5nd0J0bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCduZ3dCdG4nKSB0eXBlID0gJyc7XG4gIEBJbnB1dCAoJ2NvbG9yJykgY29sb3IgPSAnJztcblxuICB0aGVtZUNvbG9yOmFueTtcbiAgdGhlbWVDb2xvclRleHQ6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZiwgcHJpdmF0ZSBoZWxwZXI6SGVscGVyU2VydmljZSkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMudHlwZSB8fCBjaGFuZ2VzLmNvbG9yKXtcbiAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseSgpe1xuICAgIHRoaXMudGhlbWVDb2xvciA9IHRoaXMuaGVscGVyLnNhbml0aXplVGhlbWVDb2xvcih0aGlzLmNvbG9yKTtcbiAgICB0aGlzLnRoZW1lQ29sb3JUZXh0ID0gdGhpcy5oZWxwZXIuc2FuaXRpemVUaGVtZUNvbG9yKHRoaXMuY29sb3IpID09ICdkZWZhdWx0JyA/ICdkZWZhdWx0LWNvbnRyYXN0JyA6IHRoaXMuaGVscGVyLnNhbml0aXplVGhlbWVDb2xvcih0aGlzLmNvbG9yKTtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUgPyB0aGlzLnR5cGUudG9Mb3dlckNhc2UoKSA6ICdkZWZhdWx0JztcblxuICAgIGxldCBjbGFzc0xpc3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIGNsYXNzTGlzdC5hZGQoJ25ndy1idG4nKTtcblxuICAgIGxldCB0ZXh0Q29sb3JDbGFzcyA9IGBuZ3ctdGV4dC1jb2xvci0ke3RoaXMudGhlbWVDb2xvcn0tY29udHJhc3RgO1xuICAgIGxldCB0aGVtZVRleHRDb2xvckNsYXNzID0gYG5ndy10ZXh0LWNvbG9yLSR7dGhpcy50aGVtZUNvbG9yVGV4dH1gO1xuICAgIGxldCBiZ0NvbG9yQ2xhc3MgPSBgbmd3LWJnLWNvbG9yLSR7dGhpcy50aGVtZUNvbG9yfWA7XG4gICAgbGV0IGhvdmVyQmdDb2xvckNsYXNzID0gYG5ndy1iZy1ob3Zlci1jb2xvci0ke3RoaXMudGhlbWVDb2xvcn0tNDAwYDtcbiAgICBsZXQgYm9yZGVyQ29sb3JDbGFzcyA9IGBuZ3ctYm9yZGVyLWNvbG9yLSR7dGhpcy50aGVtZUNvbG9yfS02MDBgO1xuICAgIGxldCBob3ZlckJvcmRlckNvbG9yQ2xhc3MgPSBgbmd3LWJvcmRlci1ob3Zlci1jb2xvci0ke3RoaXMudGhlbWVDb2xvcn0tNjAwYDtcbiAgICBsZXQgaG92ZXJMaWdodEJnQ29sb3JDbGFzcyA9IGBuZ3ctYmctaG92ZXItY29sb3ItJHt0aGlzLnRoZW1lQ29sb3J9LTUwYDtcblxuICAgIGlmKHRoaXMudHlwZSA9PSAnb3V0bGluZScpe1xuICAgICAgY2xhc3NMaXN0LmFkZCgnbmd3LWJ0bi1vdXRsaW5lJyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctdGV4dC1idXR0b24nKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoYm9yZGVyQ29sb3JDbGFzcyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKHRoZW1lVGV4dENvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChob3ZlckxpZ2h0QmdDb2xvckNsYXNzKTtcblxuICAgIH1lbHNlIGlmKHRoaXMudHlwZSA9PSAnZmxhdCcpe1xuICAgICAgY2xhc3NMaXN0LmFkZCgnbmd3LWJ0bi1mbGF0Jyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctdGV4dC1idXR0b24nKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQodGV4dENvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChib3JkZXJDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoYmdDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoaG92ZXJCZ0NvbG9yQ2xhc3MpO1xuXG4gICAgfWVsc2UgaWYodGhpcy50eXBlID09ICdyYWlzZWQnKXtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy1idG4tcmFpc2VkJyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctdGV4dC1idXR0b24nKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQodGV4dENvbG9yQ2xhc3MpO1xuICAgICAgY2xhc3NMaXN0LmFkZChib3JkZXJDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoYmdDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoaG92ZXJCZ0NvbG9yQ2xhc3MpO1xuXG4gICAgfWVsc2UgaWYodGhpcy50eXBlID09ICdpY29uJyl7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctYnRuLWljb24nKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy10ZXh0LWJ1dHRvbicpO1xuICAgICAgY2xhc3NMaXN0LmFkZCh0aGVtZVRleHRDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoaG92ZXJCb3JkZXJDb2xvckNsYXNzKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoaG92ZXJMaWdodEJnQ29sb3JDbGFzcyk7XG5cbiAgICB9ZWxzZSBpZih0aGlzLnR5cGUgPT0gJ2xpbmsnKXtcbiAgICAgIGNsYXNzTGlzdC5hZGQoJ25ndy1idG4tbGluaycpO1xuICAgICAgY2xhc3NMaXN0LmFkZCgnbmd3LXRleHQtY29sb3ItcHJpbWFyeScpO1xuXG4gICAgfWVsc2V7XG4gICAgICBjbGFzc0xpc3QuYWRkKCduZ3ctdGV4dC1idXR0b24nKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQodGhlbWVUZXh0Q29sb3JDbGFzcyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKGhvdmVyTGlnaHRCZ0NvbG9yQ2xhc3MpO1xuXG4gICAgfVxuXG4gIH1cblxufVxuIl19