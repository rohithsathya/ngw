import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[fontSize]'
})
export class FontSizeDirective implements OnChanges{

  @Input('fontSize') fontSize = '';
  
  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes:any){
    if(changes.fontSize){
      this.helper.applyStyle(this.el,'fontSize',this.fontSize);
    }
  }

}
