import { Directive, Input, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocusInput]'
})
export class AutoFocusInputDirective implements AfterContentInit{

  @Input() public appAutoFocusInput: boolean;

  constructor( private el: ElementRef) { }

  public ngAfterContentInit() {
      setTimeout(() => {
this.el.nativeElement.focus();
      }, 500);
  }

}
