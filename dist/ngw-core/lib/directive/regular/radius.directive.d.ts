import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class RadiusDirective implements OnChanges {
    private el;
    private helper;
    radius: string;
    radiusTopLeft: string;
    radiusTopRight: string;
    radiusBottomLeft: string;
    radiusBottomRight: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
