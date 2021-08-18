import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Directive({
  selector: '[ngwGlassBg]'
})
export class NgwGlassDirective implements OnChanges,OnInit {

  @Input('ngwGlassBg') glass = '';
  constructor(private el:ElementRef,private helper:HelperService) { }

  ngOnInit(){
    console.log("PHmG123DG1233..!!!");
    console.log("GlassBg");
    this.apply();
  }
  ngOnChanges(changes){
    if(changes.glass){
      this.apply();
    }
  }
  apply(){
    let isGlass = this.glass && this.glass.toLowerCase()=='false' ? false : true;
    if(isGlass){
     this.el.nativeElement.classList.add('glassBg');
    }else{
      this.el.nativeElement.classList.remove('glassBg');
    }
  }

}
