import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[radius],[radius.topLeft],[radius.topRadius],[radius.bottomLeft],[radius.bottomRight]'
})
export class RadiusDirective implements OnChanges {
  @Input('radius') radius = '';
  @Input('radius.topLeft') radiusTopLeft = '';
  @Input('radius.topRight') radiusTopRight = '';
  @Input('radius.bottomLeft') radiusBottomLeft = '';
  @Input('radius.bottomRight') radiusBottomRight = '';
  

  constructor(private el:ElementRef,private helper:HelperService) { }
  
  ngOnChanges(changes:any){

    changes.radius            ? this.helper.applyStyle(this.el,'borderRadius',this.radius) : '';
    changes.radiusTopLeft     ? this.helper.applyStyle(this.el,'borderTopLeftRadius',this.radiusTopLeft) : '';
    changes.radiusTopRight    ? this.helper.applyStyle(this.el,'borderTopRightRadius',this.radiusTopRight) : '';
    changes.radiusBottomLeft  ? this.helper.applyStyle(this.el,'borderBottomLeftRadius',this.radiusBottomLeft) : '';
    changes.radiusBottomRight ? this.helper.applyStyle(this.el,'borderBottomRightRadius',this.radiusBottomRight) : '';


  }


}
