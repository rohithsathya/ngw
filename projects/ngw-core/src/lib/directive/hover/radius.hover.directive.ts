import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.radius],[hover.radius.topLeft],[hover.radius.topRight],[hover.radius.bottomLeft],[hover.radius.bottomRight]'
})
export class RadiusHoverDirective {

  @Input('hover.radius') hoverRadius = '';
  @Input('hover.radius.topLeft') hoverRadiusTopLeft = '';
  @Input('hover.radius.topRight') hoverRadiusTopRight = '';
  @Input('hover.radius.bottomLeft') hoverRadiusBottomLeft = '';
  @Input('hover.radius.bottomRight') hoverRadiusBottomRight = '';

  propertiesToSet:string[] = ['borderRadius','borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius'];
  backupValues:any = {};

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);

    this.hoverRadius ? this.helper.applyStyle(this.el,this.propertiesToSet[0],this.hoverRadius) : '';
    this.hoverRadiusTopLeft ? this.helper.applyStyle(this.el,this.propertiesToSet[1],this.hoverRadiusTopLeft) : '';
    this.hoverRadiusTopRight ? this.helper.applyStyle(this.el,this.propertiesToSet[2],this.hoverRadiusTopRight) : '';
    this.hoverRadiusBottomLeft ? this.helper.applyStyle(this.el,this.propertiesToSet[3],this.hoverRadiusBottomLeft) : '';
    this.hoverRadiusBottomRight ? this.helper.applyStyle(this.el,this.propertiesToSet[4],this.hoverRadiusBottomRight) : '';
    
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }

}
