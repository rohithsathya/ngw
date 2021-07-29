import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class GradientBgColorDirective implements OnChanges {
    private el;
    private helper;
    gradientBgColor: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
