import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective {

  
    constructor(private el: ElementRef) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }
  
@HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
  console.log("Mouse Enter");
  
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
  console.log("Mouse Leave");
}

private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}
