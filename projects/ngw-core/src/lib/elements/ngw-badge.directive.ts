import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Directive({
  selector: '[ngwBadge]'
})
export class NgwBadgeDirective implements OnChanges,OnInit {

  @Input('ngwBadge') type = '';
  @Input ('color') color = '';

  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnInit(){
    this.apply();
  }

  ngOnChanges(changes){
    if(changes.color || this.type){
      this.apply();
    }
  }

  apply(){
    let classList = this.el.nativeElement.classList;
    classList.add('ngw-badge');
    let themeColor = this.helper.sanitizeThemeColor(this.color);
    //add type
    if(this.type.toLowerCase() == 'outline'){
      // let textColorClass = `ngw-text-color-${themeColor}`;
      // let borderColorClass = `ngw-border-color-${themeColor}`;

      let textColorClass = `ngw-text-${themeColor}`;
      let borderColorClass = `ngw-border-${themeColor}`;

      classList.add(borderColorClass);
      classList.add(textColorClass);
      this.helper.applyStyle(this.el,'border','1px solid');
    }else{
      // let bgColorClass = `ngw-bg-color-${themeColor}`;
      // let textColorClass = `ngw-text-color-${themeColor}-contrast`;

      let textColorClass = `ngw-text-${themeColor}Content`;
      let bgColorClass = `ngw-bg-${themeColor}`;

      classList.add(bgColorClass);
      classList.add(textColorClass);
    }
  
  }

}
