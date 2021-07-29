import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class BorderDirective implements OnChanges {
    private el;
    private helper;
    border: string;
    borderWidth: string;
    borderColor: string;
    borderStyle: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
