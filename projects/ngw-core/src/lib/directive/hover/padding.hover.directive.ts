import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.padding],[hover.padding.top],[hover.padding.left],[hover.padding.bottom],[hover.padding.right],[hover.padding.x],[hover.padding.y]'
})
export class PaddingHoverDirective {

  @Input('hover.padding') hoverpadding = ''; 
  @Input('hover.padding.top') hoverpaddingTop = ''; 
  @Input('hover.padding.left') hoverpaddingLeft = ''; 
  @Input('hover.padding.bottom') hoverpaddingBottom = ''; 
  @Input('hover.padding.right') hoverpaddingRight = ''; 
  @Input('hover.padding.x') hoverpaddingX = ''; 
  @Input('hover.padding.y') hoverpaddingY = ''; 

  propertiesToSet:string[] = ['padding','paddingTop','paddingLeft','paddingBottom','paddingRight'];
  backupValues:any = {};

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);


    if(this.hoverpaddingX){
      this.hoverpaddingLeft = this.hoverpaddingX;
      this.hoverpaddingRight = this.hoverpaddingX;
    }

    if(this.hoverpaddingY){
      this.hoverpaddingTop = this.hoverpaddingY;
      this.hoverpaddingBottom = this.hoverpaddingY;
    }

    this.hoverpadding ? this.helper.applyStyle(this.el,this.propertiesToSet[0],this.hoverpadding) : '';
    this.hoverpaddingTop ? this.helper.applyStyle(this.el,this.propertiesToSet[1],this.hoverpaddingTop) : '';
    this.hoverpaddingLeft ? this.helper.applyStyle(this.el,this.propertiesToSet[2],this.hoverpaddingLeft) : '';
    this.hoverpaddingBottom ? this.helper.applyStyle(this.el,this.propertiesToSet[3],this.hoverpaddingBottom) : '';
    this.hoverpaddingRight ? this.helper.applyStyle(this.el,this.propertiesToSet[4],this.hoverpaddingRight) : '';
    
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }

}
