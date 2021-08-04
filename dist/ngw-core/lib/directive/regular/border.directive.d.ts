import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class BorderDirective implements OnChanges {
    private el;
    private helper;
    border: string;
    borderWidth: string;
    borderColor: string;
    borderStyle: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<BorderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BorderDirective, "[border],[border.width],[border.color],[border.style]", never, { "border": "border"; "borderWidth": "border.width"; "borderColor": "border.color"; "borderStyle": "border.style"; }, {}, never>;
}
//# sourceMappingURL=border.directive.d.ts.map