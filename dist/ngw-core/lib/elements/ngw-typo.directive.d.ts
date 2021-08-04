import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
import * as i0 from "@angular/core";
export declare class NgwTypoDirective implements OnChanges {
    private el;
    private helper;
    type: string;
    muted: any;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDef<NgwTypoDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgwTypoDirective, "[ngwTypo]", never, { "type": "ngwTypo"; "muted": "muted"; }, {}, never>;
}
//# sourceMappingURL=ngw-typo.directive.d.ts.map