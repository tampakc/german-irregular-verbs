import { Component } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: '[app-display-cell]',
  standalone: false,
  templateUrl: './display-cell.component.html',
  styleUrls: ['./display-cell.component.css'],
})
export class DisplayCellComponent extends CellDirective<string> {
  DisplayCellComponent() {
    this.isValid = true;
  }
}
