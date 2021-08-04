import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class ShadowHoverDirective {
    private el;
    private helper;
    propValue: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<ShadowHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ShadowHoverDirective, "[hover.shadow]", never, { "propValue": "hover.shadow"; }, {}, never>;
}
//# sourceMappingURL=shadow.hover.directive.d.ts.map