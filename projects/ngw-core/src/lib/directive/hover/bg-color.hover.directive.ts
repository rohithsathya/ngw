import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.bgColor]'
})
export class BgColorHoverDirective {

  @Input('hover.bgColor') hoverBgColor = '';
  propertiesToSet:string[] = ['backgroundColor'];
  backupValues:any = {};

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    if(this.hoverBgColor){
      this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);
      this.helper.sanitizeAndApplyStyle(this.el,'backgroundColor',this.hoverBgColor);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }

}
