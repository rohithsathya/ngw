import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective implements OnChanges {
  @Input() bgColor='';
  constructor(private el:ElementRef, private helper:HelperService ) { }
  ngOnChanges(changes:any){
    if(changes.bgColor){
      this.apply();
    }
  }
  apply(){
    this.helper.sanitizeAndApplyStyle(this.el,'backgroundColor',this.bgColor);
  }

}
