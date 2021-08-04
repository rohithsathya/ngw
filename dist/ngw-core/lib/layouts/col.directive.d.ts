import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import * as i0 from "@angular/core";
export declare class ColDirective implements OnInit, OnDestroy, OnChanges {
    private el;
    private helper;
    col: string;
    colLg: string;
    colMd: string;
    colSm: string;
    observer: any;
    constructor(el: ElementRef, helper: HelperService);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    apply(width: number): void;
    static ɵfac: i0.ɵɵFactoryDef<ColDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ColDirective, "[col],[col.lg],[col.md],[col.sm]", never, { "col": "col"; "colLg": "col.lg"; "colMd": "col.md"; "colSm": "col.sm"; }, {}, never>;
}
//# sourceMappingURL=col.directive.d.ts.map