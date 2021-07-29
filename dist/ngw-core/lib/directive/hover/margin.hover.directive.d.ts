import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class MarginHoverDirective {
    private el;
    private helper;
    hoverMargin: string;
    hoverMarginTop: string;
    hoverMarginLeft: string;
    hoverMarginBottom: string;
    hoverMarginRight: string;
    hoverMarginX: string;
    hoverMarginY: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
