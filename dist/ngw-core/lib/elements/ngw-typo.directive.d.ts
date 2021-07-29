import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
export declare class NgwTypoDirective implements OnChanges {
    private el;
    private helper;
    type: string;
    muted: any;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
}
