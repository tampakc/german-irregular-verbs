import { Component, Input } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: '[app-dropdown-cell]',
  standalone: false,
  templateUrl: './dropdown-cell.component.html',
  styleUrls: ['./dropdown-cell.component.css']
})
export class DropdownCellComponent extends CellDirective<string> {
  @Input() options: string[] = [];
}
