import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/helper.service";
export class PaddingDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.padding = '';
        this.paddingTop = '';
        this.paddingLeft = '';
        this.paddingBottom = '';
        this.paddingRight = '';
        this.paddingX = '';
        this.paddingY = '';
    }
    ngOnChanges(changes) {
        if (changes.padding) {
            this.helper.applyStyle(this.el, 'padding', this.padding);
        }
        if (changes.paddingTop) {
            this.helper.applyStyle(this.el, 'paddingTop', this.paddingTop);
        }
        if (changes.paddingLeft) {
            this.helper.applyStyle(this.el, 'paddingLeft', this.paddingLeft);
        }
        if (changes.paddingBottom) {
            this.helper.applyStyle(this.el, 'paddingBottom', this.paddingBottom);
        }
        if (changes.paddingRight) {
            this.helper.applyStyle(this.el, 'paddingRight', this.paddingRight);
        }
        if (changes.paddingX) {
            this.helper.applyStyle(this.el, 'paddingLeft', this.paddingX);
            this.helper.applyStyle(this.el, 'paddingRight', this.paddingX);
        }
        if (changes.paddingY) {
            this.helper.applyStyle(this.el, 'paddingTop', this.paddingY);
            this.helper.applyStyle(this.el, 'paddingBottom', this.paddingY);
        }
    }
}
PaddingDirective.ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
PaddingDirective.ɵdir = i0.ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "padding", ""], ["", "padding.top", ""], ["", "padding.left", ""], ["", "padding.bottom", ""], ["", "padding.right", ""], ["", "padding.x", ""], ["", "padding.y", ""]], inputs: { padding: "padding", paddingTop: ["padding.top", "paddingTop"], paddingLeft: ["padding.left", "paddingLeft"], paddingBottom: ["padding.bottom", "paddingBottom"], paddingRight: ["padding.right", "paddingRight"], paddingX: ["padding.x", "paddingX"], paddingY: ["padding.y", "paddingY"] }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[padding],[padding.top],[padding.left],[padding.bottom],[padding.right],[padding.x],[padding.y]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { padding: [{
            type: Input,
            args: ['padding']
        }], paddingTop: [{
            type: Input,
            args: ['padding.top']
        }], paddingLeft: [{
            type: Input,
            args: ['padding.left']
        }], paddingBottom: [{
            type: Input,
            args: ['padding.bottom']
        }], paddingRight: [{
            type: Input,
            args: ['padding.right']
        }], paddingX: [{
            type: Input,
            args: ['padding.x']
        }], paddingY: [{
            type: Input,
            args: ['padding.y']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2RpcmVjdGl2ZS9yZWd1bGFyL3BhZGRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7QUFNeEUsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFSckMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFFMkIsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBVztRQUVyQixJQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBRyxPQUFPLENBQUMsVUFBVSxFQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUcsT0FBTyxDQUFDLFdBQVcsRUFBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBRyxPQUFPLENBQUMsWUFBWSxFQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUcsT0FBTyxDQUFDLFFBQVEsRUFBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0Q7SUFFSCxDQUFDOztnRkExQ1UsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUg1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlHQUFpRzthQUM1Rzt5RkFHMEIsT0FBTztrQkFBL0IsS0FBSzttQkFBQyxTQUFTO1lBQ1MsVUFBVTtrQkFBbEMsS0FBSzttQkFBQyxhQUFhO1lBQ0ssV0FBVztrQkFBbkMsS0FBSzttQkFBQyxjQUFjO1lBQ0ksYUFBYTtrQkFBckMsS0FBSzttQkFBQyxnQkFBZ0I7WUFDRSxZQUFZO2tCQUFwQyxLQUFLO21CQUFDLGVBQWU7WUFDRyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFdBQVc7WUFDTyxRQUFRO2tCQUFoQyxLQUFLO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twYWRkaW5nXSxbcGFkZGluZy50b3BdLFtwYWRkaW5nLmxlZnRdLFtwYWRkaW5nLmJvdHRvbV0sW3BhZGRpbmcucmlnaHRdLFtwYWRkaW5nLnhdLFtwYWRkaW5nLnldJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWRkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ3BhZGRpbmcnKSAgICAgICAgcGFkZGluZyA9ICcnO1xuICBASW5wdXQoJ3BhZGRpbmcudG9wJykgICAgcGFkZGluZ1RvcCA9ICcnO1xuICBASW5wdXQoJ3BhZGRpbmcubGVmdCcpICAgcGFkZGluZ0xlZnQgPSAnJztcbiAgQElucHV0KCdwYWRkaW5nLmJvdHRvbScpIHBhZGRpbmdCb3R0b20gPSAnJztcbiAgQElucHV0KCdwYWRkaW5nLnJpZ2h0JykgIHBhZGRpbmdSaWdodCA9ICcnO1xuICBASW5wdXQoJ3BhZGRpbmcueCcpICAgICAgcGFkZGluZ1ggPSAnJztcbiAgQElucHV0KCdwYWRkaW5nLnknKSAgICAgIHBhZGRpbmdZID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcblxuICAgIGlmKGNoYW5nZXMucGFkZGluZyl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3BhZGRpbmcnLHRoaXMucGFkZGluZyk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5wYWRkaW5nVG9wKXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwncGFkZGluZ1RvcCcsdGhpcy5wYWRkaW5nVG9wKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnBhZGRpbmdMZWZ0KXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwncGFkZGluZ0xlZnQnLHRoaXMucGFkZGluZ0xlZnQpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMucGFkZGluZ0JvdHRvbSl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3BhZGRpbmdCb3R0b20nLHRoaXMucGFkZGluZ0JvdHRvbSk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5wYWRkaW5nUmlnaHQpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdwYWRkaW5nUmlnaHQnLHRoaXMucGFkZGluZ1JpZ2h0KTtcbiAgICB9XG4gICAgaWYoY2hhbmdlcy5wYWRkaW5nWCl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3BhZGRpbmdMZWZ0Jyx0aGlzLnBhZGRpbmdYKTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwncGFkZGluZ1JpZ2h0Jyx0aGlzLnBhZGRpbmdYKTtcbiAgICB9XG4gICAgaWYoY2hhbmdlcy5wYWRkaW5nWSl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3BhZGRpbmdUb3AnLHRoaXMucGFkZGluZ1kpO1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdwYWRkaW5nQm90dG9tJyx0aGlzLnBhZGRpbmdZKTtcbiAgICB9XG5cbiAgfVxufVxuIl19