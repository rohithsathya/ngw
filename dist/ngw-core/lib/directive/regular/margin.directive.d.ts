import { ElementRef, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';
export declare class MarginDirective implements OnChanges {
    private el;
    private helper;
    margin: string;
    marginTop: string;
    marginLeft: string;
    marginBottom: string;
    marginRight: string;
    marginX: string;
    marginY: string;
    constructor(el: ElementRef, helper: HelperService);
    ngOnChanges(changes: any): void;
}
