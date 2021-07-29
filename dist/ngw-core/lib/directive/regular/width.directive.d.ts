import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class WidthDirective implements OnChanges {
    private el;
    private helper;
    width: any;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
