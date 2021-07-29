import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[padding],[padding.top],[padding.left],[padding.bottom],[padding.right],[padding.x],[padding.y]'
})
export class PaddingDirective implements OnChanges {

  @Input('padding')        padding = '';
  @Input('padding.top')    paddingTop = '';
  @Input('padding.left')   paddingLeft = '';
  @Input('padding.bottom') paddingBottom = '';
  @Input('padding.right')  paddingRight = '';
  @Input('padding.x')      paddingX = '';
  @Input('padding.y')      paddingY = '';

  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes:any){

    if(changes.padding){
      this.helper.applyStyle(this.el,'padding',this.padding);
    }

    if(changes.paddingTop){
      this.helper.applyStyle(this.el,'paddingTop',this.paddingTop);
    }

    if(changes.paddingLeft){
      this.helper.applyStyle(this.el,'paddingLeft',this.paddingLeft);
    }

    if(changes.paddingBottom){
      this.helper.applyStyle(this.el,'paddingBottom',this.paddingBottom);
    }

    if(changes.paddingRight){
      this.helper.applyStyle(this.el,'paddingRight',this.paddingRight);
    }
    if(changes.paddingX){
      this.helper.applyStyle(this.el,'paddingLeft',this.paddingX);
      this.helper.applyStyle(this.el,'paddingRight',this.paddingX);
    }
    if(changes.paddingY){
      this.helper.applyStyle(this.el,'paddingTop',this.paddingY);
      this.helper.applyStyle(this.el,'paddingBottom',this.paddingY);
    }

  }
}
