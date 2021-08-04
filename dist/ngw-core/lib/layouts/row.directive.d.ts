import { AfterViewInit, ElementRef } from '@angular/core';
import { HelperService } from '../services/helper.service';
import * as i0 from "@angular/core";
export declare class RowDirective implements AfterViewInit {
    private el;
    private helper;
    constructor(el: ElementRef, helper: HelperService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<RowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RowDirective, "[row]", never, {}, {}, never>;
}
//# sourceMappingURL=row.directive.d.ts.map