import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class FontSizeHoverDirective {
    private el;
    private helper;
    hoverFontSize: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
