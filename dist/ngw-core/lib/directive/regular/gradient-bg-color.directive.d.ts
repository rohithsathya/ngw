import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class GradientBgColorDirective implements OnChanges {
    private el;
    private helper;
    gradientBgColor: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<GradientBgColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<GradientBgColorDirective, "[gradientBgColor]", never, { "gradientBgColor": "gradientBgColor"; }, {}, never>;
}
//# sourceMappingURL=gradient-bg-color.directive.d.ts.map