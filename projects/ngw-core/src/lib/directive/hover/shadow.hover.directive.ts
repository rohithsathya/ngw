import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.shadow]'
})
export class ShadowHoverDirective {

  @Input('hover.shadow') propValue = '';
  propertiesToSet:string[] = ['boxShadow'];
  backupValues:any = {};

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    if(this.propValue){
      this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);
      
      let shdowToApply = this.helper.sanitizeShadowValue(this.propValue);
      this.helper.applyStyle(this.el,this.propertiesToSet[0],shdowToApply);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }

}
