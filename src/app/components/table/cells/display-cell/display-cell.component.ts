import { Component, Input } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: '[app-display-cell]',
  standalone: false,
  templateUrl: './display-cell.component.html',
  styleUrls: ['./display-cell.component.css'],
})
export class DisplayCellComponent extends CellDirective<string> {
  @Input() spoiler: boolean = false;

  DisplayCellComponent() {
    this.isValid = true;
  }
}
