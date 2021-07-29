import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[margin],[margin.top],[margin.left],[margin.bottom],[margin.right],[margin.x],[margin.y]'
})
export class MarginDirective implements OnChanges {

  @Input('margin')        margin = '';
  @Input('margin.top')    marginTop = '';
  @Input('margin.left')   marginLeft = '';
  @Input('margin.bottom') marginBottom = '';
  @Input('margin.right')  marginRight = '';
  @Input('margin.x')      marginX = '';
  @Input('margin.y')      marginY = '';

  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes:any){

    if(changes.margin){
      this.helper.applyStyle(this.el,'margin',this.margin);
    }

    if(changes.marginTop){
      this.helper.applyStyle(this.el,'marginTop',this.marginTop);
    }

    if(changes.marginLeft){
      this.helper.applyStyle(this.el,'marginLeft',this.marginLeft);
    }

    if(changes.marginBottom){
      this.helper.applyStyle(this.el,'marginBottom',this.marginBottom);
    }

    if(changes.marginRight){
      this.helper.applyStyle(this.el,'marginRight',this.marginRight);
    }
    if(changes.marginX){
      this.helper.applyStyle(this.el,'marginLeft',this.marginX);
      this.helper.applyStyle(this.el,'marginRight',this.marginX);
    }
    if(changes.marginY){
      this.helper.applyStyle(this.el,'marginTop',this.marginY);
      this.helper.applyStyle(this.el,'marginBottom',this.marginY);
    }

  }
}
