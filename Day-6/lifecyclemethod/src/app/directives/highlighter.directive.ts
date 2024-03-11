import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective {

  el:ElementRef
  constructor(el:ElementRef) { 
this.el=el
  }
@HostBinding("style.backgroundColor")
bgColor="teal"
  @HostListener("mouseenter")
  onMouseEnter(){
    // console.log("Mouse has been Enter");
   this.el.nativeElement.style.fontSize="50px" 
  }
  
  @HostListener("mouseleave")
  onMouseLeave(){
    this.el.nativeElement.style.fontSize="30px" 
    
  }
}
