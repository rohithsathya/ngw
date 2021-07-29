import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class FontWeightDirective implements OnChanges {
    private el;
    private helper;
    fontWeight: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
