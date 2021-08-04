import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class FontSizeDirective implements OnChanges {
    private el;
    private helper;
    fontSize: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<FontSizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FontSizeDirective, "[fontSize]", never, { "fontSize": "fontSize"; }, {}, never>;
}
//# sourceMappingURL=font-size.directive.d.ts.map