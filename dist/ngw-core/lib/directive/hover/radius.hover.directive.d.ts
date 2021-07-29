import { ElementRef } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class RadiusHoverDirective {
    private el;
    private helper;
    hoverRadius: string;
    hoverRadiusTopLeft: string;
    hoverRadiusTopRight: string;
    hoverRadiusBottomLeft: string;
    hoverRadiusBottomRight: string;
    propertiesToSet: string[];
    backupValues: any;
    constructor(el: ElementRef, helper: HelperService);
    onMouseEnter(): void;
    onMouseLeave(): void;
}
