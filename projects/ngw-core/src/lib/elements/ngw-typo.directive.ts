import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Directive({
  selector: '[ngwTypo]'
})
export class NgwTypoDirective implements OnChanges {

  @Input('ngwTypo') type = ''; //headline,title,subheading-2,subheading-1,caption
  @Input('muted') muted;

  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes){
    if(changes.type || changes.muted){
      this.apply();
    }
  }

  apply(){
    let isMuted = this.muted !== undefined && this.muted.toString().toLowerCase() == 'true' ? true : false;
    if(isMuted){
      this.el.nativeElement.classList.add(`ngw-text-muted`);
    }else{
      this.el.nativeElement.classList.remove(`ngw-text-muted`);
    }
    this.el.nativeElement.classList.add('ngw-text');
    this.el.nativeElement.classList.add(`ngw-text-${this.type.toLowerCase()}`);
  }

}
