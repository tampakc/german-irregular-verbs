import { Component } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: '[app-checkbox-cell]',
  standalone: false,
  templateUrl: './checkbox-cell.component.html',
  styleUrl: './checkbox-cell.component.css',
})
export class CheckboxCellComponent extends CellDirective<boolean> {
  CheckboxCellComponent() {
    this.isValid = this.data == false;
  }
}
