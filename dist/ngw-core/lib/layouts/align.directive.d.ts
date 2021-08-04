import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
import * as i0 from "@angular/core";
export declare class AlignDirective implements OnChanges {
    private el;
    private helper;
    align: string;
    alignX: string;
    alignY: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlignDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<AlignDirective, "[align],[align.x],[align.y]", never, { "align": "align"; "alignX": "align.x"; "alignY": "align.y"; }, {}, never>;
}
//# sourceMappingURL=align.directive.d.ts.map