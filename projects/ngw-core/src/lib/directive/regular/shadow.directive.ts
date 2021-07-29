import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[shadow]'
})
export class ShadowDirective implements OnChanges {
  @Input('shadow') shadow = '';
  
  constructor(private el:ElementRef, private helper:HelperService) { }
  
  ngOnChanges(changes:any){
    if(changes.shadow){
     let shdowToApply = this.helper.sanitizeShadowValue(this.shadow);
     this.helper.applyStyle(this.el,'boxShadow',shdowToApply);
    }
   
  }

}
