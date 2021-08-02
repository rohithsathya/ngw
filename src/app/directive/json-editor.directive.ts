import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
declare const JSONEditor:any;

@Directive({
  selector: '[ngwJsonEditor]'
})
export class JsonEditorDirective implements OnInit,OnChanges {

  @Input('ngwJsonEditor') ngwJsonEditor;
  private editor;

  constructor(private el:ElementRef) {
    let container = this.el.nativeElement;
    let options = {mode:'code'};
    this.editor = new JSONEditor(container,options);
   }
   ngOnInit(){}
   ngOnChanges(changes:any){
     if(changes.ngwJsonEditor){
      this.apply();
     }
   }
   apply(){
     this.editor.set(this.ngwJsonEditor);
   }

}
