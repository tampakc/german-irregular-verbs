import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpoiler]',
  standalone: false
})
export class SpoilerDirective {
  @HostBinding('class.spoiler') baseClass = true;
  @HostBinding('class.revealed') revealed = false;

  @HostListener('click')
  toggleReveal() {
    this.revealed = !this.revealed;
  }
}
