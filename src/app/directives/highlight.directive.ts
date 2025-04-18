import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';
/*directives -> allows you to extend or manipulate the behavior of elements in the DOM (Document Object Model). 
It's a way to apply custom behavior or modify the appearance of elements in a declarative and reusable manner. */

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // Takes the property binding/selector and sets the value of it based on passed variable
  @Input() appHighlight: string | undefined;

  /* The following below replaces the values that were in the constructor 
     below due to the upgrade from Angular 16 to Angular 17. */
  private el = inject(ElementRef); // Explicitly inject ElementRef
  private renderer = inject(Renderer2);

  /* Creates our variables for element and renderer that we can access from only within this class.
  *The following: private el: ElementRef, public renderer: Renderer2 inside the constructor() had to be removed in the Angular 16 to Angular 17 upgrade.*/
  constructor() { }

  // HostListener allows us to listen to certain events (like mouse events) and perform functions based on those events
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  // Highlight function sets the background color of selected element based on input color.
  private highlight(color:string){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
