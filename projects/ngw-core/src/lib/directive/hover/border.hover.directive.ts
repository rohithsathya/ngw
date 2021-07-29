import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.border],[hover.border.width],[hover.border.color],[hover.border.style]'
})
export class BorderHoverDirective {

  @Input('hover.border') hoverBorder = '';
  @Input('hover.border.width') hoverBorderWidth = '';
  @Input('hover.border.color') hoverBorderColor = '';
  @Input('hover.border.style') hoverBorderStyle = '';

  propertiesToSet:string[] = ['border','borderWidth','borderColor','borderStyle'];
  backupValues:any = {}

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);

    this.hoverBorder ? this.helper.applyStyle(this.el,'border',this.hoverBorder):'';
    this.hoverBorderWidth ? this.helper.applyStyle(this.el,'borderWidth',this.hoverBorderWidth):'';
    this.hoverBorderColor ? this.helper.sanitizeAndApplyStyle(this.el,'borderColor',this.hoverBorderColor):'';
    this.hoverBorderStyle ? this.helper.applyStyle(this.el,'borderStyle',this.hoverBorderStyle):'';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }


}
