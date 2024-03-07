import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUpperCase]',
  standalone: true
})
export class UpperCaseDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const text = this.el.nativeElement.innerText.toUpperCase();
    this.renderer.setProperty(this.el.nativeElement, 'innerText', text);
  }
}