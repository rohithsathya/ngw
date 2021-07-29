import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[height]'
})
export class HeightDirective implements OnChanges {
  @Input('height') height = '';

  constructor(private el:ElementRef, private helper:HelperService) { }
  
  ngOnChanges(changes:any) {
    if(changes.height){
      this.helper.applyStyle(this.el,'height',this.height);
    }
  }


}
