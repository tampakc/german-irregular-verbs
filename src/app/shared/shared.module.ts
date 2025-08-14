import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SpoilerDirective } from './directives/spoiler/spoiler.directive';

@NgModule({
  declarations: [SpoilerDirective],
  imports: [MatIconModule, CommonModule],
  exports: [MatIconModule, SpoilerDirective]
})
export class SharedModule {}
