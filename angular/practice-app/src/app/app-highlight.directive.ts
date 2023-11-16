import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.background = 'red';
  }
}
