import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class FontSizeHoverDirective {
    private el;
    private helper;
    hoverFontSize: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<FontSizeHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FontSizeHoverDirective, "[hover.fontSize]", never, { "hoverFontSize": "hover.fontSize"; }, {}, never>;
}
//# sourceMappingURL=font-size.hover.directive.d.ts.map