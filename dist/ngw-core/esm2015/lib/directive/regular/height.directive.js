import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class HeightDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.height = '';
    }
    ngOnChanges(changes) {
        if (changes.height) {
            this.helper.applyStyle(this.el, 'height', this.height);
        }
    }
}
HeightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[height]'
            },] }
];
HeightDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
HeightDirective.propDecorators = {
    height: [{ type: Input, args: ['height',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLEVBQWEsRUFBVSxNQUFvQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUY5QyxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBRXNDLENBQUM7SUFFcEUsV0FBVyxDQUFDLE9BQVc7UUFDckIsSUFBRyxPQUFPLENBQUMsTUFBTSxFQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7O3FCQU1uQixLQUFLLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hlbHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2hlaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIEhlaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLCBwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cbiAgXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KSB7XG4gICAgaWYoY2hhbmdlcy5oZWlnaHQpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdoZWlnaHQnLHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuXG59XG4iXX0=