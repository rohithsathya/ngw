import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
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
}
