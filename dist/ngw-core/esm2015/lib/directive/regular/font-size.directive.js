import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class FontSizeDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.fontSize = '';
    }
    ngOnChanges(changes) {
        if (changes.fontSize) {
            this.helper.applyStyle(this.el, 'fontSize', this.fontSize);
        }
    }
}
FontSizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fontSize]'
            },] }
];
FontSizeDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
FontSizeDirective.propDecorators = {
    fontSize: [{ type: Input, args: ['fontSize',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ndy1jb3JlL3NyYy9saWIvZGlyZWN0aXZlL3JlZ3VsYXIvZm9udC1zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzlELE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFBb0IsRUFBYSxFQUFTLE1BQW9CO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRjNDLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFFaUMsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBVztRQUNyQixJQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFMbUIsVUFBVTtZQUNyQixhQUFhOzs7dUJBT25CLEtBQUssU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZm9udFNpemVdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb250U2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcblxuICBASW5wdXQoJ2ZvbnRTaXplJykgZm9udFNpemUgPSAnJztcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5mb250U2l6ZSl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2ZvbnRTaXplJyx0aGlzLmZvbnRTaXplKTtcbiAgICB9XG4gIH1cblxufVxuIl19