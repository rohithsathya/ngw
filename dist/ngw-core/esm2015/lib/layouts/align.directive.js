import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/helper.service";
export class AlignDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.align = '';
        this.alignX = '';
        this.alignY = '';
    }
    ngOnChanges(changes) {
        if (changes.align || changes.alignX || changes.alignY) {
            this.apply();
        }
    }
    apply() {
        let alignVal = this.align ? this.align.toLowerCase() : '';
        if (alignVal == 'topleft') {
            this.alignX = 'left';
            this.alignY = 'top';
        }
        else if (alignVal == 'topcenter') {
            this.alignX = 'center';
            this.alignY = 'top';
        }
        else if (alignVal == 'topright') {
            this.alignX = 'right';
            this.alignY = 'top';
        }
        else if (alignVal == 'centerleft') {
            this.alignX = 'left';
            this.alignY = 'center';
        }
        else if (alignVal == 'centercenter') {
            this.alignX = 'center';
            this.alignY = 'center';
        }
        else if (alignVal == 'centerright') {
            this.alignX = 'right';
            this.alignY = 'center';
        }
        else if (alignVal == 'bottomleft') {
            this.alignX = 'left';
            this.alignY = 'bottom';
        }
        else if (alignVal == 'bottomcenter') {
            this.alignX = 'center';
            this.alignY = 'bottom';
        }
        else if (alignVal == 'bottomright') {
            this.alignX = 'right';
            this.alignY = 'bottom';
        }
        if (this.alignX) {
            let jc = this.alignX == 'left' ? 'flex-start' : this.alignX; //justify contents
            jc = this.alignX == 'right' ? 'flex-end' : this.alignX;
            this.helper.applyStyle(this.el, 'textAlign', this.alignX);
            this.helper.applyStyle(this.el, 'justifyContent', jc);
        }
        if (this.alignY) {
            let ai = this.alignY == 'top' ? 'flex-start' : this.alignY; //align items
            ai = this.alignX == 'bottom' ? 'flex-end' : this.alignY;
            this.helper.applyStyle(this.el, 'display', 'flex');
            this.helper.applyStyle(this.el, 'alignItems', ai);
        }
    }
}
AlignDirective.ɵfac = function AlignDirective_Factory(t) { return new (t || AlignDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.HelperService)); };
AlignDirective.ɵdir = i0.ɵɵdefineDirective({ type: AlignDirective, selectors: [["", "align", ""], ["", "align.x", ""], ["", "align.y", ""]], inputs: { align: "align", alignX: ["align.x", "alignX"], alignY: ["align.y", "alignY"] }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlignDirective, [{
        type: Directive,
        args: [{
                selector: '[align],[align.x],[align.y]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.HelperService }]; }, { align: [{
            type: Input,
            args: ['align']
        }], alignX: [{
            type: Input,
            args: ['align.x']
        }], alignY: [{
            type: Input,
            args: ['align.y']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9sYXlvdXRzL2FsaWduLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXhFLE1BQU0sT0FBTyxjQUFjO0lBTXpCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUo5QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFFb0MsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBVztRQUNyQixJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUQsSUFBRyxRQUFRLElBQUksU0FBUyxFQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU0sSUFBRyxRQUFRLElBQUksV0FBVyxFQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQUssSUFBRyxRQUFRLElBQUksVUFBVSxFQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQUssSUFBRyxRQUFRLElBQUksWUFBWSxFQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQU0sSUFBRyxRQUFRLElBQUksY0FBYyxFQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQUssSUFBRyxRQUFRLElBQUksYUFBYSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQUssSUFBRyxRQUFRLElBQUksWUFBWSxFQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQU0sSUFBRyxRQUFRLElBQUksY0FBYyxFQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQUssSUFBRyxRQUFRLElBQUksYUFBYSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO1FBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQjtZQUMvRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUVyRDtRQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNiLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhO1lBQ3pFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXhELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBRWpEO0lBR0gsQ0FBQzs7NEVBL0RVLGNBQWM7bURBQWQsY0FBYzt1RkFBZCxjQUFjO2NBSDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDO3lGQUdpQixLQUFLO2tCQUFwQixLQUFLO21CQUFDLE9BQU87WUFDSSxNQUFNO2tCQUF2QixLQUFLO21CQUFDLFNBQVM7WUFDRSxNQUFNO2tCQUF2QixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbGlnbl0sW2FsaWduLnhdLFthbGlnbi55XSdcbn0pXG5leHBvcnQgY2xhc3MgQWxpZ25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgnYWxpZ24nKSBhbGlnbiA9ICcnO1xuICBASW5wdXQoJ2FsaWduLngnKSBhbGlnblggPSAnJztcbiAgQElucHV0KCdhbGlnbi55JykgYWxpZ25ZID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLmFsaWduIHx8IGNoYW5nZXMuYWxpZ25YIHx8IGNoYW5nZXMuYWxpZ25ZKXtcbiAgICAgIHRoaXMuYXBwbHkoKTtcbiAgICB9XG4gIH1cblxuICBhcHBseSgpe1xuICAgIGxldCBhbGlnblZhbCA9IHRoaXMuYWxpZ24gPyB0aGlzLmFsaWduLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICBpZihhbGlnblZhbCA9PSAndG9wbGVmdCcpe1xuICAgICAgdGhpcy5hbGlnblggPSAnbGVmdCc7XG4gICAgICB0aGlzLmFsaWduWSA9ICd0b3AnO1xuICAgIH0gZWxzZSBpZihhbGlnblZhbCA9PSAndG9wY2VudGVyJyl7XG4gICAgICB0aGlzLmFsaWduWCA9ICdjZW50ZXInO1xuICAgICAgdGhpcy5hbGlnblkgPSAndG9wJztcbiAgICB9ZWxzZSBpZihhbGlnblZhbCA9PSAndG9wcmlnaHQnKXtcbiAgICAgIHRoaXMuYWxpZ25YID0gJ3JpZ2h0JztcbiAgICAgIHRoaXMuYWxpZ25ZID0gJ3RvcCc7XG4gICAgfWVsc2UgaWYoYWxpZ25WYWwgPT0gJ2NlbnRlcmxlZnQnKXtcbiAgICAgIHRoaXMuYWxpZ25YID0gJ2xlZnQnO1xuICAgICAgdGhpcy5hbGlnblkgPSAnY2VudGVyJztcbiAgICB9IGVsc2UgaWYoYWxpZ25WYWwgPT0gJ2NlbnRlcmNlbnRlcicpe1xuICAgICAgdGhpcy5hbGlnblggPSAnY2VudGVyJztcbiAgICAgIHRoaXMuYWxpZ25ZID0gJ2NlbnRlcic7XG4gICAgfWVsc2UgaWYoYWxpZ25WYWwgPT0gJ2NlbnRlcnJpZ2h0Jyl7XG4gICAgICB0aGlzLmFsaWduWCA9ICdyaWdodCc7XG4gICAgICB0aGlzLmFsaWduWSA9ICdjZW50ZXInO1xuICAgIH1lbHNlIGlmKGFsaWduVmFsID09ICdib3R0b21sZWZ0Jyl7XG4gICAgICB0aGlzLmFsaWduWCA9ICdsZWZ0JztcbiAgICAgIHRoaXMuYWxpZ25ZID0gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIGlmKGFsaWduVmFsID09ICdib3R0b21jZW50ZXInKXtcbiAgICAgIHRoaXMuYWxpZ25YID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmFsaWduWSA9ICdib3R0b20nO1xuICAgIH1lbHNlIGlmKGFsaWduVmFsID09ICdib3R0b21yaWdodCcpe1xuICAgICAgdGhpcy5hbGlnblggPSAncmlnaHQnO1xuICAgICAgdGhpcy5hbGlnblkgPSAnYm90dG9tJztcbiAgICB9XG5cbiAgICBpZih0aGlzLmFsaWduWCl7XG4gICAgICBsZXQgamMgPSB0aGlzLmFsaWduWCA9PSAnbGVmdCcgPyAnZmxleC1zdGFydCcgOiB0aGlzLmFsaWduWDsgLy9qdXN0aWZ5IGNvbnRlbnRzXG4gICAgICBqYyA9IHRoaXMuYWxpZ25YID09ICdyaWdodCcgPyAnZmxleC1lbmQnIDogdGhpcy5hbGlnblg7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3RleHRBbGlnbicsdGhpcy5hbGlnblgpO1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdqdXN0aWZ5Q29udGVudCcsamMpO1xuXG4gICAgfVxuXG4gICAgaWYodGhpcy5hbGlnblkpe1xuICAgICAgbGV0IGFpID0gdGhpcy5hbGlnblkgPT0gJ3RvcCcgPyAnZmxleC1zdGFydCcgOiB0aGlzLmFsaWduWTsgLy9hbGlnbiBpdGVtc1xuICAgICAgYWkgPSB0aGlzLmFsaWduWCA9PSAnYm90dG9tJyA/ICdmbGV4LWVuZCcgOiB0aGlzLmFsaWduWTtcblxuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdkaXNwbGF5JywnZmxleCcpO1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdhbGlnbkl0ZW1zJyxhaSk7XG5cbiAgICB9XG5cblxuICB9XG5cbn1cbiJdfQ==