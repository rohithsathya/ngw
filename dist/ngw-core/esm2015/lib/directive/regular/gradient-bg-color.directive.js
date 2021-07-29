import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export class GradientBgColorDirective {
    constructor(el, helper) {
        this.el = el;
        this.helper = helper;
        this.gradientBgColor = '';
    }
    ngOnChanges(changes) {
        if (changes.gradientBgColor) {
            this.gradientBgColor = this.helper.sanitizeThemeColor(this.gradientBgColor);
            let biValue = `linear-gradient(to right, var(--ngw-${this.gradientBgColor}-600),var(--ngw-${this.gradientBgColor}-500),var(--ngw-${this.gradientBgColor}-400,rgba(91,33,182,0)))`;
            this.helper.applyStyle(this.el, 'backgroundImage', biValue);
        }
    }
}
GradientBgColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gradientBgColor]'
            },] }
];
GradientBgColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
GradientBgColorDirective.propDecorators = {
    gradientBgColor: [{ type: Input, args: ['gradientBgColor',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGllbnQtYmctY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd3LWNvcmUvc3JjL2xpYi9kaXJlY3RpdmUvcmVndWxhci9ncmFkaWVudC1iZy1jb2xvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUs5RCxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLFlBQW9CLEVBQWEsRUFBUyxNQUFvQjtRQUExQyxPQUFFLEdBQUYsRUFBRSxDQUFXO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUZwQyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQUVtQixDQUFDO0lBRW5FLFdBQVcsQ0FBQyxPQUFXO1FBQ3JCLElBQUcsT0FBTyxDQUFDLGVBQWUsRUFBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzVFLElBQUksT0FBTyxHQUFHLHVDQUF1QyxJQUFJLENBQUMsZUFBZSxtQkFBbUIsSUFBSSxDQUFDLGVBQWUsbUJBQW1CLElBQUksQ0FBQyxlQUFlLDBCQUEwQixDQUFDO1lBQ2xMLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7O1lBTG1CLFVBQVU7WUFDckIsYUFBYTs7OzhCQU9uQixLQUFLLFNBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ3JhZGllbnRCZ0NvbG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgR3JhZGllbnRCZ0NvbG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ2dyYWRpZW50QmdDb2xvcicpIGdyYWRpZW50QmdDb2xvciA9ICcnO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDpFbGVtZW50UmVmLHByaXZhdGUgaGVscGVyOkhlbHBlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLmdyYWRpZW50QmdDb2xvcil7XG4gICAgICB0aGlzLmdyYWRpZW50QmdDb2xvciA9IHRoaXMuaGVscGVyLnNhbml0aXplVGhlbWVDb2xvcih0aGlzLmdyYWRpZW50QmdDb2xvcik7XG4gICAgICBsZXQgYmlWYWx1ZSA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLW5ndy0ke3RoaXMuZ3JhZGllbnRCZ0NvbG9yfS02MDApLHZhcigtLW5ndy0ke3RoaXMuZ3JhZGllbnRCZ0NvbG9yfS01MDApLHZhcigtLW5ndy0ke3RoaXMuZ3JhZGllbnRCZ0NvbG9yfS00MDAscmdiYSg5MSwzMywxODIsMCkpKWA7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ2JhY2tncm91bmRJbWFnZScsYmlWYWx1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==