import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class FontSizeDirective implements OnChanges {
    private el;
    private helper;
    fontSize: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
