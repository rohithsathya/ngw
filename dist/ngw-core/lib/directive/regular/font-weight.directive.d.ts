import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class FontWeightDirective implements OnChanges {
    private el;
    private helper;
    fontWeight: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<FontWeightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FontWeightDirective, "[fontWeight]", never, { "fontWeight": "fontWeight"; }, {}, never>;
}
//# sourceMappingURL=font-weight.directive.d.ts.map