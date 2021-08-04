import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class FontWeightHoverDirective {
    private el;
    private helper;
    propValue: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<FontWeightHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FontWeightHoverDirective, "[hover.fontWeight]", never, { "propValue": "hover.fontWeight"; }, {}, never>;
}
//# sourceMappingURL=font-weight.hover.directive.d.ts.map