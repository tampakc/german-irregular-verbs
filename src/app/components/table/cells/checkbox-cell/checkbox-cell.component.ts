import { Component } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: '[app-checkbox-cell]',
  standalone: false,
  templateUrl: './checkbox-cell.component.html',
  styleUrl: './checkbox-cell.component.css',
})
export class CheckboxCellComponent extends CellDirective<boolean> {
  public input: boolean = false;

  CheckboxCellComponent() {
    this.isValid = this.data == false;
  }

  ngOnInit() {
    this.input = this.data;
  }

  protected override onChange(value: boolean) {
    this.setValue(value);
    this.data = value;
  }

  protected override calculateValidity(input: boolean): boolean {
    return true;
  }
}
