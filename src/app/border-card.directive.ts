import { Directive } from '@angular/core';

@Directive({
  selector: '[appBorderCard]' // Directive d'attribut donc on met des crochets
})
export class BorderCardDirective {

  constructor() { }

}
