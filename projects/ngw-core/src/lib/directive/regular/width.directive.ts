import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[width]'
})
export class WidthDirective implements OnChanges {
  
  @Input('width') width;

  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes:any){
    changes.width ? this.helper.applyStyle(this.el,'width',this.width) : '';
  }

}
