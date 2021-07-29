import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class TextColorDirective implements OnChanges {
    private el;
    private helper;
    textColor: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
