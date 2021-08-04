import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class BgColorHoverDirective {
    private el;
    private helper;
    hoverBgColor: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<BgColorHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BgColorHoverDirective, "[hover.bgColor]", never, { "hoverBgColor": "hover.bgColor"; }, {}, never>;
}
//# sourceMappingURL=bg-color.hover.directive.d.ts.map