import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class BgColorHoverDirective {
    private el;
    private helper;
    hoverBgColor: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
