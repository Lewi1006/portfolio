import {AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollArrow]',
})
export class ScrollArrow implements AfterViewInit{

  constructor(private elementRef: ElementRef) {}

   ngAfterViewInit() {
    
    const observer = new IntersectionObserver(([entry]) => {
      console.log('isIntersecting:', entry.isIntersecting);
      
      if (entry.isIntersecting) {
        console.log('ADDING CLASS');
        this.elementRef.nativeElement.classList.add('arrow-scrolled');
      } else {
         console.log('REMOVING CLASS');
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
