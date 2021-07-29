import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[border],[border.width],[border.color],[border.style]'
})
export class BorderDirective implements OnChanges {
  @Input('border') border = '';
  @Input('border.width') borderWidth = '';
  @Input('border.color') borderColor = '';
  @Input('border.style') borderStyle = '';

  constructor(private el:ElementRef,private helper:HelperService) { }
  ngOnChanges(changes:any){
    if(changes.border){
      this.helper.applyStyle(this.el,'border',this.border);
    }
    if(changes.borderColor){
      this.helper.sanitizeAndApplyStyle(this.el,'borderColor',this.borderColor);
    }
    if(changes.borderWidth){
      this.helper.applyStyle(this.el,'borderWidth',this.borderWidth);
    }
    if(changes.borderStyle){
      this.helper.applyStyle(this.el,'borderStyle',this.borderStyle);
    }
  }

}
