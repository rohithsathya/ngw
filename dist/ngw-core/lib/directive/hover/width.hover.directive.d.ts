import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class WidthHoverDirective {
    private el;
    private helper;
    propValue: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<WidthHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<WidthHoverDirective, "[hover.width]", never, { "propValue": "hover.width"; }, {}, never>;
}
//# sourceMappingURL=width.hover.directive.d.ts.map