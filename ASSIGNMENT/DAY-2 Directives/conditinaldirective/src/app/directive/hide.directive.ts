import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHide]',
  standalone: true
})
export class HideDirective {

  @Output() hideText: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click')
  toggleVisibility() {
    this.hideText.emit(!this.isTexthidden);
  }

  private get isTexthidden(): boolean {
    return this.hideText.observers.length > 0;
  }

}
