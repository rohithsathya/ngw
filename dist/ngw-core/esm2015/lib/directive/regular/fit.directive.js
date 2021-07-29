import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class FitDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fit = ''; //valid options : contain,cover,fill,none,scale-down
    }
    ngOnChanges(changes) {
        if (changes.fit) {
            this.helper.applyStyle(this.el, 'objectFit', this.fit);
        }
    }
}
FitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fit]'
            },] }
];
FitDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FitDirective.propDecorators = {
    fit: [{ type: Input, args: ['fit',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvZml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxZQUFZO0lBRXZCLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQURoRCxRQUFHLEdBQUcsRUFBRSxDQUFBLENBQUMsb0RBQW9EO0lBQ1QsQ0FBQztJQUNuRSxXQUFXLENBQUMsT0FBVztRQUNyQixJQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87YUFDbEI7OztZQUxtQixVQUFVO1lBQ3JCLGFBQWE7OztrQkFNbkIsS0FBSyxTQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmaXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBGaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoJ2ZpdCcpIGZpdCA9ICcnIC8vdmFsaWQgb3B0aW9ucyA6IGNvbnRhaW4sY292ZXIsZmlsbCxub25lLHNjYWxlLWRvd25cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5maXQpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdvYmplY3RGaXQnLHRoaXMuZml0KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==