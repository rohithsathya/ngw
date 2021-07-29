import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
export declare class NgwFormControlDirective implements OnChanges {
    private el;
    private helper;
    color: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
}
