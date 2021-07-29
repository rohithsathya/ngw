import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
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
}
