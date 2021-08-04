import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class PositionDirective implements OnChanges {
    private el;
    private helper;
    position: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PositionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<PositionDirective, "[position]", never, { "position": "position"; }, {}, never>;
}
//# sourceMappingURL=position.directive.d.ts.map