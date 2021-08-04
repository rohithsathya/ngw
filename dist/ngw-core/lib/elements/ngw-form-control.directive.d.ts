import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
import * as i0 from "@angular/core";
export declare class NgwFormControlDirective implements OnChanges {
    private el;
    private helper;
    color: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDef<NgwFormControlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgwFormControlDirective, "[ngwFormControl]", never, { "color": "color"; }, {}, never>;
}
//# sourceMappingURL=ngw-form-control.directive.d.ts.map