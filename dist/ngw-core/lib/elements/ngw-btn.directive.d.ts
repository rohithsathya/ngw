import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
import * as i0 from "@angular/core";
export declare class NgwBtnDirective implements OnChanges {
    private el;
    private helper;
    type: string;
    color: string;
    themeColor: any;
    themeColorText: any;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDef<NgwBtnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgwBtnDirective, "[ngwBtn]", never, { "type": "ngwBtn"; "color": "color"; }, {}, never>;
}
//# sourceMappingURL=ngw-btn.directive.d.ts.map