import { Directive, ElementRef, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
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
PaddingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[padding],[padding.top],[padding.left],[padding.bottom],[padding.right],[padding.x],[padding.y]'
            },] }
];
PaddingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: HelperService }
];
PaddingDirective.propDecorators = {
    padding: [{ type: Input, args: ['padding',] }],
    paddingTop: [{ type: Input, args: ['padding.top',] }],
    paddingLeft: [{ type: Input, args: ['padding.left',] }],
    paddingBottom: [{ type: Input, args: ['padding.bottom',] }],
    paddingRight: [{ type: Input, args: ['padding.right',] }],
    paddingX: [{ type: Input, args: ['padding.x',] }],
    paddingY: [{ type: Input, args: ['padding.y',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3ctY29yZS9zcmMvbGliL2RpcmVjdGl2ZS9yZWd1bGFyL3BhZGRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLOUQsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixZQUFvQixFQUFhLEVBQVMsTUFBb0I7UUFBMUMsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFSckMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFFMkIsQ0FBQztJQUVuRSxXQUFXLENBQUMsT0FBVztRQUVyQixJQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsSUFBRyxPQUFPLENBQUMsVUFBVSxFQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUcsT0FBTyxDQUFDLFdBQVcsRUFBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBRyxPQUFPLENBQUMsWUFBWSxFQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUcsT0FBTyxDQUFDLFFBQVEsRUFBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBRyxPQUFPLENBQUMsUUFBUSxFQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0Q7SUFFSCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpR0FBaUc7YUFDNUc7OztZQUxtQixVQUFVO1lBQ3JCLGFBQWE7OztzQkFPbkIsS0FBSyxTQUFDLFNBQVM7eUJBQ2YsS0FBSyxTQUFDLGFBQWE7MEJBQ25CLEtBQUssU0FBQyxjQUFjOzRCQUNwQixLQUFLLFNBQUMsZ0JBQWdCOzJCQUN0QixLQUFLLFNBQUMsZUFBZTt1QkFDckIsS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUssU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcGFkZGluZ10sW3BhZGRpbmcudG9wXSxbcGFkZGluZy5sZWZ0XSxbcGFkZGluZy5ib3R0b21dLFtwYWRkaW5nLnJpZ2h0XSxbcGFkZGluZy54XSxbcGFkZGluZy55XSdcbn0pXG5leHBvcnQgY2xhc3MgUGFkZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCdwYWRkaW5nJykgICAgICAgIHBhZGRpbmcgPSAnJztcbiAgQElucHV0KCdwYWRkaW5nLnRvcCcpICAgIHBhZGRpbmdUb3AgPSAnJztcbiAgQElucHV0KCdwYWRkaW5nLmxlZnQnKSAgIHBhZGRpbmdMZWZ0ID0gJyc7XG4gIEBJbnB1dCgncGFkZGluZy5ib3R0b20nKSBwYWRkaW5nQm90dG9tID0gJyc7XG4gIEBJbnB1dCgncGFkZGluZy5yaWdodCcpICBwYWRkaW5nUmlnaHQgPSAnJztcbiAgQElucHV0KCdwYWRkaW5nLngnKSAgICAgIHBhZGRpbmdYID0gJyc7XG4gIEBJbnB1dCgncGFkZGluZy55JykgICAgICBwYWRkaW5nWSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZixwcml2YXRlIGhlbHBlcjpIZWxwZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG5cbiAgICBpZihjaGFuZ2VzLnBhZGRpbmcpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdwYWRkaW5nJyx0aGlzLnBhZGRpbmcpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMucGFkZGluZ1RvcCl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3BhZGRpbmdUb3AnLHRoaXMucGFkZGluZ1RvcCk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5wYWRkaW5nTGVmdCl7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3BhZGRpbmdMZWZ0Jyx0aGlzLnBhZGRpbmdMZWZ0KTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnBhZGRpbmdCb3R0b20pe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdwYWRkaW5nQm90dG9tJyx0aGlzLnBhZGRpbmdCb3R0b20pO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMucGFkZGluZ1JpZ2h0KXtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwncGFkZGluZ1JpZ2h0Jyx0aGlzLnBhZGRpbmdSaWdodCk7XG4gICAgfVxuICAgIGlmKGNoYW5nZXMucGFkZGluZ1gpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdwYWRkaW5nTGVmdCcsdGhpcy5wYWRkaW5nWCk7XG4gICAgICB0aGlzLmhlbHBlci5hcHBseVN0eWxlKHRoaXMuZWwsJ3BhZGRpbmdSaWdodCcsdGhpcy5wYWRkaW5nWCk7XG4gICAgfVxuICAgIGlmKGNoYW5nZXMucGFkZGluZ1kpe1xuICAgICAgdGhpcy5oZWxwZXIuYXBwbHlTdHlsZSh0aGlzLmVsLCdwYWRkaW5nVG9wJyx0aGlzLnBhZGRpbmdZKTtcbiAgICAgIHRoaXMuaGVscGVyLmFwcGx5U3R5bGUodGhpcy5lbCwncGFkZGluZ0JvdHRvbScsdGhpcy5wYWRkaW5nWSk7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==