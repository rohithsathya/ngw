import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class HeightDirective implements OnChanges {
    private el;
    private helper;
    height: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<HeightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<HeightDirective, "[height]", never, { "height": "height"; }, {}, never>;
}
//# sourceMappingURL=height.directive.d.ts.map