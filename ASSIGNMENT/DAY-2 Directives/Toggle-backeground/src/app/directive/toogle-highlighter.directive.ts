import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToogleHighlighter]',
  standalone: true
})
export class ToogleHighlighterDirective {

  constructor(private el: ElementRef) { }
  @HostBinding("style.backgroundColor")
  color = "red";

  @HostListener("click")
  toggleColor() {
    this.el.nativeElement.style.backgroundColor = this.color;
    if (this.color == "red") {
      this.color = "green";
    }
    else{
      this.color = "red";
  } 
  }

}
