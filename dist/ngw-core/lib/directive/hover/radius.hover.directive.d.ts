import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class RadiusHoverDirective {
    private el;
    private helper;
    hoverRadius: string;
    hoverRadiusTopLeft: string;
    hoverRadiusTopRight: string;
    hoverRadiusBottomLeft: string;
    hoverRadiusBottomRight: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<RadiusHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RadiusHoverDirective, "[hover.radius],[hover.radius.topLeft],[hover.radius.topRight],[hover.radius.bottomLeft],[hover.radius.bottomRight]", never, { "hoverRadius": "hover.radius"; "hoverRadiusTopLeft": "hover.radius.topLeft"; "hoverRadiusTopRight": "hover.radius.topRight"; "hoverRadiusBottomLeft": "hover.radius.bottomLeft"; "hoverRadiusBottomRight": "hover.radius.bottomRight"; }, {}, never>;
}
//# sourceMappingURL=radius.hover.directive.d.ts.map