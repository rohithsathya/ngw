import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class MarginDirective implements OnChanges {
    private el;
    private helper;
    margin: string;
    marginTop: string;
    marginLeft: string;
    marginBottom: string;
    marginRight: string;
    marginX: string;
    marginY: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDef<MarginDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MarginDirective, "[margin],[margin.top],[margin.left],[margin.bottom],[margin.right],[margin.x],[margin.y]", never, { "margin": "margin"; "marginTop": "margin.top"; "marginLeft": "margin.left"; "marginBottom": "margin.bottom"; "marginRight": "margin.right"; "marginX": "margin.x"; "marginY": "margin.y"; }, {}, never>;
}
//# sourceMappingURL=margin.directive.d.ts.map