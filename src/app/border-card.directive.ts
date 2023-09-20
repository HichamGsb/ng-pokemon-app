import { Directive, ElementRef, Host, HostListener} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]' // Directive d'attribut donc on met des crochets
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorderColor('#f5f5f5');
   }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor("#009688");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor('#f5f5f5');
  }
  
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorderColor(color: String) {
    this.el.nativeElement.style.border = `solid 4x ${color}`;
  }
}
