import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class FitDirective implements OnChanges {
    private el;
    private helper;
    fit: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<FitDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FitDirective, "[fit]", never, { "fit": "fit"; }, {}, never>;
}
//# sourceMappingURL=fit.directive.d.ts.map