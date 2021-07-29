import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Directive({
  selector: '[col],[col.lg],[col.md],[col.sm]'
})
export class ColDirective implements OnInit,OnDestroy,OnChanges {

  @Input('col') col=''; //0-100%, fill
  @Input('col.lg') colLg='';
  @Input('col.md') colMd='';
  @Input('col.sm') colSm='';

  observer;

  constructor(private el:ElementRef, private helper:HelperService) { }

  ngOnInit(){
    this.helper.applyStyle(this.el,'overflow','auto');
    this.helper.applyStyle(this.el,'boxSizing','border-box');

    //@ts-ignore
    this.observer = new ResizeObserver((entries)=>{
      let width = entries[0].contentRect.width;
      this.apply(width);
    });

    //attach resize observer to body element
    let bodyEle = document.getElementsByTagName('body') ? document.getElementsByTagName('body')[0] : null;
    if(bodyEle && this.observer){
      this.observer.observe(bodyEle);
    }

  }

  ngOnChanges(changes:any){
    if(changes.col || changes.colLg || changes.colMd || changes.colSm){
      window ? this.apply(window.innerWidth) : null;
    }
  }

  ngOnDestroy(){
    this.observer.unObserve(this.el.nativeElement);
  }

  apply(width:number){
    let styleToApply = '';
    if(width <= 600 && this.colSm){
      styleToApply = this.colSm ? this.colSm : this.colMd ? this.colMd : this.colLg ? this.colLg : this.col;
    }else if(width <= 959 && this.colSm){
      styleToApply = this.colMd ? this.colMd : this.colLg ? this.colLg : this.col;
    }else{
      styleToApply =  this.colLg ? this.colLg : this.col;
    }

    if(styleToApply){
      if(styleToApply.toLocaleLowerCase() == 'fill'){
        this.helper.applyStyle(this.el,'flex','1 1 0');
      }else if(styleToApply.includes('%')){
        this.helper.applyStyle(this.el,'flex',`0 0 ${styleToApply}`);
      }else{
        console.warn("Invalid col val, should be b/w 0 amd 100% (with %) or fill");
        this.helper.applyStyle(this.el,'flex',`0 0 auto`);
      }
    }else{
      this.helper.applyStyle(this.el,'flex',`0 0 auto`);
    }

  }

}
