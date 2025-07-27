import { Component, Input } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: '[app-text-input-cell]',
  standalone: false,
  templateUrl: './text-input-cell.component.html',
  styleUrls: ['./text-input-cell.component.css'],
})
export class TextInputCellComponent extends CellDirective<string> {
  public input = '';

  ngOnInit(): void {
    this.input = '';
    this.isValid = false;
  }

  onBlur() {
    this.isTouched = true;
    this.setNewValidity(this.input == this.data);
  }

  protected override onChange(value: string) {
    this.setValue(value);
  }
}
