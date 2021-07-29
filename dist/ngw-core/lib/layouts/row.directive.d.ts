import { AfterViewInit, ElementRef } from '@angular/core';
import { HelperService } from '../services/helper.service';
export declare class RowDirective implements AfterViewInit {
    private el;
    private helper;
    constructor(el: ElementRef, helper: HelperService);
    ngAfterViewInit(): void;
}
