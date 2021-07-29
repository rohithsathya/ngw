import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ellipsis]'
})
export class EllipsisDirective  implements AfterViewInit{

  constructor(private el:ElementRef) { }
  ngAfterViewInit(){
    this.el.nativeElement.classList.add("ngw-ellipsis");
  }

}
