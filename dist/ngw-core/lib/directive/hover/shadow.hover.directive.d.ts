import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class ShadowHoverDirective {
    private el;
    private helper;
    propValue: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
