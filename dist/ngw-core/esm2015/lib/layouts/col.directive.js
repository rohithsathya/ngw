import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/helper.service";
export class ColDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.col = ''; //0-100%, fill
        this.colLg = '';
        this.colMd = '';
        this.colSm = '';
    }
    ngOnInit() {
        this.helper.applyStyle(this.el, 'overflow', 'auto');
        this.helper.applyStyle(this.el, 'boxSizing', 'border-box');
        //@ts-ignore
        this.observer = new ResizeObserver((entries) => {
            let width = entries[0].contentRect.width;
            this.apply(width);
        });
        //attach resize observer to body element
        let bodyEle = document.getElementsByTagName('body') ? document.getElementsByTagName('body')[0] : null;
        if (bodyEle && this.observer) {
            this.observer.observe(bodyEle);
        }
    }
    ngOnChanges(changes) {
        if (changes.col || changes.colLg || changes.colMd || changes.colSm) {
            window ? this.apply(window.innerWidth) : null;
        }
    }
    ngOnDestroy() {
        var _a;
        try {
            (_a = this.observer) === null || _a === void 0 ? void 0 : _a.unObserve(this.el.nativeElement);
        }
        catch (e) { }
    }
    apply(width) {
        let styleToApply = '';
        if (width <= 600 && this.colSm) {
            styleToApply = this.colSm ? this.colSm : this.colMd ? this.colMd : this.colLg ? this.colLg : this.col;
        }
        else if (width <= 959 && this.colSm) {
            styleToApply = this.colMd ? this.colMd : this.colLg ? this.colLg : this.col;
        }
        else {
            styleToApply = this.colLg ? this.colLg : this.col;
        }
        if (styleToApply) {
            if (styleToApply.toLocaleLowerCase() == 'fill') {
                this.helper.applyStyle(this.el, 'flex', '1 1 0');
            }
            else if (styleToApply.includes('%')) {
                this.helper.applyStyle(this.el, 'flex', `0 0 ${styleToApply}`);
            }
            else {
                console.warn("Invalid col val, should be b/w 0 amd 100% (with %) or fill");
                this.helper.applyStyle(this.el, 'flex', `0 0 auto`);
            }
        }
        else {
            this.helper.applyStyle(this.el, 'flex', `0 0 auto`);
        }
    }
}
ColDirective.ɵfac = function ColDirective_Factory(t) { return new (t || ColDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
ColDirective.ɵdir = i0.ɵɵdefineDirective({ type: ColDirective, selectors: [["", "col", ""], ["", "col.lg", ""], ["", "col.md", ""], ["", "col.sm", ""]], inputs: { col: "col", colLg: ["col.lg", "colLg"], colMd: ["col.md", "colMd"], colSm: ["col.sm", "colSm"] }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColDirective, [{
        type: Directive,
        args: [{
                selector: '[col],[col.lg],[col.md],[col.sm]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { col: [{
            type: Input,
            args: ['col']
        }], colLg: [{
            type: Input,
            args: ['col.lg']
        }], colMd: [{
            type: Input,
            args: ['col.md']
        }], colSm: [{
            type: Input,
            args: ['col.sm']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvbGF5b3V0cy9jb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNGLE1BQU0sT0FBTyxZQUFZO0lBU3ZCLFlBQW9CLEVBQWEsRUFBVSxNQUFvQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVBqRCxRQUFHLEdBQUMsRUFBRSxDQUFDLENBQUMsY0FBYztRQUNuQixVQUFLLEdBQUMsRUFBRSxDQUFDO1FBQ1QsVUFBSyxHQUFDLEVBQUUsQ0FBQztRQUNULFVBQUssR0FBQyxFQUFFLENBQUM7SUFJeUMsQ0FBQztJQUVwRSxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFFekQsWUFBWTtRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRTtZQUM1QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsd0NBQXdDO1FBQ3hDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFv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QUs7bUJBQUMsS0FBSztZQUNLLEtBQUs7a0JBQXJCLEtBQUs7bUJBQUMsUUFBUTtZQUNFLEtBQUs7a0JBQXJCLEtBQUs7bUJBQUMsUUFBUTtZQUNFLEtBQUs7a0JBQXJCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb2xdLFtjb2wubGddLFtjb2wubWRdLFtjb2wuc21dJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsT25EZXN0cm95LE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCdjb2wnKSBjb2w9Jyc7IC8vMC0xMDAlLCBmaWxsXG4gIEBJbnB1dCgnY29sLmxnJykgY29sTGc9Jyc7XG4gIEBJbnB1dCgnY29sLm1kJykgY29sTWQ9Jyc7XG4gIEBJbnB1dCgnY29sLnNtJykgY29sU209Jyc7XG5cbiAgb2JzZXJ2ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLCBwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnb3ZlcmZsb3cnLCdhdXRvJyk7XG4gICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdib3hTaXppbmcnLCdib3JkZXItYm94Jyk7XG5cbiAgICAvL0B0cy1pZ25vcmVcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgbGV0IHdpZHRoID0gZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aDtcbiAgICAgIHRoaXMuYXBwbHkod2lkdGgpO1xuICAgIH0pO1xuXG4gICAgLy9hdHRhY2ggcmVzaXplIG9ic2VydmVyIHRvIGJvZHkgZWxlbWVudFxuICAgIGxldCBib2R5RWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKSA/IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0gOiBudWxsO1xuICAgIGlmKGJvZHlFbGUgJiYgdGhpcy5vYnNlcnZlcil7XG4gICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoYm9keUVsZSk7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5jb2wgfHwgY2hhbmdlcy5jb2xMZyB8fCBjaGFuZ2VzLmNvbE1kIHx8IGNoYW5nZXMuY29sU20pe1xuICAgICAgd2luZG93ID8gdGhpcy5hcHBseSh3aW5kb3cuaW5uZXJXaWR0aCkgOiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdHJ5e1xuICAgICAgdGhpcy5vYnNlcnZlcj8udW5PYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfWNhdGNoKGUpe31cbiAgICBcbiAgfVxuXG4gIGFwcGx5KHdpZHRoOm51bWJlcil7XG4gICAgbGV0IHN0eWxlVG9BcHBseSA9ICcnO1xuICAgIGlmKHdpZHRoIDw9IDYwMCAmJiB0aGlzLmNvbFNtKXtcbiAgICAgIHN0eWxlVG9BcHBseSA9IHRoaXMuY29sU20gPyB0aGlzLmNvbFNtIDogdGhpcy5jb2xNZCA/IHRoaXMuY29sTWQgOiB0aGlzLmNvbExnID8gdGhpcy5jb2xMZyA6IHRoaXMuY29sO1xuICAgIH1lbHNlIGlmKHdpZHRoIDw9IDk1OSAmJiB0aGlzLmNvbFNtKXtcbiAgICAgIHN0eWxlVG9BcHBseSA9IHRoaXMuY29sTWQgPyB0aGlzLmNvbE1kIDogdGhpcy5jb2xMZyA/IHRoaXMuY29sTGcgOiB0aGlzLmNvbDtcbiAgICB9ZWxzZXtcbiAgICAgIHN0eWxlVG9BcHBseSA9ICB0aGlzLmNvbExnID8gdGhpcy5jb2xMZyA6IHRoaXMuY29sO1xuICAgIH1cblxuICAgIGlmKHN0eWxlVG9BcHBseSl7XG4gICAgICBpZihzdHlsZVRvQXBwbHkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PSAnZmlsbCcpe1xuICAgICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2ZsZXgnLCcxIDEgMCcpO1xuICAgICAgfWVsc2UgaWYoc3R5bGVUb0FwcGx5LmluY2x1ZGVzKCclJykpe1xuICAgICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2ZsZXgnLGAwIDAgJHtzdHlsZVRvQXBwbHl9YCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBjb2wgdmFsLCBzaG91bGQgYmUgYi93IDAgYW1kIDEwMCUgKHdpdGggJSkgb3IgZmlsbFwiKTtcbiAgICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdmbGV4JyxgMCAwIGF1dG9gKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnZmxleCcsYDAgMCBhdXRvYCk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19