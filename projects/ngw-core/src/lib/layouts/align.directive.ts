import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Directive({
  selector: '[align],[align.x],[align.y]'
})
export class AlignDirective implements OnChanges {

  @Input('align') align = '';
  @Input('align.x') alignX = '';
  @Input('align.y') alignY = '';

  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnChanges(changes:any){
    if(changes.align || changes.alignX || changes.alignY){
      this.apply();
    }
  }

  apply(){
    let alignVal = this.align ? this.align.toLowerCase() : '';
    if(alignVal == 'topleft'){
      this.alignX = 'left';
      this.alignY = 'top';
    } else if(alignVal == 'topcenter'){
      this.alignX = 'center';
      this.alignY = 'top';
    }else if(alignVal == 'topright'){
      this.alignX = 'right';
      this.alignY = 'top';
    }else if(alignVal == 'centerleft'){
      this.alignX = 'left';
      this.alignY = 'center';
    } else if(alignVal == 'centercenter'){
      this.alignX = 'center';
      this.alignY = 'center';
    }else if(alignVal == 'centerright'){
      this.alignX = 'right';
      this.alignY = 'center';
    }else if(alignVal == 'bottomleft'){
      this.alignX = 'left';
      this.alignY = 'bottom';
    } else if(alignVal == 'bottomcenter'){
      this.alignX = 'center';
      this.alignY = 'bottom';
    }else if(alignVal == 'bottomright'){
      this.alignX = 'right';
      this.alignY = 'bottom';
    }

    if(this.alignX){
      let jc = this.alignX == 'left' ? 'flex-start' : this.alignX; //justify contents
      jc = this.alignX == 'right' ? 'flex-end' : this.alignX;
      this.helper.applyStyle(this.el,'textAlign',this.alignX);
      this.helper.applyStyle(this.el,'justifyContent',jc);

    }

    if(this.alignY){
      let ai = this.alignY == 'top' ? 'flex-start' : this.alignX; //align items
      ai = this.alignX == 'bottom' ? 'flex-end' : this.alignX;

      this.helper.applyStyle(this.el,'display','flex');
      this.helper.applyStyle(this.el,'alignItems',ai);

    }


  }

}
