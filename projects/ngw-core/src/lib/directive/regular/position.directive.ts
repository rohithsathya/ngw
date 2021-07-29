import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[position]'
})
export class PositionDirective implements OnChanges {
  @Input('position') position = '';
  constructor(private el:ElementRef,private helper:HelperService) { }
  ngOnChanges(changes:any){
    if(changes.position){
      this.helper.applyStyle(this.el,'position',this.position);
    }
  }

}
