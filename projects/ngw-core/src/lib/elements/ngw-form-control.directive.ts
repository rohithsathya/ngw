import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Directive({
  selector: '[ngwFormControl]'
})
export class NgwFormControlDirective implements OnChanges {

  @Input('color') color='';

  constructor(private el:ElementRef,private helper:HelperService) { 
    this.el.nativeElement.classList.add("ngw-form-control");
  }

  ngOnChanges(changes:any){
    if(changes.color){
      this.apply();
    }
  }

  apply(){
    this.helper.themeColors.map((c)=>{
      //this.el.nativeElement.classList.remove(`ngw-border-color-${c}-600`); //remove any theme class that might have been added
      this.el.nativeElement.classList.remove(`ngw-border-${c}`); //remove any theme class that might have been added
    });
    let sanitizedColor  = this.helper.sanitizeThemeColor(this.color);
    //this.el.nativeElement.classList.add(`ngw-border-color-${sanitizedColor}-600`);
    this.el.nativeElement.classList.add(`ngw-border-${sanitizedColor}`);

  }

}
