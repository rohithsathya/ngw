import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
export declare class ColDirective implements OnInit, OnDestroy, OnChanges {
    private el;
    private helper;
    col: string;
    colLg: string;
    colMd: string;
    colSm: string;
    observer: any;
    constructor(el: ElementRef, helper: HelperService);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    apply(width: number): void;
}
