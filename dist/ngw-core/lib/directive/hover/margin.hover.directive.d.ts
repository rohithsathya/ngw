import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import * as i0 from "@angular/core";
export declare class MarginHoverDirective {
    private el;
    private helper;
    hoverMargin: string;
    hoverMarginTop: string;
    hoverMarginLeft: string;
    hoverMarginBottom: string;
    hoverMarginRight: string;
    hoverMarginX: string;
    hoverMarginY: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<MarginHoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MarginHoverDirective, "[hover.margin],[hover.margin.top],[hover.margin.left],[hover.margin.bottom],[hover.margin.right],[hover.margin.x],[hover.margin.y]", never, { "hoverMargin": "hover.margin"; "hoverMarginTop": "hover.margin.top"; "hoverMarginLeft": "hover.margin.left"; "hoverMarginBottom": "hover.margin.bottom"; "hoverMarginRight": "hover.margin.right"; "hoverMarginX": "hover.margin.x"; "hoverMarginY": "hover.margin.y"; }, {}, never>;
}
//# sourceMappingURL=margin.hover.directive.d.ts.map