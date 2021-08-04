import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class PaddingDirective implements OnChanges {
    private el;
    private helper;
    padding: string;
    paddingTop: string;
    paddingLeft: string;
    paddingBottom: string;
    paddingRight: string;
    paddingX: string;
    paddingY: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<PaddingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<PaddingDirective, "[padding],[padding.top],[padding.left],[padding.bottom],[padding.right],[padding.x],[padding.y]", never, { "padding": "padding"; "paddingTop": "padding.top"; "paddingLeft": "padding.left"; "paddingBottom": "padding.bottom"; "paddingRight": "padding.right"; "paddingX": "padding.x"; "paddingY": "padding.y"; }, {}, never>;
}
//# sourceMappingURL=padding.directive.d.ts.map