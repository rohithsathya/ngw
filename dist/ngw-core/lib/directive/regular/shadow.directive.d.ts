import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class ShadowDirective implements OnChanges {
    private el;
    private helper;
    shadow: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ShadowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ShadowDirective, "[shadow]", never, { "shadow": "shadow"; }, {}, never>;
}
//# sourceMappingURL=shadow.directive.d.ts.map