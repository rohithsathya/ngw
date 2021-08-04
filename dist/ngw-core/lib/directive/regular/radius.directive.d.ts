import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class RadiusDirective implements OnChanges {
    private el;
    private helper;
    radius: string;
    radiusTopLeft: string;
    radiusTopRight: string;
    radiusBottomLeft: string;
    radiusBottomRight: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<RadiusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RadiusDirective, "[radius],[radius.topLeft],[radius.topRadius],[radius.bottomLeft],[radius.bottomRight]", never, { "radius": "radius"; "radiusTopLeft": "radius.topLeft"; "radiusTopRight": "radius.topRight"; "radiusBottomLeft": "radius.bottomLeft"; "radiusBottomRight": "radius.bottomRight"; }, {}, never>;
}
//# sourceMappingURL=radius.directive.d.ts.map