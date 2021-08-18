import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[ngwClickable]'
})
export class NgwClickableDirective implements OnChanges {

  @Input('ngwClickable') clickable = '';
  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes){
    if(changes.clickable){
      this.apply();
    }
  }
  apply(){
    let isClickable = this.clickable && this.clickable.toLowerCase()=='false' ? false : true;
    if(isClickable){
      this.helper.applyStyle(this.el,'cursor','pointer');
    }
  }

}
