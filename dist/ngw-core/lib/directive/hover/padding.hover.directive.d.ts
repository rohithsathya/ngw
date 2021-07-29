import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class PaddingHoverDirective {
    private el;
    private helper;
    hoverpadding: string;
    hoverpaddingTop: string;
    hoverpaddingLeft: string;
    hoverpaddingBottom: string;
    hoverpaddingRight: string;
    hoverpaddingX: string;
    hoverpaddingY: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
