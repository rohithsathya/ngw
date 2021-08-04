import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class BgColorDirective implements OnChanges {
    private el;
    private helper;
    bgColor: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDef<BgColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BgColorDirective, "[bgColor]", never, { "bgColor": "bgColor"; }, {}, never>;
}
//# sourceMappingURL=bg-color.directive.d.ts.map