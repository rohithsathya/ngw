import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class BorderHoverDirective {
    private el;
    private helper;
    hoverBorder: string;
    hoverBorderWidth: string;
    hoverBorderColor: string;
    hoverBorderStyle: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<BorderHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BorderHoverDirective, "[hover.border],[hover.border.width],[hover.border.color],[hover.border.style]", never, { "hoverBorder": "hover.border"; "hoverBorderWidth": "hover.border.width"; "hoverBorderColor": "hover.border.color"; "hoverBorderStyle": "hover.border.style"; }, {}, never>;
}
//# sourceMappingURL=border.hover.directive.d.ts.map