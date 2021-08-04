import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class PaddingHoverDirective {
    private el;
    private helper;
    hoverpadding: string;
    hoverpaddingTop: string;
    hoverpaddingLeft: string;
    hoverpaddingBottom: string;
    hoverpaddingRight: string;
    hoverpaddingX: string;
    hoverpaddingY: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<PaddingHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<PaddingHoverDirective, "[hover.padding],[hover.padding.top],[hover.padding.left],[hover.padding.bottom],[hover.padding.right],[hover.padding.x],[hover.padding.y]", never, { "hoverpadding": "hover.padding"; "hoverpaddingTop": "hover.padding.top"; "hoverpaddingLeft": "hover.padding.left"; "hoverpaddingBottom": "hover.padding.bottom"; "hoverpaddingRight": "hover.padding.right"; "hoverpaddingX": "hover.padding.x"; "hoverpaddingY": "hover.padding.y"; }, {}, never>;
}
//# sourceMappingURL=padding.hover.directive.d.ts.map