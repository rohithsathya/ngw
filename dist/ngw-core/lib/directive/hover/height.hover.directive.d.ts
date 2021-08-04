import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class HeightHoverDirective {
    private el;
    private helper;
    propValue: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<HeightHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<HeightHoverDirective, "[hover.height]", never, { "propValue": "hover.height"; }, {}, never>;
}
//# sourceMappingURL=height.hover.directive.d.ts.map