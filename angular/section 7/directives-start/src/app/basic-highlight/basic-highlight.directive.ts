import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  // here we are placing the reference to the element in which the directive is placed on
  //   private will make this property of this class and automatically assign this value
  constructor(private elementRef: ElementRef) {
    // elementRef.nativeElement;
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
