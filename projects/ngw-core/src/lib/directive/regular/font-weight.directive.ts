import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[fontWeight]'
})
export class FontWeightDirective implements OnChanges{

  @Input('fontWeight') fontWeight = '';
  
  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes:any){
    if(changes.fontWeight){
      this.helper.applyStyle(this.el,'fontWeight',this.fontWeight);
    }
  }

}
