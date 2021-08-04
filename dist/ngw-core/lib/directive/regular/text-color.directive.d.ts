import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class TextColorDirective implements OnChanges {
    private el;
    private helper;
    textColor: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<TextColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<TextColorDirective, "[textColor]", never, { "textColor": "textColor"; }, {}, never>;
}
//# sourceMappingURL=text-color.directive.d.ts.map