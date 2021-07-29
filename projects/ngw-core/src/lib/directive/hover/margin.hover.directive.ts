import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.margin],[hover.margin.top],[hover.margin.left],[hover.margin.bottom],[hover.margin.right],[hover.margin.x],[hover.margin.y]'
})
export class MarginHoverDirective {

  @Input('hover.margin') hoverMargin = ''; 
  @Input('hover.margin.top') hoverMarginTop = ''; 
  @Input('hover.margin.left') hoverMarginLeft = ''; 
  @Input('hover.margin.bottom') hoverMarginBottom = ''; 
  @Input('hover.margin.right') hoverMarginRight = ''; 
  @Input('hover.margin.x') hoverMarginX = ''; 
  @Input('hover.margin.y') hoverMarginY = ''; 

  propertiesToSet:string[] = ['margin','marginTop','marginLeft','marginBottom','marginRight'];
  backupValues:any = {};

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);


    if(this.hoverMarginX){
      this.hoverMarginLeft = this.hoverMarginX;
      this.hoverMarginRight = this.hoverMarginX;
    }

    if(this.hoverMarginY){
      this.hoverMarginTop = this.hoverMarginY;
      this.hoverMarginBottom = this.hoverMarginY;
    }

    this.hoverMargin ? this.helper.applyStyle(this.el,this.propertiesToSet[0],this.hoverMargin) : '';
    this.hoverMarginTop ? this.helper.applyStyle(this.el,this.propertiesToSet[1],this.hoverMarginTop) : '';
    this.hoverMarginLeft ? this.helper.applyStyle(this.el,this.propertiesToSet[2],this.hoverMarginLeft) : '';
    this.hoverMarginBottom ? this.helper.applyStyle(this.el,this.propertiesToSet[3],this.hoverMarginBottom) : '';
    this.hoverMarginRight ? this.helper.applyStyle(this.el,this.propertiesToSet[4],this.hoverMarginRight) : '';
    
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }

}
