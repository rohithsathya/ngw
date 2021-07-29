import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.fontSize]'
})
export class FontSizeHoverDirective {

  
  @Input('hover.fontSize') hoverFontSize = '';
  propertiesToSet:string[] = ['fontSize'];
  backupValues:any = {};

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    if(this.hoverFontSize){
      this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);
      this.helper.applyStyle(this.el,this.propertiesToSet[0],this.hoverFontSize);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }


}
