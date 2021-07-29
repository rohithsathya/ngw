import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective implements OnChanges {
  @Input('textColor') textColor = '';
  
  constructor(private el:ElementRef, private helper:HelperService) { }

  ngOnChanges(changes:any){
    changes.textColor ? this.helper.sanitizeAndApplyStyle(this.el,'color',this.textColor) : '';
  }

}
