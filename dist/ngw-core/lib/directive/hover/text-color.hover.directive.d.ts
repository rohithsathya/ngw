import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class TextColorHoverDirective {
    private el;
    private helper;
    propValue: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<TextColorHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<TextColorHoverDirective, "[hover.textColor]", never, { "propValue": "hover.textColor"; }, {}, never>;
}
//# sourceMappingURL=text-color.hover.directive.d.ts.map