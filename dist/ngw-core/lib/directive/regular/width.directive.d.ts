import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class WidthDirective implements OnChanges {
    private el;
    private helper;
    width: any;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<WidthDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<WidthDirective, "[width]", never, { "width": "width"; }, {}, never>;
}
//# sourceMappingURL=width.directive.d.ts.map