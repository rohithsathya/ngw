import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class BorderHoverDirective {
    private el;
    private helper;
    hoverBorder: string;
    hoverBorderWidth: string;
    hoverBorderColor: string;
    hoverBorderStyle: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
