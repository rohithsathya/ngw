import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Directive({
  selector: '[row]'
})
export class RowDirective implements AfterViewInit {

  constructor(private el:ElementRef,private helper:HelperService) { }

  ngAfterViewInit(){
    this.helper.applyStyle(this.el,'display','flex');
    this.helper.applyStyle(this.el,'flexDirection','row');
    this.helper.applyStyle(this.el,'flexWrap','wrap');
  }

}
