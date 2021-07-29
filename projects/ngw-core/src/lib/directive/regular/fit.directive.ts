import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[fit]'
})
export class FitDirective implements OnChanges {
  @Input('fit') fit = '' //valid options : contain,cover,fill,none,scale-down
  constructor(private el:ElementRef,private helper:HelperService) { }
  ngOnChanges(changes:any){
    if(changes.fit){
      this.helper.applyStyle(this.el,'objectFit',this.fit);
    }
  }
}
