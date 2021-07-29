import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';
export declare class AlignDirective implements OnChanges {
    private el;
    private helper;
    align: string;
    alignX: string;
    alignY: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
    apply(): void;
}
