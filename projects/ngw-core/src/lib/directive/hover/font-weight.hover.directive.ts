import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[hover.fontWeight]'
})
export class FontWeightHoverDirective {

  @Input('hover.fontWeight') propValue = '';
  propertiesToSet:string[] = ['fontWeight'];
  backupValues:any = {};

  constructor(private el:ElementRef,private helper:HelperService) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    if(this.propValue){
      this.backupValues = this.helper.getStyleObject(this.el,this.propertiesToSet);
      this.helper.applyStyle(this.el,this.propertiesToSet[0],this.propValue);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.helper.setStyleObject(this.el,this.propertiesToSet,this.backupValues);
  }

}
