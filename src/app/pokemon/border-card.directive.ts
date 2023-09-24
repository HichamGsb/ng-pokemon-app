import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]' // Directive d'attribut donc on met des crochets
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorderColor(this.initialColor);
   }

  @Input('pkmnBorderCard') borderColor: string; // alias
  // @Input() pkmnBorderCard: string; // sans alias
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(this.initialColor);
  }
  
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorderColor(color: String) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
