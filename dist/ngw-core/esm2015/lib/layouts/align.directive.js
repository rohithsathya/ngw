import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../services/helper.service';
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
            let ai = this.alignY == 'top' ? 'flex-start' : this.alignX; //align items
            ai = this.alignX == 'bottom' ? 'flex-end' : this.alignX;
            this.helper.applyStyle(this.el, 'display', 'flex');
            this.helper.applyStyle(this.el, 'alignItems', ai);
        }
    }
}
AlignDirective.decorators = [
    { type: Directive, args: [{
                selector: '[align],[align.x],[align.y]'
            },] }
];
AlignDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
AlignDirective.propDecorators = {
    align: [{ type: Input, args: ['align',] }],
    alignX: [{ type: Input, args: ['align.x',] }],
    alignY: [{ type: Input, args: ['align.y',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9sYXlvdXRzL2FsaWduLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSzNELE1BQU0sT0FBTyxjQUFjO0lBTXpCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUo5QyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1QsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFFb0MsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBVztRQUNyQixJQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUQsSUFBRyxRQUFRLElBQUksU0FBUyxFQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU0sSUFBRyxRQUFRLElBQUksV0FBVyxFQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQUssSUFBRyxRQUFRLElBQUksVUFBVSxFQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQUssSUFBRyxRQUFRLElBQUksWUFBWSxFQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQU0sSUFBRyxRQUFRLElBQUksY0FBYyxFQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQUssSUFBRyxRQUFRLElBQUksYUFBYSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQUssSUFBRyxRQUFRLElBQUksWUFBWSxFQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQU0sSUFBRyxRQUFRLElBQUksY0FBYyxFQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO2FBQUssSUFBRyxRQUFRLElBQUksYUFBYSxFQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3hCO1FBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQjtZQUMvRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUVyRDtRQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNiLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhO1lBQ3pFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXhELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBRWpEO0lBR0gsQ0FBQzs7O1lBbEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7WUFMbUIsVUFBVTtZQUNyQixhQUFhOzs7b0JBT25CLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxTQUFTO3FCQUNmLEtBQUssU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWxpZ25dLFthbGlnbi54XSxbYWxpZ24ueV0nXG59KVxuZXhwb3J0IGNsYXNzIEFsaWduRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ2FsaWduJykgYWxpZ24gPSAnJztcbiAgQElucHV0KCdhbGlnbi54JykgYWxpZ25YID0gJyc7XG4gIEBJbnB1dCgnYWxpZ24ueScpIGFsaWduWSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5hbGlnbiB8fCBjaGFuZ2VzLmFsaWduWCB8fCBjaGFuZ2VzLmFsaWduWSl7XG4gICAgICB0aGlzLmFwcGx5KCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHkoKXtcbiAgICBsZXQgYWxpZ25WYWwgPSB0aGlzLmFsaWduID8gdGhpcy5hbGlnbi50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgaWYoYWxpZ25WYWwgPT0gJ3RvcGxlZnQnKXtcbiAgICAgIHRoaXMuYWxpZ25YID0gJ2xlZnQnO1xuICAgICAgdGhpcy5hbGlnblkgPSAndG9wJztcbiAgICB9IGVsc2UgaWYoYWxpZ25WYWwgPT0gJ3RvcGNlbnRlcicpe1xuICAgICAgdGhpcy5hbGlnblggPSAnY2VudGVyJztcbiAgICAgIHRoaXMuYWxpZ25ZID0gJ3RvcCc7XG4gICAgfWVsc2UgaWYoYWxpZ25WYWwgPT0gJ3RvcHJpZ2h0Jyl7XG4gICAgICB0aGlzLmFsaWduWCA9ICdyaWdodCc7XG4gICAgICB0aGlzLmFsaWduWSA9ICd0b3AnO1xuICAgIH1lbHNlIGlmKGFsaWduVmFsID09ICdjZW50ZXJsZWZ0Jyl7XG4gICAgICB0aGlzLmFsaWduWCA9ICdsZWZ0JztcbiAgICAgIHRoaXMuYWxpZ25ZID0gJ2NlbnRlcic7XG4gICAgfSBlbHNlIGlmKGFsaWduVmFsID09ICdjZW50ZXJjZW50ZXInKXtcbiAgICAgIHRoaXMuYWxpZ25YID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmFsaWduWSA9ICdjZW50ZXInO1xuICAgIH1lbHNlIGlmKGFsaWduVmFsID09ICdjZW50ZXJyaWdodCcpe1xuICAgICAgdGhpcy5hbGlnblggPSAncmlnaHQnO1xuICAgICAgdGhpcy5hbGlnblkgPSAnY2VudGVyJztcbiAgICB9ZWxzZSBpZihhbGlnblZhbCA9PSAnYm90dG9tbGVmdCcpe1xuICAgICAgdGhpcy5hbGlnblggPSAnbGVmdCc7XG4gICAgICB0aGlzLmFsaWduWSA9ICdib3R0b20nO1xuICAgIH0gZWxzZSBpZihhbGlnblZhbCA9PSAnYm90dG9tY2VudGVyJyl7XG4gICAgICB0aGlzLmFsaWduWCA9ICdjZW50ZXInO1xuICAgICAgdGhpcy5hbGlnblkgPSAnYm90dG9tJztcbiAgICB9ZWxzZSBpZihhbGlnblZhbCA9PSAnYm90dG9tcmlnaHQnKXtcbiAgICAgIHRoaXMuYWxpZ25YID0gJ3JpZ2h0JztcbiAgICAgIHRoaXMuYWxpZ25ZID0gJ2JvdHRvbSc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5hbGlnblgpe1xuICAgICAgbGV0IGpjID0gdGhpcy5hbGlnblggPT0gJ2xlZnQnID8gJ2ZsZXgtc3RhcnQnIDogdGhpcy5hbGlnblg7IC8vanVzdGlmeSBjb250ZW50c1xuICAgICAgamMgPSB0aGlzLmFsaWduWCA9PSAncmlnaHQnID8gJ2ZsZXgtZW5kJyA6IHRoaXMuYWxpZ25YO1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCd0ZXh0QWxpZ24nLHRoaXMuYWxpZ25YKTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnanVzdGlmeUNvbnRlbnQnLGpjKTtcblxuICAgIH1cblxuICAgIGlmKHRoaXMuYWxpZ25ZKXtcbiAgICAgIGxldCBhaSA9IHRoaXMuYWxpZ25ZID09ICd0b3AnID8gJ2ZsZXgtc3RhcnQnIDogdGhpcy5hbGlnblg7IC8vYWxpZ24gaXRlbXNcbiAgICAgIGFpID0gdGhpcy5hbGlnblggPT0gJ2JvdHRvbScgPyAnZmxleC1lbmQnIDogdGhpcy5hbGlnblg7XG5cbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnZGlzcGxheScsJ2ZsZXgnKTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwnYWxpZ25JdGVtcycsYWkpO1xuXG4gICAgfVxuXG5cbiAgfVxuXG59XG4iXX0=