import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Directive({
  selector: '[ngwBtn]'
})
export class NgwBtnDirective implements OnChanges {

  @Input('ngwBtn') type = '';
  @Input ('color') color = '';

  themeColor:any;
  themeColorText:any;

  constructor(private el:ElementRef, private helper:HelperService) { }

  ngOnChanges(changes:any){
    if(changes.type || changes.color){
      this.apply();
    }
  }

  apply(){
    this.themeColor = this.helper.sanitizeThemeColor(this.color);
    this.themeColorText = this.helper.sanitizeThemeColor(this.color) == 'default' ? 'default-contrast' : this.helper.sanitizeThemeColor(this.color);
    this.themeColorText = this.helper.sanitizeThemeColor(this.color) == 'default' ? 'baseContent' : this.helper.sanitizeThemeColor(this.color);
    
    this.type = this.type ? this.type.toLowerCase() : 'default';

    let classList = this.el.nativeElement.classList;
    classList.add('ngw-btn');

    let textColorClass = `ngw-text-color-${this.themeColor}-contrast`;
    let themeTextColorClass = `ngw-text-color-${this.themeColorText}`;
    let bgColorClass = `ngw-bg-color-${this.themeColor}`;
    let hoverBgColorClass = `ngw-bg-hover-color-${this.themeColor}-400`;
    let borderColorClass = `ngw-border-color-${this.themeColor}-600`;
    let hoverBorderColorClass = `ngw-border-hover-color-${this.themeColor}-600`;
    let hoverLightBgColorClass = `ngw-bg-hover-color-${this.themeColor}-50`;


    textColorClass = `ngw-text-${this.themeColor}Content`;
    let ContentTextColorHoverClass = `ngw-text-hover-${this.themeColor}Content`;
    themeTextColorClass = `ngw-text-${this.themeColorText}`;
    bgColorClass = `ngw-bg-${this.themeColor}`;
    hoverBgColorClass = `ngw-bg-hover-${this.themeColor}Focus`;
    borderColorClass = `ngw-border-${this.themeColor}`;
    hoverBorderColorClass = `ngw-border-hover-${this.themeColor}Focus`;
    hoverLightBgColorClass = `ngw-bg-hover-${this.themeColor}Focus`;
    

    if(this.type == 'outline'){
      classList.add('ngw-btn-outline');
      classList.add('ngw-text-button');
      classList.add(borderColorClass);
      classList.add(themeTextColorClass);
      classList.add(ContentTextColorHoverClass);
      classList.add(hoverBgColorClass);
      //classList.add(hoverLightBgColorClass);

    }else if(this.type == 'flat'){
      classList.add('ngw-btn-flat');
      classList.add('ngw-text-button');
      classList.add(textColorClass);
      classList.add(borderColorClass);
      classList.add(bgColorClass);
      classList.add(hoverBgColorClass);

    }else if(this.type == 'raised'){
      classList.add('ngw-btn-raised');
      classList.add('ngw-text-button');
      classList.add(textColorClass);
      classList.add(borderColorClass);
      classList.add(bgColorClass);
      classList.add(hoverBgColorClass);

    }else if(this.type == 'icon'){
      classList.add('ngw-btn-icon');
      classList.add('ngw-text-button');
      classList.add(themeTextColorClass);
      classList.add(hoverBorderColorClass);
      classList.add(hoverBgColorClass);
      classList.add(ContentTextColorHoverClass);

    }else if(this.type == 'link'){
      classList.add('ngw-btn-link');
      classList.add('ngw-text-primary');

    }else{
      classList.add('ngw-text-button');
      classList.add(themeTextColorClass);
      classList.add(hoverLightBgColorClass);
      classList.add(ContentTextColorHoverClass);

    }

  }

}
