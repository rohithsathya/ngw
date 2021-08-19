import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[gradientBgColor]'
})
export class GradientBgColorDirective implements OnChanges {

  @Input('gradientBgColor') gradientBgColor = '';
  
  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes:any){
    if(changes.gradientBgColor){
      this.gradientBgColor = this.helper.sanitizeThemeColor(this.gradientBgColor);
      //let biValue = `linear-gradient(to right, var(--ngw-${this.gradientBgColor}-600),var(--ngw-${this.gradientBgColor}-500),var(--ngw-${this.gradientBgColor}-400,rgba(91,33,182,0)))`;
      let biValue = `linear-gradient(to right, var(--ngw-theme-${this.gradientBgColor}Focus),var(--ngw-theme-${this.gradientBgColor}),var(--ngw-theme-${this.gradientBgColor},rgba(91,33,182,0)))`;
      this.helper.applyStyle(this.el,'backgroundImage',biValue);
    }
  }

}
