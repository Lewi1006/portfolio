import {AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollArrow]',
})
export class ScrollArrow implements AfterViewInit{

  constructor(private elementRef: ElementRef) {}

   ngAfterViewInit() {
    
    const observer = new IntersectionObserver(([entry]) => {
      
      if (entry.isIntersecting) {
        this.elementRef.nativeElement.classList.add('arrow-scrolled');
      } else {
        this.elementRef.nativeElement.classList.remove('arrow-scrolled');
      }
    },
   {
    threshold: 0,
  }
  
  
  );

    observer.observe(this.elementRef.nativeElement);
  }

}
